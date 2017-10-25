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
    'images/logo.png',
    'images/leaf.svg',
    'images/tool-box.svg',
    'images/weight-lifter.svg',
    'images/crazy-fast.svg',
    'images/gsap-superhero.svg',
    '../../base/images/Asset.svg'
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
  this.cont = this.smartObject({
    width: 300,
    height: 200,
    top: 0,
    left: 0,
    parent: this.banner,
    retina: true
  });
  this.logo = this.smartObject({
    backgroundImage: 'images/logo.png',
    retina: true,
    parent: this.banner
  });
  this.tool = this.smartObject({
    backgroundImage: 'images/leaf.svg',
    retina: true,
    parent: this.cont
  });
  /* this.textTool = this.smartObject({
    innerHTML: 'TOOLS',
    fontSize: 30,
    fontWeight: 900,
    retina: true,
    parent: this.banner
  }); */
  this.lifter = this.smartObject({
    backgroundImage: 'images/weight-lifter.svg',
    retina: true,
    parent: this.cont
  });
  this.crazy = this.smartObject({
    backgroundImage: 'images/crazy-fast.svg',
    retina: true,
    parent: this.cont
  });
  this.gsap = this.smartObject({
    backgroundImage: 'images/gsap-superhero.svg',
    retina: true,
    parent: this.cont,
  });

  this.money = this.smartObject({
    backgroundImage: '../../base/images/Asset.svg',
    retina: true,
    parent: this.banner,
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.logo.center();
  this.logo.set({ autoAlpha: 0, scale: 0.4 });
  this.gsap.set({ width: 50, height: 50, position: 'relative' });
  this.crazy.set({ width: 50, height: 50, position: 'relative' });
  this.tool.set({ width: 50, height: 50, position: 'relative' });
  this.lifter.set({ width: 50, height: 50, position: 'relative' });
  this.cont.appendChildren([this.gsap, this.crazy, this.tool, this.lifter]);
  this.cont.set({ display: '-webkit-flex', justifyContent: 'space-between' });
  this.money.center();
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
    .add(TweenLite.to(this.logo, 2, { autoAlpha: 1, scale: 0.7, delay: 1, ease: Elastic.easeOut }))
    .add(TweenLite.to(this.logo, 1, { autoAlpha: 0, scale: 0.4, delay: 1 }), 0.3)
    .add(TweenLite.from(this.tool, 1, { y: '-100' }), 0.5)
    .add(TweenLite.from(this.crazy, 1, { y: '-100' }), 0.7)
    .add(TweenLite.from(this.lifter, 1, { y: '-100' }), 0.9)
    .add(TweenLite.from(this.gsap, 1, { y: '-100' }), 1);


};
