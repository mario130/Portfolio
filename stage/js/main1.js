const swup = new Swup({
  plugins: [new SwupScrollPlugin()],
});

window.addEventListener("load", function () {
  $(".load-wrapper").fadeOut();
  document.body.style.overflow = "auto";
});
function fadeFromLeft() {
  let headings = document.querySelectorAll(".fade-from-left");
  headings.forEach((headling) => {
    let headingsPos = headling.getBoundingClientRect().top;
    let screenPos = window.innerHeight / 1.1;

    // for performance
    if (headling.classList.contains("fade-start-left")) return;

    if (headingsPos < screenPos) {
      headling.classList.add("fade-start-left");
    }
  });
}

function fadeFromRight() {
  let headings = document.querySelectorAll(".fade-from-right");
  headings.forEach((headling) => {
    let headingsPos = headling.getBoundingClientRect().top;
    let screenPos = window.innerHeight / 1.1;

    if (headling.classList.contains("fade-start-right")) return;
    if (headingsPos < screenPos) {
      headling.classList.add("fade-start-right");
    }
  });
}

function fadeUp() {
  let headings = document.querySelectorAll(".fade-up");
  headings.forEach((headling) => {
    let headingsPos = headling.getBoundingClientRect().top;
    let screenPos = window.innerHeight / 1.1;

    if (headling.classList.contains("fade-up-start")) return;
    if (headingsPos < screenPos) {
      headling.classList.add("fade-up-start");
    }
  });
}

function fadeUpNow() {
  let headings = document.querySelectorAll(".fade-in-later");
  headings.forEach((headling) => {
    let headingsPos = headling.getBoundingClientRect().top;
    let screenPos = window.innerHeight / 1.1;

    if (headling.classList.contains("fade-in-later-start")) return;
    if (headingsPos < screenPos) {
      headling.classList.add("fade-in-later-start");
    }
  });
}

window.addEventListener("scroll", fadeFromLeft);
window.addEventListener("scroll", fadeFromRight);
window.addEventListener("scroll", fadeUp);
window.addEventListener("scroll", fadeUpNow);

let headings = document.querySelectorAll(".fade-down");
headings.forEach((headling) => {
  let headingsPos = headling.getBoundingClientRect().top;
  let screenPos = window.innerHeight / 1.1;

  window.onload = function () {
    if (document.title === "Mario Yonan - Works") {
      document.querySelector(".fade-in").classList.add("fade-in-start");
      document.querySelector(".fade-up-now").classList.add("fade-up-now-start");
    }
    headling.classList.add("fade-down-start");
  };
});

// nav indicator
let navLinks = document.querySelectorAll(".nav-list li a");
// navLinks.forEach((link) => {
//   if (link.dataset.indicator === document.title) {
//     link.classList.add("active");
//   }
// });
// if (document.title === "Mario Yonan - About") {
//   document.querySelector(".fade-up-now-abt").classList.add("fade-up-now-start");
// }

// navLinks[0].classList.add('active')
document.title === "Mario Yonan - About"
  ? navLinks[1].classList.add("active")
  : navLinks[0].classList.add("active");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    $(link).addClass('active').parent().siblings().children('a').removeClass('active')
  });
});

