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
// nextBtn.addEventListener("click", () => {
//   if (count > reviewList.length - 4) {
//     count = 0
//   } else {
//     count = count + 3
//   }

//   // for (i = count; i <= 3; i++) {
//   //   // personImg.forEach((person) => {
//   //   // let n = 0
//   //   personImg[i].src = reviewList[i + count].img

//   //   // })
//   //   // authorDisplay.forEach((author) => {
//   //   author[i].innerHTML = reviewList[i + count].author
//   //   // })
//   //   // jobDisplay.forEach((job) => {
//   //   job[i].innerHTML = reviewList[i + count].job
//   //   // })
//   //   // infoDisplay.forEach((info) => {
//   //   info[i].innerHTML = reviewList[i + count].info
//   //   // })
//   //   n++
//   // }

//   let i = count
//   let j = count
//   let k = count
//   let m = count
//   personImg.forEach((person) => {
//     person.src = reviewList[i].img
//     i += 1
//   })

//   authorDisplay.forEach((author) => {
//     author.innerHTML = reviewList[j].author
//     j += 1
//   })

//   jobDisplay.forEach((job) => {
//     job.innerHTML = reviewList[k].job
//     k += 1
//   })
//   infoDisplay.forEach((info) => {
//     info.innerHTML = reviewList[m].info
//     m += 1
//   })
// })

prevBtn.addEventListener("click", () => {
  // console.log(personImg)
  // console.log(authorDisplay)
  if (count <= 0) {
    count = reviewList.length - 3
  } else {
    count = count - 3
  }

  // for (i = count; i <= 3; i++) {
  //   personImg.forEach((person) => {
  //     person.src = reviewList[i].img
  //   })
  //   authorDisplay.forEach((author) => {
  //     author.innerHTML = reviewList[i].author
  //   })
  //   jobDisplay.forEach((job) => {
  //     job.innerHTML = reviewList[i].job
  //   })
  //   infoDisplay.forEach((info) => {
  //     info.innerHTML = reviewList[i].info
  //   })
  // }

  let i = count
  let j = count
  let k = count
  let m = count
  personImg.forEach((person) => {
    person.src = reviewList[i].img
    i += 1
  })

  authorDisplay.forEach((author) => {
    author.innerHTML = reviewList[j].author
    j += 1
  })

  jobDisplay.forEach((job) => {
    job.innerHTML = reviewList[k].job
    k += 1
  })
  infoDisplay.forEach((info) => {
    info.innerHTML = reviewList[m].info
    m += 1
  })
})

let count_new = 3
nextBtn.addEventListener("click", () => {
  for (let index = 0; index < 3; index++) {
    personImg[index].src = reviewList[count_new].img
    authorDisplay[index].innerHTML = reviewList[count_new].author
    jobDisplay[index].innerHTML = reviewList[count_new].job
    infoDisplay[index].innerHTML = reviewList[count_new].info

    count_new++
    console.log(count_new)
  }
  if (count_new === 9) {
    count_new = 0
  }
})
