'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const pic = document.querySelector('.order__sliderMobBlockPic'),
          txt = document.querySelector('.order__sliderMobBlockTxt h4');
    
    const images = pic.querySelectorAll('img');
    const picArr = [];
    
    images.forEach(item =>{
        picArr.push(item.src);
    })

    const txtArr = txt.dataset.txt.split('; ');
    
    const leftArr = pic.querySelector('.order__controlsItemLeftMob'),
          rightArr = pic.querySelector('.order__controlsItemRightMob');

    let index = 0;

    const changer = () =>{
        pic.style.backgroundImage = `url(${picArr[index]})`;
        txt.innerHTML = txtArr[index];
    }
    changer();

    rightArr.addEventListener('click', ()=>{
        index++;
        if (index >=  picArr.length ) index = 0;
        changer();
    })

    leftArr.addEventListener('click', ()=>{
        index--;
        if (index < 0) index =  picArr.length -1;
        changer();
    })
})