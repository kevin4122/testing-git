import reviewList from "./data.js"
import get from "./getElement.js"

const navbar = get("#nav")
const navBtn = get("#nav-btn")
const closeBtn = get("#close-btn")
const sidebar = get("#sidebar")
const date = get("#date")

const prevBtn = get(".prev-btn")
const nextBtn = get(".next-btn")
const personImg = document.querySelectorAll(".person-img")
const authorDisplay = document.querySelectorAll(".author")
const jobDisplay = document.querySelectorAll(".job")
const infoDisplay = document.querySelectorAll(".info")

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

// prevBtn & nextBtn
let count_new = 3
nextBtn.addEventListener("click", () => {
  for (let index = 0; index < 3; index++) {
    personImg[index].src = reviewList[count_new].img
    authorDisplay[index].innerHTML = reviewList[count_new].author
    jobDisplay[index].innerHTML = reviewList[count_new].job
    infoDisplay[index].innerHTML = reviewList[count_new].info

    count_new++
    // console.log(count_new)
  }
  if (count_new === 9) {
    count_new = 0
  }
  console.log(count_new)
})

prevBtn.addEventListener("click", () => {
  if (count_new === 0) {
    count_new = 3
  } else if (count_new - 6 < 0) {
    count_new = 6
  } else {
    count_new = count_new - 6
  }
  for (let index = 0; index < 3; index++) {
    personImg[index].src = reviewList[count_new].img
    authorDisplay[index].innerHTML = reviewList[count_new].author
    jobDisplay[index].innerHTML = reviewList[count_new].job
    infoDisplay[index].innerHTML = reviewList[count_new].info

    count_new++
    // console.log(count_new)
  }
  console.log(count_new)
})
