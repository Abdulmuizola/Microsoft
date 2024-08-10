"use strict";

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const dotContainer = document.querySelector(".dot-container");
const dots = document.querySelectorAll(".dot");
const pause = document.querySelector(".pause");

const goToSlide = function (slide) {
  slides.forEach((each, i) => {
    each.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const activateDot = function (slide) {
  dots.forEach((dot, i) => {
    dot.classList.remove("dot--active");
  });
  document
    .querySelector(`.dot[data-slide = '${slide}']`)
    .classList.add("dot--active");
};

goToSlide(0);
// activateDot()

let currentSlide = 0;
let maxSlide = slides.length;

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    const lide = e.target.dataset.slide;
    goToSlide(lide);
    activateDot(lide);
  }
});

document.addEventListener("keydown", function (e) {
  // e.preventDefault()
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
  if (e.key === "ArrowRight") {
    nextSlide();
  }
});

const Interval = setInterval(nextSlide, 5000);

// pause.addEventListener('click', () => {
//     clearInterval(Interval);
//     nextSlide()
//     prevSlide
//     // goToSlide(currentSlide)
// })

// faded nav

const nav = document.querySelector(".left-nav");
// const navSecond = document.querySelector('.nav-2')
const nav2 = document.querySelector(".right-nav");

// creating a mouse over events on the parent nav;
const faded = function (e) {
  // target the hovered one
  // console.log(e.target);
  if (!e.target.classList.contains("fade")) return;
  const clicked = e.target;

  //get the rest of the nav links
  const siblings = clicked.closest(".left-nav").querySelectorAll(".fade");


  // loop through the links and fade it out except the hovered one
  siblings.forEach((child) => {
    if (child !== clicked) {
      child.style.opacity = this;
    }
  });
};
const fadedd = function (e) {
  // target the hovered one
  // console.log(e.target);
  if (!e.target.classList.contains("fade")) return;
  const clicked = e.target;

  //get the rest of the nav links
  const siblings = clicked.closest(".right-nav").querySelectorAll(".fade");


  // loop through the links and fade it out except the hovered one
  siblings.forEach((child) => {
    if (child !== clicked) {
      child.style.opacity = this;
      child.style.color = "black";
    }
  });
};

nav.addEventListener("mouseover", faded.bind(0.5));
nav.addEventListener("mouseout", faded.bind(1));

nav2.addEventListener("mouseover", fadedd.bind(0.5));
nav2.addEventListener("mouseout", fadedd.bind(1));

const mobileOpen = document.querySelector(".menu");
const mobileClose = document.querySelector(".list-icon");
const secondNav = document.querySelector(".nav-2");
const thirdNav = document.querySelector(".nav-3");

mobileOpen.addEventListener("click", function (e) {
  secondNav.style.display = "none";
  thirdNav.style.display = "block";
});

mobileClose.addEventListener("click", function (e) {
  secondNav.style.display = "flex";
  thirdNav.style.display = "none";
});



const modalOpen = document.querySelector('.nav-btn')
const modalClose = document.querySelector('.times')
const blurr = document.querySelector('.blur')
const modal = document.querySelector('.modal')

modalOpen.addEventListener('click', function (e) {
  modal.classList.remove('hidden')
  blurr.style.filter = 'blur(6px)'
})

modalClose.addEventListener('click', function (e) {
  modal.classList.add('hidden')
  blurr.style.filter = 'blur(0)'
})

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    blurr.style.filter = "blur(0)";
  }
});

