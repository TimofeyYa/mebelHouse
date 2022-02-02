'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const leftArr = document.querySelector('.long__controlsItemLeft'),
          rightArr = document.querySelector('.long__controlsItemRight');

    let long__blockWrappka = document.querySelectorAll('.long__blockWrappka');
    const track = document.querySelector('.long__sliderTrak');

    const list = (bool) =>{
        rightArr.removeEventListener('click',listTrue, true);
        leftArr.removeEventListener('click',listFalse, false);
        if (bool){
            let block = document.createElement('div');
            block.classList.add('long__blockWrappka');
            block.innerHTML = long__blockWrappka[0].innerHTML;
            track.append(block);
            long__blockWrappka[0].querySelector('.long__block').style.width = '0px';

            setTimeout(()=>{
                long__blockWrappka[0].remove();
                long__blockWrappka = document.querySelectorAll('.long__blockWrappka');
                rightArr.addEventListener('click',listTrue, true);
                leftArr.addEventListener('click',listFalse, false);
            }, 800)
        } else {
            
            let block = document.createElement('div');
            block.classList.add('long__blockWrappka');
            block.innerHTML = long__blockWrappka[long__blockWrappka.length - 1].innerHTML;
            block.querySelector('.long__block').style.width = '0px';
            track.prepend(block);
            long__blockWrappka = document.querySelectorAll('.long__blockWrappka');
            setTimeout(()=>{
                long__blockWrappka[0].querySelector('.long__block').style.width = '934px';
            }, 50)

            setTimeout(()=>{
                
                long__blockWrappka[long__blockWrappka.length - 1].remove();
                long__blockWrappka = document.querySelectorAll('.long__blockWrappka');
                rightArr.addEventListener('click',listTrue, true);
                leftArr.addEventListener('click',listFalse, false);
            }, 800)
        }
        
    }

    rightArr.addEventListener('click',listTrue, true);
    leftArr.addEventListener('click',listFalse, false);

    function listTrue(){
        list(true);
    }

    function listFalse(){
        list(false);
    }
})