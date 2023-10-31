const open = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');

open.addEventListener("click", function () {
    menu.classList.toggle("open-menu-humberger");
  });
close.addEventListener("click", function () {
    menu.classList.toggle("open-menu-humberger");
  });




  function scrollHeader() {
    const nav = document.querySelector(".navbar");
  
    if (this.scrollY >= 50) {
      nav.classList.add("scroll-nav");
    } else {
      nav.classList.remove("scroll-nav");
    }
  }
  window.addEventListener("scroll", scrollHeader);





  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevv"
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    }
  });




   
  


  function scrollup() {
    const scrollup = document.getElementById("scroll-up");
  
    if (this.scrollY >= 350) {
      scrollup.classList.add("show-scroll");
    } else {
      scrollup.classList.remove("show-scroll");
    }
  }
  
  window.addEventListener("scroll", scrollup);







const loader = document.getElementById("preloader");

const loaderActive = setTimeout(() =>{
  
  loader.style.display ='none';

},4000 )

window.addEventListener("load", loaderActive);




///////////////////////////////////


function scrollArrow() {
  window.scrollTo(0, 600);
}



