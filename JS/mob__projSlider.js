'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const slider = document.querySelector('.projects__mobSlider');
    const sliderItems = document.querySelectorAll('.projects__mobSlider img');
    const arrLeft = document.querySelector('.projects__controlsItemLeftMob'),
          arrRight = document.querySelector('.projects__controlsItemRightMob');

    let index =0;
    const changer = () =>{
        slider.style.backgroundImage = `url(${sliderItems[index].src})`;
    }

    arrRight.addEventListener('click', ()=>{
        index++;
        if (index >sliderItems.length -1) index = 0;
        changer();
    })
    arrLeft.addEventListener('click', ()=>{
        index--;
        if (index < 0) index = sliderItems.length -1;
        changer();
    })
})