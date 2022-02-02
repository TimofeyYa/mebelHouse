'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const block = document.querySelectorAll('.faq__block');

    block.forEach(item=>{
        const blockBottom = item.querySelector('.faq__blockBottom'),
              faq__blockTop = item.querySelector('.faq__blockTop');
        const pic = item.querySelector('.faq__blockTopPic svg');

        const height = blockBottom.clientHeight;
        blockBottom.style.height = '0px';

        let bool = true;

        const toggle = () =>{
            if (bool) {
                blockBottom.style.height = `${height}px`;
                pic.style.transform = 'rotate(-45deg)';
            } else {
                blockBottom.style.height = `0px`;
                pic.style.transform = 'rotate(0deg)';
            }
            bool = !bool
        }

        faq__blockTop.addEventListener('click', toggle, bool);
    })
})