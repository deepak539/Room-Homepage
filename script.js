const icon = document.getElementById("icon");

const leftBtn = document.getElementById("left-btn");

const rightBtn = document.getElementById("right-btn");

const navBack = document.getElementById("nav-back");

const heading = document.getElementById("heading");

const para = document.getElementById("para");

var count = 0;

const bgImagesDesktop = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];

const bgImagesMobile = [
  "./images/mobile-image-hero-1.jpg",
  "./images/mobile-image-hero-2.jpg",
  "./images/mobile-image-hero-3.jpg",
];

const headings = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];

const paras = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];

window.addEventListener("load", () => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  if (vw <= 800) {
    navBack.style.backgroundImage = `url(${bgImagesMobile[count]})`;
  } else {
    navBack.style.backgroundImage = `url(${bgImagesDesktop[count]})`;
  }

  heading.innerText = headings[count];

  para.innerText = paras[count];
});

icon.addEventListener("click", () => {
  const imgIcon = document.getElementById("icon-img");
  const navList = document.getElementById("navlist");
  const navbar = document.getElementById("navbar");
  if (imgIcon.attributes[0].value === "./images/icon-hamburger.svg") {
    imgIcon.setAttribute("src", "./images/icon-close.svg");
    console.log(navList.style);
    navList.style.display = "flex";
    navbar.style.background = "White";
  } else {
    imgIcon.setAttribute("src", "./images/icon-hamburger.svg");
    navList.style.display = "none";
    navbar.style.background = "transparent";
  }
});

leftBtn.addEventListener("click", () => {
  console.log("left clicked");
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  if (count !== 0) {
    count--;
  } else {
    count = bgImagesDesktop.length - 1;
  }
  console.log("Count updated");

  heading.innerText = headings[count];
  para.innerText = paras[count];

  if (vw <= 800) {
    navBack.style.backgroundImage = `url(${bgImagesMobile[count]})`;
  } else {
    navBack.style.backgroundImage = `url(${bgImagesDesktop[count]})`;
  }

  console.log("Text and image updated");
});

rightBtn.addEventListener("click", () => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  if (count === bgImagesDesktop.length - 1) {
    count = 0;
  } else {
    count++;
  }

  heading.innerText = headings[count];
  para.innerText = paras[count];

  if (vw <= 800) {
    navBack.style.backgroundImage = `url(${bgImagesMobile[count]})`;
  } else {
    navBack.style.backgroundImage = `url(${bgImagesDesktop[count]})`;
  }
});
