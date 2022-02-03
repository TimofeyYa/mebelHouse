'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const header = document.querySelector('.header');

    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 250) 
        header.classList.add('fixed__header');
        else header.classList.remove('fixed__header');
    })

    $(".phoneInp").mask("+ 7 (9 9 9) - 9 9 9 - 9 9 - 9 9 ");

    const steps__blockSteperSecondPic = document.querySelector('.steps__blockSteperSecondPic img');

    if (window.screen.width <= 550) steps__blockSteperSecondPic.src = './source/step/list2.png';
})