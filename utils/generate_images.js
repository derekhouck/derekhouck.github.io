const generateResponsiveImages = require("responsive-images-generator");

const configs = [
  { width: "250px", rename: { suffix: "-250px" } },
  { width: "480px", rename: { suffix: "-480px" } },
  { width: "800px", rename: { suffix: "-800px" } },
  { width: "1400px", rename: { suffix: "-1400px" } }
];

const image_dir = "../assets/images";

const images = [`${image_dir}/kiki.jpg`];

generateResponsiveImages(images, configs);
