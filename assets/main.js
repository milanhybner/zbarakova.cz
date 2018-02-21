/* Carrd Core JS | carrd.co | License: MIT */

var	on = addEventListener,
	$ = function(q) { return document.querySelector(q) },
	$$ = function(q) { return document.querySelectorAll(q) },
	$body = document.body,
	$inner = $('.inner'),
	client = (function() {

		var o = {
				browser: 'other',
				browserVersion: 0,
				os: 'other',
				osVersion: 0
			},
			ua = navigator.userAgent,
			a, i;

		// browser, browserVersion.
			a = [
				['firefox',		/Firefox\/([0-9\.]+)/],
				['edge',		/Edge\/([0-9\.]+)/],
				['safari',		/Version\/([0-9\.]+).+Safari/],
				['chrome',		/Chrome\/([0-9\.]+)/],
				['ie',			/Trident\/.+rv:([0-9]+)/]
			];

			for (i=0; i < a.length; i++) {

				if (ua.match(a[i][1])) {

					o.browser = a[i][0];
					o.browserVersion = parseFloat(RegExp.$1);

					break;

				}

			}

		// os, osVersion.
			a = [
				['ios',			/([0-9_]+) like Mac OS X/,			function(v) { return v.replace('_', '.').replace('_', ''); }],
				['ios',			/CPU like Mac OS X/,				function(v) { return 0 }],
				['android',		/Android ([0-9\.]+)/,				null],
				['mac',			/Macintosh.+Mac OS X ([0-9_]+)/,	function(v) { return v.replace('_', '.').replace('_', ''); }],
				['windows',		/Windows NT ([0-9\.]+)/,			null]
			];

			for (i=0; i < a.length; i++) {

				if (ua.match(a[i][1])) {

					o.os = a[i][0];
					o.osVersion = parseFloat( a[i][2] ? (a[i][2])(RegExp.$1) : RegExp.$1 );

					break;

				}

			}

		return o;

	}()),
	trigger = function(t) {

		if (client.browser == 'ie') {

			var e = document.createEvent('Event');
			e.initEvent(t, false, true);
			dispatchEvent(e);

		}
		else
			dispatchEvent(new Event(t));

	};

// Animation.
	on('load', function() {
		setTimeout(function() {
			$body.className = $body.className.replace(/\bis-loading\b/, 'is-playing');

			setTimeout(function() {
				$body.className = $body.className.replace(/\bis-playing\b/, 'is-ready');
			}, 1000);
		}, 100);
	});

// Sections.
	(function() {

		var initialSection, initialScrollPoint, initialId,
			h, e, ee, k,
			locked = false,
			initialized = false,
			doScrollTop = function() {
				scrollTo(0, 0);
			},
			doScroll = function(e, instant) {

				var pos;

				// Determine position.
					switch (e.dataset.scrollBehavior ? e.dataset.scrollBehavior : 'default') {

						case 'default':
						default:

							pos = e.offsetTop;

							break;

						case 'center':

							if (e.offsetHeight < window.innerHeight)
								pos = e.offsetTop - ((window.innerHeight - e.offsetHeight) / 2);
							else
								pos = e.offsetTop;

							break;

						case 'previous':

							if (e.previousElementSibling)
								pos = e.previousElementSibling.offsetTop + e.previousElementSibling.offsetHeight;
							else
								pos = e.offsetTop;

							break;

					}

				// Scroll.
					if ('scrollBehavior' in $body.style
					&&	initialized
					&&	!instant)
						scrollTo({
							behavior: 'smooth',
							left: 0,
							top: pos
						});
					else
						scrollTo(0, pos);

			};

		// Initialize.

			// Set scroll restoration to manual.
				if ('scrollRestoration' in history)
					history.scrollRestoration = 'manual';

			// Show initial section.

				// Determine target.
					h = location.hash ? location.hash.substring(1) : null;

					// Scroll point.
						if (e = $('[data-scroll-id="' + h + '"]')) {

							initialScrollPoint = e;
							initialSection = initialScrollPoint.parentElement;
							initialId = initialSection.id;

						}

					// Section.
						else if (e = $('#' + (h ? h : 'home') + '-section')) {

							initialScrollPoint = null;
							initialSection = e;
							initialId = initialSection.id;

						}

				// Deactivate all sections (except initial).
					ee = $$('section:not([id="' + initialId + '"])');

					for (k = 0; k < ee.length; k++) {

						ee[k].className = 'inactive';
						ee[k].style.display = 'none';

					}

				// Activate initial section.
					initialSection.classList.add('active');

			 	// Scroll to top.
			 		doScrollTop();

			// Load event.
				on('load', function() {

					// Scroll to initial scroll point (if applicable).
				 		if (initialScrollPoint)
							doScroll(initialScrollPoint);

					// Mark as initialized.
						initialized = true;

				});

		// Hashchange event.
			on('hashchange', function(event) {

				var section, scrollPoint, id, sectionHeight, currentSection, currentSectionHeight,
					h, e, ee, k;

				// Lock.
					if (locked)
						return false;

				// Determine target.
					h = location.hash ? location.hash.substring(1) : null;

					// Scroll point.
						if (e = $('[data-scroll-id="' + h + '"]')) {

							scrollPoint = e;
							section = scrollPoint.parentElement;
							id = section.id;

						}

					// Section.
						else if (e = $('#' + (h ? h : 'home') + '-section')) {

							scrollPoint = null;
							section = e;
							id = section.id;

						}

					// Bail.
						else
							return false;

				// No section? Bail.
					if (!section)
						return false;

				// Section already active?
					if (!section.classList.contains('inactive')) {

					 	// Scroll to scroll point (if applicable).
					 		if (scrollPoint)
								doScroll(scrollPoint);

						// Otherwise, just scroll to top.
							else
							 	doScrollTop();

						// Bail.
							return false;

					}

				// Otherwise, activate it.
					else {

						// Lock.
							locked = true;

						// Clear "home" URL hash.
							if (location.hash == '#home')
								history.replaceState(null, null, '#');

								// Deactivate current section.
									currentSection = $('section:not(.inactive)');
									currentSection.classList.add('inactive');
									currentSection.classList.remove('active');
									currentSection.style.display = 'none';

								// Activate target section.
									section.classList.remove('inactive');
									section.classList.add('active');
									section.style.display = '';

								// Trigger 'resize' event.
									trigger('resize');

							 	// Scroll to scroll point (if applicable).
							 		if (scrollPoint)
										doScroll(scrollPoint, true);

								// Otherwise, just scroll to top.
									else
										doScrollTop();

								// Unlock.
									locked = false;

					}

				return false;

			});

			// Hack: Allow hashchange to trigger on click even if the target's href matches the current hash.
				on('click', function(event) {

					var t = event.target;

					// Target is an image and its parent is a link? Switch target to parent.
						if (t.tagName == 'IMG'
						&&	t.parentElement
						&&	t.parentElement.tagName == 'A')
							t = t.parentElement;

					// Target is an anchor *and* its href is a hash that matches the current hash?
						if (t.tagName == 'A'
						&&	t.getAttribute('href').substr(0, 1) == '#'
						&&	t.hash == window.location.hash) {

							// Prevent default.
								event.preventDefault();

							// Replace state with '#'.
								history.replaceState(undefined, undefined, '#');

							// Replace location with target hash.
								location.replace(t.hash);

						}

				});

	})();

// Platform-specific hacks.

	// Init.
		var style, sheet, rule;

		// Create <style> element.
			style = document.createElement('style');
			style.appendChild(document.createTextNode(''));
			document.head.appendChild(style);

		// Get sheet.
			sheet = style.sheet;

	// Android.
		if (client.os == 'android') {

			// Prevent background "jump" when address bar shrinks.
			// Specifically, this fix forces the background pseudoelement to a fixed height based on the physical
			// screen size instead of relying on "vh" (which is subject to change when the scrollbar shrinks/grows).
				(function() {

					// Insert and get rule.
						sheet.insertRule('body::after { }', 0);
						rule = sheet.cssRules[0];

					// Event.
						var f = function() {
							rule.style.cssText = 'height: ' + (Math.max(screen.width, screen.height)) + 'px';
						};

						on('load', f);
						on('orientationchange', f);
						on('touchmove', f);

				})();

		}

	// iOS.
		else if (client.os == 'ios') {

			// Prevent white bar below background when address bar shrinks.
			// For some reason, simply forcing GPU acceleration on the background pseudoelement fixes this.
				(function() {

					// Insert and get rule.
						sheet.insertRule('body::after { }', 0);
						rule = sheet.cssRules[0];

					// Set rule.
						rule.style.cssText = '-webkit-transform: scale(1.0)';

				})();

			// Prevent white bar below background when form inputs are focused.
			// Fixed-position elements seem to lose their fixed-ness when this happens, which is a problem
			// because our backgrounds fall into this category.
				(function() {

					// Insert and get rule.
						sheet.insertRule('body.ios-focus-fix::before { }', 0);
						rule = sheet.cssRules[0];

					// Set rule.
						rule.style.cssText = 'height: calc(100% + 60px)';

					// Add event listeners.
						on('focus', function(event) {
							$body.classList.add('ios-focus-fix');
						}, true);

						on('blur', function(event) {
							$body.classList.remove('ios-focus-fix');
						}, true);

				})();

		}

	// IE.
		else if (client.browser == 'ie') {

			// Flexbox workaround.
			// IE's flexbox implementation doesn't work when 'min-height' is used, so we can work around this
			// by switching to 'height' but simulating the behavior of 'min-height' via JS.
				(function() {
					var t, f;

					// Handler function.
						f = function() {

							var mh, h, s, xx, x, i;

							// Wrapper.
								x = $('#wrapper');

								x.style.height = 'auto';

								if (x.scrollHeight <= innerHeight)
									x.style.height = '100vh';

							// Containers with full modifier.
								xx = $$('.container.full');

								for (i=0; i < xx.length; i++) {

									x = xx[i];
									s = getComputedStyle(x);

									// Get min-height.
										x.style.minHeight = '';
										x.style.height = '';

										mh = s.minHeight;

									// Get height.
										x.style.minHeight = 0;
										x.style.height = '';

										h = s.height;

									// Zero min-height? Do nothing.
										if (mh == 0)
											continue;

									// Set height.
										x.style.height = (h > mh ? 'auto' : mh);

								}

						};

					// Do an initial call of the handler.
						(f)();

					// Add event listeners.
						on('resize', function() {

							clearTimeout(t);

							t = setTimeout(f, 250);

						});

						on('load', f);

				})();

		}

// Deferred.
	(function() {

		var items = $$('.deferred'),
			f;

		// Polyfill: NodeList.forEach()
			if (!('forEach' in NodeList.prototype))
				NodeList.prototype.forEach = Array.prototype.forEach;

		// Initialize items.
			items.forEach(function(p) {

				var i = p.firstChild;

				// Set parent to placeholder.
					p.style.backgroundImage = 'url(' + i.src + ')';
					p.style.backgroundSize = '100% auto';
					p.style.backgroundPosition = 'top left';
					p.style.backgroundRepeat = 'no-repeat';

				// Hide image.
					i.style.opacity = 0;
					i.style.transition = 'opacity 0.375s ease-in-out';

				// Load event.
					i.addEventListener('load', function(event) {

						// Not "done" yet? Bail.
							if (i.dataset.src !== 'done')
								return;

						// Show image.
							if (Date.now() - i._startLoad < 375) {

								p.classList.remove('loading');
								p.style.backgroundImage = 'none';
								i.style.transition = '';
								i.style.opacity = 1;

							}
							else {

								p.classList.remove('loading');
								i.style.opacity = 1;

								setTimeout(function() {
									p.style.backgroundImage = 'none';
								}, 375);

							}

					});

			});

		// Handler function.
			f = function() {

				var	height = document.documentElement.clientHeight,
					top = (client.os == 'ios' ? document.body.scrollTop : document.documentElement.scrollTop),
					bottom = top + height;

				// Step through items.
					items.forEach(function(p) {

						var i = p.firstChild;

						// Not visible? Bail.
							if (i.offsetParent === null)
								return true;

						// "Done" already? Bail.
							if (i.dataset.src === 'done')
								return true;

						// Get image position.
							var	x = i.getBoundingClientRect(),
								imageTop = top + Math.floor(x.top) - height,
								imageBottom = top + Math.ceil(x.bottom) + height,
								src;

						// Falls within viewable area of viewport?
							if (imageTop <= bottom && imageBottom >= top) {

								// Get src, mark as "done".
									src = i.dataset.src;
									i.dataset.src = 'done';

								// Mark parent as loading.
									p.classList.add('loading');

								// Swap placeholder for real image src.
									i._startLoad = Date.now();
									i.src = src;

							}

					});

			};

		// Add event listeners.
			on('load', f);
			on('resize', f);
			on('scroll', f);

	})();

// Timer.
	/**
	 * Timer.
	 * @param {string} id ID.
	 */
	function timer(id, timestamp, options) {
	
		var _this = this,
			f;
	
		/**
		 * ID.
		 * @var {string}
		 */
		this.id = id;
	
		/**
		 * Timestamp.
		 * @var {integer}
		 */
		this.timestamp = timestamp;
	
		/**
		 * Mode.
		 * @var {string}
		 */
		this.mode = options.mode;
	
		/**
		 * Precision.
		 * @var {integer}
		 */
		this.precision = options.precision;
	
		/**
		 * Complete URL.
		 * @var {string}
		 */
		this.completeUrl = options.completeUrl;
	
		/**
		 * Label style.
		 * @var {integer}
		 */
		this.labelStyle = options.labelStyle;
	
		/**
		 * Completed.
		 * @var {bool}
		 */
		this.completed = false;
	
		/**
		 * Status.
		 * @var {string}
		 */
		this.status = null;
	
		/**
		 * Timer.
		 * @var {HTMLElement}
		 */
		this.$timer = document.getElementById(this.id);
	
		/**
		 * Parent.
		 * @var {HTMLElement}
		 */
		this.$parent = document.querySelector('#' + _this.$timer.id + ' ul');
	
		/**
		 * Days.
		 * @var {HTMLElement}
		 */
		this.days = {
			$li: null,
			$digit: null,
			$components: null
		};
	
		/**
		 * Hours.
		 * @var {HTMLElement}
		 */
		this.hours = {
			$li: null,
			$digit: null,
			$components: null
		};
	
		/**
		 * Minutes.
		 * @var {HTMLElement}
		 */
		this.minutes = {
			$li: null,
			$digit: null,
			$components: null
		};
	
		/**
		 * Seconds.
		 * @var {HTMLElement}
		 */
		this.seconds = {
			$li: null,
			$digit: null,
			$components: null
		};
	
		// Initialize.
			this.init();
	
	};
	
		/**
		 * Initialize.
		 */
		timer.prototype.init = function() {
	
			var _this = this;
	
			// Digits.
	
				// Interval.
					window.setInterval(function() {
	
						// Update digits.
							_this.updateDigits();
	
						// Update size.
							_this.updateSize();
	
					}, 250);
	
				// Initial call.
					this.updateDigits();
	
			// Size.
	
				// Event.
					on('resize', function() {
						_this.updateSize();
					});
	
				// Initial call.
					this.updateSize();
	
		};
	
		/**
		 * Updates size.
		 */
		timer.prototype.updateSize = function() {
	
			var $items, $item, $digit, $components, $component, $label, $sublabel, $symbols,
				w, iw, h, f, i, j, found;
	
			$items = document.querySelectorAll('#' + this.$timer.id + ' ul li .item');
			$symbols = document.querySelectorAll('#' + this.$timer.id + ' .symbol');
			$components = document.querySelectorAll('#' + this.$timer.id + ' .component');
			h = 0;
			f = 0;
	
			// Reset component heights.
				for (j = 0; j < $components.length; j++) {
	
					$components[j].style.lineHeight = '';
					$components[j].style.height = '';
	
				}
	
			// Reset symbol heights, font sizes.
				for (j = 0; j < $symbols.length; j++) {
	
					$symbols[j].style.fontSize = '';
					$symbols[j].style.lineHeight = '';
					$symbols[j].style.height = '';
	
				}
	
			// Step through items.
				for (i = 0; i < $items.length; i++) {
	
					$item = $items[i];
					$component = $item.children[0].children[0];
	
					w = $component.offsetWidth;
					iw = $item.offsetWidth;
	
					// Set digit font size.
						$digit = $item.children[0];
	
						// Reset font size.
							$digit.style.fontSize = '';
	
						// Set font size.
							$digit.style.fontSize = (w * 1.65) + 'px';
	
						// Update component height.
							h = Math.max(h, $digit.offsetHeight);
	
						// Update font size.
							f = Math.max(f, (w * 1.65));
	
					// Set label visibility (if it exists).
						if ($item.children.length > 1) {
	
							$label = $item.children[1];
							found = false;
	
							// Step through sub-labels.
								for (j = 0; j < $label.children.length; j++) {
	
									$sublabel = $label.children[j];
	
									// Reset sub-label visibility.
										$sublabel.style.display = '';
	
									// Able to fit *and* haven't found a match already? Show sub-label.
										if (!found && $sublabel.offsetWidth < iw) {
	
											found = true;
											$sublabel.style.display = '';
	
										}
	
									// Otherwise, hide it.
										else
											$sublabel.style.display = 'none';
	
								}
	
						}
	
				}
	
			// Set component heights.
				for (j = 0; j < $components.length; j++) {
	
					$components[j].style.lineHeight = h + 'px';
					$components[j].style.height = h + 'px';
	
				}
	
			// Set symbol heights, font sizes.
				for (j = 0; j < $symbols.length; j++) {
	
					$symbols[j].style.fontSize = (f * 0.5) + 'px';
					$symbols[j].style.lineHeight = h + 'px';
					$symbols[j].style.height = h + 'px';
	
				}
	
			// Set parent height.
				this.$parent.style.height = '';
				this.$parent.style.height = this.$parent.offsetHeight + 'px';
	
		};
	
		/**
		 * Updates digits.
		 */
		timer.prototype.updateDigits = function() {
	
			var _this = this,
				x = [
					{
						class: 'days',
						digit: 0,
						label: {
							full: 'Days',
							abbreviated: 'Days',
							initialed: 'D'
						}
					},
					{
						class: 'hours',
						digit: 0,
						label: {
							full: 'Hours',
							abbreviated: 'Hrs',
							initialed: 'H'
						}
					},
					{
						class: 'minutes',
						digit: 0,
						label: {
							full: 'Minutes',
							abbreviated: 'Mins',
							initialed: 'M'
						}
					},
					{
						class: 'seconds',
						digit: 0,
						label: {
							full: 'Seconds',
							abbreviated: 'Secs',
							initialed: 'S'
						}
					},
				],
				now, diff,
				zeros, status, i, j, x, z, t, s;
	
			// Mode.
				now = parseInt(Date.now() / 1000);
	
				switch (this.mode) {
	
					case 'countdown':
						if (this.timestamp > now)
							diff = this.timestamp - now;
						else
							diff = 0;
	
						// Hit zero *and* a complete URL was provided? Redirect to it.
							if (diff == 0
							&&	this.completeUrl
							&&	!this.completed) {
	
								// Mark as completed.
									this.completed = true;
	
								// Redirect.
									window.setTimeout(function() {
										window.location.href = _this.completeUrl;
									}, 1000);
	
							}
	
						break;
	
					default:
					case 'default':
						if (this.timestamp > now)
							diff = this.timestamp - now;
						else
							diff = now - this.timestamp;
	
						break;
	
				}
	
			// Update counts.
	
				// Days.
					x[0].digit = Math.floor(diff / 86400);
					diff -= x[0].digit * 86400;
	
				// Hours.
					x[1].digit = Math.floor(diff / 3600);
					diff -= x[1].digit * 3600;
	
				// Minutes.
					x[2].digit = Math.floor(diff / 60);
					diff -= x[2].digit * 60;
	
				// Seconds.
					x[3].digit = diff;
	
			// Count zeros.
				zeros = 0;
	
				for (i = 0; i < x.length; i++)
					if (x[i].digit == 0)
						zeros++;
					else
						break;
	
			// Delete zeros if they exceed precision.
				while (zeros > 0 && x.length > this.precision) {
	
					x.shift();
					zeros--;
	
				}
	
			// Determine status.
				z = [];
	
				for (i = 0; i < x.length; i++)
					z.push(x[i].class);
	
				status = z.join('-');
	
			// Output.
	
				// Same status as before? Do a quick update.
					if (status == this.status) {
	
						var $digit, $components;
	
						for (i = 0; i < x.length; i++) {
	
							$digit = document.querySelector('#' + this.id + ' .' + x[i].class + ' .digit');
							$components = document.querySelectorAll('#' + this.id + ' .' + x[i].class + ' .digit .component');
	
							// No digit? Skip.
								if (!$digit)
									continue;
	
							// Get components.
								z = [];
								t = String(x[i].digit);
	
								if (x[i].digit < 10) {
	
									z.push('0');
									z.push(t);
	
								}
								else
									for (j = 0; j < t.length; j++)
										z.push(t.substr(j, 1));
	
							// Update count class.
								$digit.classList.remove('count1', 'count2', 'count3', 'count4');
								$digit.classList.add('count' + z.length);
	
							// Same number of components? Just update values.
								if ($components.length == z.length) {
	
									for (j = 0; j < $components.length && j < z.length; j++)
										$components[j].innerHTML = z[j];
	
								}
	
							// Otherwise, create new components.
								else {
	
									s = '';
	
									for (j = 0; j < $components.length && j < z.length; j++)
										s += '<span class="component x' + Math.random() + '">' + z[j] + '</span>';
	
									$digit.innerHTML = s;
	
								}
	
						}
	
					}
	
				// Otherwise, do a full one.
					else {
	
						s = '';
	
						for (i = 0; i < x.length && i < this.precision; i++) {
	
							// Get components.
								z = [];
								t = String(x[i].digit);
	
								if (x[i].digit < 10) {
	
									z.push('0');
									z.push(t);
	
								}
								else
									for (j = 0; j < t.length; j++)
										z.push(t.substr(j, 1));
	
							// Delimiter.
								if (i > 0)
									s +=	'<li class="delimiter">' +
												'<span class="symbol">:</span>' +
											'</li>';
	
							// Number.
								s +=		'<li class="number ' + x[i].class + '">' +
												'<div class="item">';
	
								// Digit.
									s +=			'<span class="digit count' + t.length + '">';
	
									for (j = 0; j < z.length; j++)
										s +=			'<span class="component">' + z[j] + '</span>';
	
									s +=			'</span>';
	
								// Label.
									switch (this.labelStyle) {
	
										default:
										case 'full':
											s +=					'<span class="label">' +
																		'<span class="full">' + x[i].label.full + '</span>' +
																		'<span class="abbreviated">' + x[i].label.abbreviated + '</span>' +
																		'<span class="initialed">' + x[i].label.initialed + '</span>' +
																	'</span>';
	
											break;
	
										case 'abbreviated':
											s +=					'<span class="label">' +
																		'<span class="abbreviated">' + x[i].label.abbreviated + '</span>' +
																		'<span class="initialed">' + x[i].label.initialed + '</span>' +
																	'</span>';
	
											break;
	
										case 'initialed':
											s +=					'<span class="label">' +
																		'<span class="initialed">' + x[i].label.initialed + '</span>' +
																	'</span>';
	
											break;
	
										case 'none':
											break;
	
									}
	
								s +=			'</div>' +
											'</li>';
	
						}
	
						// Replace HTML.
							_this.$parent.innerHTML = s;
	
						// Update status.
							this.status = status;
	
					}
	
		};

// Timer: timer01.
	new timer(
		'timer01',
		1525039199,
		{
			mode: 'countdown',
			precision: 4,
			completeUrl: '',
			labelStyle: 'initialed'
		}
	);
