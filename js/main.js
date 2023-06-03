const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
});

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
};

closeNavBtn.addEventListener('click', closeNav);


// TESTIMONIALS SECTION (swiper js)
var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // Responsive Breakpoints
        breakpoints: {
            // when window width is >= 600px
            600: {
                slidesPerView: 2
            },

            // when window width is >= 1024px
            1024: {
                slidesPerView: 3
            }
        }
      });


// MEETING SELECTOR 
const googleMeet = document.querySelector('#enter__link');
const virtualBtn = document.querySelector('#virtual');
const physicalBtn = document.querySelector('#physical');

virtualBtn.addEventListener('click', () => {
    googleMeet.style.display = 'inline-block';
});

const closeLink= () => {
    googleMeet.style.display = 'none';
};

physicalBtn.addEventListener('click', closeLink);