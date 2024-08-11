   const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');

    // Counter for the current slide
    let counter = 1;

    // Function to update the carousel position
    function updateCarousel() {
        const size = images[0].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    window.addEventListener('load', () => {
        updateCarousel(); // Set the initial position

        next.addEventListener('click', () => {
            if (counter >= images.length - 1) return;
            carouselSlide.style.transition = "transform 0.5s ease-in-out";
            counter++;
            updateCarousel();
        });

        prev.addEventListener('click', () => {
            if (counter <= 0) return;
            carouselSlide.style.transition = "transform 0.5s ease-in-out";
            counter--;
            updateCarousel();
        });

        carouselSlide.addEventListener("transitionend",()=>{
            if(images[counter].id=='lastclone'){
                carouselSlide.style.transition='none';
                counter=images.length-2;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            
            if(images[counter].id=='firstclone'){
                carouselSlide.style.transition='none';
                counter=images.length-counter;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        })


    });

const hamburger_menu=document.querySelector('.burger');
const nav_info=document.querySelector('.nav-info');
const cancel=document.querySelector('.cancel');

hamburger_menu.addEventListener('click',()=>{
     nav_info.style.transition = "transform 1s ease-in-out";
     nav_info.style.transform='translateX(' + (50) + 'rem)';
})

cancel.addEventListener('click',()=>{
    nav_info.style.transition = "transform 1s ease-in-out";
    nav_info.style.transform='translateX(' + (-50) + 'rem)';
})


