'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const arrLeft = document.querySelector('.projects__controlsItemLeft'),
          arrRight = document.querySelector('.projects__controlsItemRight');

    const projects__sliderItemWrap = document.querySelectorAll('.projects__sliderItemWrap');
    
    let index = 0;
    const width = projects__sliderItemWrap[0].clientWidth;

    

    const hiddenBlock = (index) =>{
        projects__sliderItemWrap[index].style.width = '0px'
    }

    const lookBlock = (index) =>{
        projects__sliderItemWrap[index].style.width = `${width}px`;
    }

    arrRight.addEventListener('click', ()=>{
        if (index < projects__sliderItemWrap.length){
            hiddenBlock(index);
            index++;
        }
    })
    arrLeft.addEventListener('click', ()=>{
        if (index > 0){
            index--;
            lookBlock(index);
        }
    })
})