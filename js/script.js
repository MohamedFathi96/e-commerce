// Menu bar

const navList = document.querySelector(".navList");
const menuIcon = document.querySelector(".menu");
const cartIcon = document.querySelector(".cartIcon");
const closeIcon = document.querySelector(".close");

window.addEventListener("resize", setNavigationBar);
window.addEventListener("load", setNavigationBar);
function setNavigationBar() {
  if (window.innerWidth < 800) {
    navList.classList.add("toggle-off");
    menuIcon.classList.remove("hidden");
    cartIcon.classList.remove("hidden");
  } else {
    navList.classList.remove("toggle-off");
    menuIcon.classList.add("hidden");
    cartIcon.classList.add("hidden");
  }
}

menuIcon.addEventListener("click", () => {
  navList.classList.add("toggle-on");
  closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  navList.classList.remove("toggle-on");
  closeIcon.classList.add("hidden");
});

// Product Gallery

const previewdImage = document.querySelector(".preview-image");
const alternativeImages = document.querySelectorAll(".alternative > img");
alternativeImages.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    let srcHolder = previewdImage.src;
    previewdImage.src = event.target.src;
    event.target.src = srcHolder;
  });
});
