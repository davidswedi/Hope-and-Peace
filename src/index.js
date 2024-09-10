function toggleMenu() {
    const menu = document.getElementById('menu');
  
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      menu.classList.add('block');
    } else {
      menu.classList.remove('block');  
  
      menu.classList.add('hidden');  
  
    }
  }

 function close() {
    alert("hello")
   const menu = document.getElementById('menu');
   menu.classList.remove('block');
   menu.classList.add('hidden');
   
 }

//  function revealText() {
//     const textElement = document.getElementById('reveal-text');
//     const scrollPosition = window.scrollY;
//     const elementTop = textElement.getBoundingClientRect().top;
//     const elementHeight = textElement.clientHeight;
  
//     if (scrollPosition >= elementTop - elementHeight) {
//       textElement.style.opacity = 1;
//     } else {
//       textElement.style.opacity = 0;
//     }
//   }
  
//   window.addEventListener('scroll', revealText);
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
