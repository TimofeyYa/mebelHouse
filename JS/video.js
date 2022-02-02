'use strict'

window.addEventListener("DOMContentLoaded", ()=>{
    const video = document.querySelector('.about__bottomRightWrap video');
    const playBtn = document.querySelector('.about__bottomRightStart');


    video.addEventListener('click', ()=>{
        playBtn.style.display = 'none';
        video.setAttribute('controls', true);
        video.setAttribute('autoplay', true);
    })
})