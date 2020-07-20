function fadeFromLeft() {
  let headings = document.querySelectorAll(".fade-from-left");
  headings.forEach((headling) => {
    let headingsPos = headling.getBoundingClientRect().top;
    let screenPos = window.innerHeight / 1.1;

    if (headingsPos < screenPos) {
      headling.classList.add("fade-start-left");
    } else {
      headling.classList.remove("fade-start-left");
    }
  });
}

window.addEventListener("scroll", fadeFromLeft);

function fadeFromRight() {
  let headings = document.querySelectorAll(".fade-from-right");
  headings.forEach((headling) => {
    let headingsPos = headling.getBoundingClientRect().top;
    let screenPos = window.innerHeight / 1.1;

    if (headingsPos < screenPos) {
      headling.classList.add("fade-start-right");
    } else {
      headling.classList.remove("fade-start-right");
    }
  });
}

window.addEventListener("scroll", fadeFromRight);

function fadeUp() {
  let headings = document.querySelectorAll(".fade-up");
  headings.forEach((headling) => {
    let headingsPos = headling.getBoundingClientRect().top;
    let screenPos = window.innerHeight / 1.1;

    if (headingsPos < screenPos) {
      headling.classList.add("fade-up-start");
    } else {
      headling.classList.remove("fade-up-start");
    }
  });
}

window.addEventListener("scroll", fadeUp);

// function fadeDown() {
//   let headings = document.querySelectorAll(".fade-down");
//   headings.forEach((headling) => {
//     let headingsPos = headling.getBoundingClientRect().top;
//     let screenPos = window.innerHeight / 1.1;

//     if (headingsPos < screenPos) {
//       headling.classList.add("fade-down-start");
//     } else {
//       headling.classList.remove("fade-down-start");
//     }
//   });
// }

// window.addEventListener("scroll", fadeDown);

let headings = document.querySelectorAll(".fade-down");
headings.forEach((headling) => {
  let headingsPos = headling.getBoundingClientRect().top;
  let screenPos = window.innerHeight / 1.1;

  window.onload = function () {
    headling.classList.add("fade-down-start");
    document.querySelector(".fade-in").classList.add("fade-in-start");
    document.querySelector(".fade-up-now").classList.add("fade-up-now-start");
  };
});

