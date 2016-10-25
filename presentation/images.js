let images = {
  cover: require("../assets/images/cover.jpg"),
  loick: require("../assets/images/loick.jpg"),
  jsEquality: require("../assets/images/js-equality.png"),
  trollFace: require("../assets/images/troll-face.png"),
  php6: require("../assets/images/php6.jpg"),
  unicodeMath: require("../assets/images/unicode-math.png"),
  unicodeTest: require("../assets/images/unicode-test.png"),
  unicodeObfuscation: require("../assets/images/unicode-obfuscation.png"),
  sparta: require("../assets/images/sparta.jpg"),
  leia: require("../assets/images/leia.gif"),
  aceVentura: require("../assets/images/ace-ventura.gif"),
  travolta: require("../assets/images/travolta.gif"),
  versus: require("../assets/images/versus.png"),
};

Object.keys(images).forEach(image => {
  images[image] = images[image].replace('/', '');
});

export default images;
