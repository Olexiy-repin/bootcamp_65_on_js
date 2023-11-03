const gallery = baguetteBox.run('.js-gallery', {
  fullScreen: false,
  noScrollbars: true,

  afterShow: function () {
    console.log('After show!');
  },

  afterHide: function () {
    console.log('After hide!');
  },

  onChange: function () {
    console.log('Change');
  },
});

baguetteBox.show(3, gallery[0]);

console.log(gallery);
