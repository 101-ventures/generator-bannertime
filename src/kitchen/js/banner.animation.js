'use strict';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/bubbla.png',
    'images/man.png',
    'images/text.png',
    'images/Asset1.svg',
    'images/logo_2.png',
    'images/main_text.png',
    'images/slide_2_v1.png'
  ];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  this.bubbla = this.smartObject({
    backgroundImage: 'images/bubbla.png',
    parent: this.banner,
  });
  this.man = this.smartObject({
    backgroundImage: 'images/man.png',
    parent: this.banner,
  });
  this.texten = this.smartObject({
    backgroundImage: 'images/text.png',
    parent: this.banner,
  });
  this.mainText = this.smartObject({
    backgroundImage: 'images/main_text.png',
    parent: this.banner,
  });
  this.headText = this.smartObject({
    backgroundImage: 'images/Asset1.svg',
    parent: this.banner,
  });
  this.p4Logo = this.smartObject({
    backgroundImage: 'images/logo_2.png',
    parent: this.banner,
  });
  this.onskeText = this.smartObject({
    backgroundImage: 'images/slide_2_v1.png',
    parent: this.banner,
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.bubbla.center();
  this.bubbla.set({ autoAlpha: 0, scale: 0, marginTop: -156 });
  this.man.center();
  this.man.set({ autoAlpha: 1, scale: 1 });
  this.texten.center();
  this.texten.set({ autoAlpha: 0, marginTop: -156, scale: 0.3 });
  this.p4Logo.center();
  this.p4Logo.set({ marginLeft: 100, autoAlpha: 0, marginTop: 45 });
  this.mainText.center();
  this.mainText.set({
    autoAlpha: 0, marginTop: 2, marginLeft: -125, left: -200
  });
  this.onskeText.center();
  this.onskeText.set({ autoAlpha: 0, marginTop: 73, marginLeft: -140, left: -200 });
  this.headText.center();
  this.headText.set({ autoAlpha: 0, marginTop: -90, scale: 0.1 });
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var _this = this;

  function loop() {
    _this.timeline.gotoAndPlay('start');
  }


  this.timeline = new TimelineLite({ onComplete: loop })
    .addLabel('start', 0)
    .add(TweenLite.to(this.bubbla, 1, { autoAlpha: 1, scale: 1, }))
    .add(TweenLite.to(this.texten, 1, { autoAlpha: 1, scale: 1 }), 0.3)
    .add(TweenLite.to(this.bubbla, 0.5, { rotation: -45, delay: 0.6 }))
    .add(TweenLite.to(this.texten, 0.5, { rotation: -45, }), 1.90)
    .add(TweenLite.to(this.man, 0.5, { x: 200, }), 1.95)
    .add(TweenLite.to(this.bubbla, 0.9, { rotation: -45, y: -250, ease: Elastic.easeOut }))
    .add(TweenLite.to(this.texten, 0.9, { rotation: -45, y: -250, ease: Elastic.easeOut }), 2.41)
    .add(TweenLite.to(this.headText, 0.1, { scale: 0.5, autoAlpha: 1, skewY: 3, ease: Bounce.easeInOut }))
    .add(TweenLite.to(this.headText, 0.2, { scale: 0.1, autoAlpha: 1, skewY: -3, ease: Bounce.easeInOut }))
    .add(TweenLite.to(this.headText, 0.1, { scale: 0.3, autoAlpha: 1, skewY: 0, ease: Bounce.easeIn }))
    .add(TweenLite.to(this.headText, 0.2, { scale: 0.5, autoAlpha: 1, ease: Bounce.easeInOut }))
    .add(TweenLite.to(this.mainText, 0.3, { autoAlpha: 1, left: '50%', skewX: 15 }))
    .add(TweenLite.to(this.mainText, 0.1, { autoAlpha: 1, left: '50%', skewX: 0, ease: Bounce.easeInOut }))
    .add(TweenLite.to(this.onskeText, 0.2, {
      autoAlpha: 1, left: '50%', ease: Bounce.easeInOut, skewX: 15,
    }))
    .add(TweenLite.to(this.onskeText, 0.2, {
      autoAlpha: 1, left: '50%', ease: Bounce.easeInOut, skewX: 0,
    }))
    .add(TweenLite.to(this.p4Logo, 0.3, { autoAlpha: 1, scale: 1, rotation: -10, ease: Bounce.easeIn }, 4.1))
    .add(TweenLite.to(this.p4Logo, 0.3, { rotation: 0, delay: 0.2, ease: Bounce.easeOut }))
    .add(TweenLite.to(this.p4Logo, 0.5, { delay: 5 }));
};
