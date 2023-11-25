let play = document.getElementById('play');
let search = document.getElementById('searchBox');
let exit = document.getElementById('play');
let goUp = document.querySelector('.goUp');
const header = document.querySelector('header')
const headerHeight = document.querySelectorAll('nav .menu li a')
const right = document.querySelector('nav .right')


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

/* var sale = document.getElementsByClassName('sale');
var sold = document.getElementsByClassName('sold'); */

/* function stock() {
  if (sale == "") {
    sale.style.display = 'none';
  }
  else if (sold == ""){
    sold.style.display = 'none';
  }
  else
  {
    sale.style.display = 'blok';
    sold.style.display = 'blok';
  }
} */

function searching() {
  if (search.style.visibility == 'visible' && search.style.opacity == '1') {
    search.style.visibility = 'hidden';
    search.style.opacity = '0';

  }
  else {
    search.style.visibility = 'visible';
    search.style.opacity = '1';
  }
}

goUp.addEventListener('click', () => {
  scrollTo(0, 0)
})

document.onscroll = function () {
  if (scrollY > 200) {
    goUp.style.visibility = 'visible'
  }
  else {
    goUp.style.visibility = 'hidden'
  }

  if (scrollY > 300) {
    for (const item of headerHeight) {
      item.style.padding = `20px 29px`
    }
    right.style.display = 'none'
    header.style.position = 'fixed'
    header.style.width = `100%`
    header.style.bottom = `100%`
    header.style.transform = 'translateY(100%)'
  }
  else if (scrollY < 116) {
    for (const item of headerHeight) {
      item.style.padding = `47px 29px`
    }
    header.style.position = 'static'
    right.style.display = 'block'
  }
  else {
    header.style.transform = 'translateY(0)'

  }
}