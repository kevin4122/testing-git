import get from "./getElement.js"

const navbar = get("#nav")
const navBtn = get("#nav-btn")
const closeBtn = get("#close-btn")
const sidebar = get("#sidebar")
const date = get("#date")

let count = 0

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed")
  } else {
    navbar.classList.remove("navbar-fixed")
  }
})
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar")
})
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar")
})
// set year
date.innerHTML = new Date().getFullYear()
