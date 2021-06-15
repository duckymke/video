const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");

btn.addEventListener('click', function(){
    if (!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause();
    } else {
        btn.classList.remove('slide')
        video.play();
    }
});

const preLoader = document.querySelector(".preloader")

window.addEventListener('load', function(){
    preLoader.classList.add('hide-preloader'); // this applies the img while the page is loading
});

