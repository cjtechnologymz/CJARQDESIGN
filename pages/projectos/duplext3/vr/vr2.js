const panoramaImage = new PANOLENS.ImagePanorama("/pages/projectos/duplext3/vr/vr4.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
});

viewer.add(panoramaImage);
