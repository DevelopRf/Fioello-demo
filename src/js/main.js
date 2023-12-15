const play = document.getElementById('play');
const searchBox = document.querySelector('.right .searchBox');
const searchToggle = document.querySelector(".right li:first-of-type")
const exit = document.getElementById('play');
const goUp = document.querySelector('.goUp');
const header = document.querySelector('header')
const headerHeight = document.querySelectorAll('nav .menu li a')
const moveDown = document.querySelector(".moveDown")

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

function openFilter() {
  let filter = document.getElementById('filter_item');
  if (getComputedStyle(filter).visibility == "hidden" && getComputedStyle(filter).opacity == "0") {
    filter.style.visibility = 'visible';
    filter.style.opacity = '1';
  }
  else {
    filter.style.visibility = 'hidden';
    filter.style.opacity = '0';
  }
}

function videoPlayer() {
  play.style.display = 'block';
}

function exitVideo() {
  exit.style.display = 'none';
}


searchToggle.addEventListener("click", () => {
  searchBox.classList.toggle("active")
}, true)

goUp.addEventListener('click', () => {
  scrollTo(0, 0)
})

document.addEventListener("scroll", () => {
  if (scrollY > 200) {
    goUp.style.visibility = 'visible'
  }
  else {
    goUp.style.visibility = 'hidden'
  }

  if (scrollY > 300) { moveDown.classList.add("active") }

  else { moveDown.classList.remove("active") }
})