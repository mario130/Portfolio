function fadeFromLeft(){document.querySelectorAll(".fade-from-left").forEach(t=>{let e=t.getBoundingClientRect().top,n=window.innerHeight/1.1;t.classList.contains("fade-start-left")||e<n&&t.classList.add("fade-start-left")})}function fadeFromRight(){document.querySelectorAll(".fade-from-right").forEach(t=>{let e=t.getBoundingClientRect().top,n=window.innerHeight/1.1;t.classList.contains("fade-start-right")||e<n&&t.classList.add("fade-start-right")})}function fadeUp(){document.querySelectorAll(".fade-up").forEach(t=>{let e=t.getBoundingClientRect().top,n=window.innerHeight/1.1;t.classList.contains("fade-up-start")||e<n&&t.classList.add("fade-up-start")})}function fadeUpNow(){document.querySelectorAll(".fade-in-later").forEach(t=>{let e=t.getBoundingClientRect().top,n=window.innerHeight/1.1;t.classList.contains("fade-in-later-start")||e<n&&t.classList.add("fade-in-later-start")})}window.addEventListener("load",function(){setTimeout(function(){$(".load-wrapper").fadeOut(),document.body.style.overflow="auto"},0)}),window.addEventListener("scroll",fadeFromLeft),window.addEventListener("scroll",fadeFromRight),window.addEventListener("scroll",fadeUp),window.addEventListener("scroll",fadeUpNow);let headings=document.querySelectorAll(".fade-down");headings.forEach(t=>{t.getBoundingClientRect().top,window.innerHeight;window.onload=function(){"Mario Yonan - Works"===document.title&&(document.querySelector(".fade-in").classList.add("fade-in-start"),document.querySelector(".fade-up-now").classList.add("fade-up-now-start")),t.classList.add("fade-down-start")}});let navLinks=document.querySelectorAll(".nav-list li a");navLinks.forEach(t=>{t.dataset.indicator===document.title&&t.classList.add("active")}),"Mario Yonan - About"===document.title&&document.querySelector(".fade-up-now-abt").classList.add("fade-up-now-start");