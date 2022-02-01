'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const sales__contentRight = document.querySelector('.sales__contentRight');
    let x = 0;
    let y = 0


    window.addEventListener('mousemove', (e)=>{

        x =e.clientX/100;
        y = e.clientY/100;

        sales__contentRight.style.transform = `translate(${x}px, ${y}px)`
    })
})