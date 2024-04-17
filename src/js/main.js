const play = document.getElementById('play');
const searchBox = document.querySelector('.right .searchBox');
const searchToggle = document.querySelector(".right li:first-of-type")
const exit = document.getElementById('play');
const goUp = document.querySelector('.goUp');
const header = document.querySelector('header')
const headerHeight = document.querySelectorAll('nav .menu li a')
const moveDown = document.querySelector(".moveDown")
const filter = document.querySelector(".filter_wrapper .filter_header button")
const filterMenu = document.querySelector(".filter_menu")
const video = document.querySelector(".video_image")
const overlay = document.querySelector(".overlay")
let swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});

filter && filter.addEventListener("click", () => {
  filterMenu.classList.toggle("active")
})

if (video) {
  video.addEventListener("click", () => {
    overlay.classList.add("active")
  })

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active")
  })
}

function videoPlayer() {
  play.style.display = 'block';
}

function exitVideo() {
  exit.style.display = 'none';
}


searchToggle.addEventListener("click", (e) => {
  searchBox.classList.toggle("active")
  e.stopPropagation()
})

searchBox.addEventListener("click", (e) => {
  e.stopPropagation()
})

goUp.addEventListener('click', () => {
  scrollTo(0, 0)
})

document.addEventListener("scroll", () => {
  if (scrollY > 200) {
    goUp.style.visibility = 'visible'    
    goUp.style.opacity = 1
  }
  else {
    goUp.style.visibility = 'hidden'
    goUp.style.opacity = 0
  }

  if (scrollY > 300) { moveDown.classList.add("active") }

  else { moveDown.classList.remove("active") }
})