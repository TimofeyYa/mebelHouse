'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const arrLeft = document.querySelector('.order__controlsItemLeft'),
          arrRight = document.querySelector('.order__controlsItemRight');

    const order__sliderItemWrap = document.querySelectorAll('.order__sliderItemWrap');

    const column = 3;
    const height = order__sliderItemWrap[0].clientHeight;
    let index = 0;

    const hidenRow = (index)=>{
        for (let i = 0; i < column; i++){
            if (order__sliderItemWrap[i + index])
            order__sliderItemWrap[i + index].style.height = '0px';
        }
        for (let i = 0; i < column; i++){
            if(order__sliderItemWrap[i + index + column])
            order__sliderItemWrap[i + index + column].style.opacity = '1';
        }
    }

    const showRow = (index)=>{
        for (let i = 0; i < column; i++){
            if (order__sliderItemWrap[i + index + column])
            order__sliderItemWrap[i + index + column].style.opacity = '0';
        }
        for (let i = 0; i < column; i++){
            if(order__sliderItemWrap[i + index])
            order__sliderItemWrap[i + index].style.height = `${height}px`;
        }
        
    }
    arrRight.addEventListener('click', ()=>{
        if (index < order__sliderItemWrap.length - column){
            hidenRow(index);
            index+=column;
        }
    })

    arrLeft.addEventListener('click', ()=>{
        if (index > 0){
            index-=column;
            showRow(index);
        }
    })
})