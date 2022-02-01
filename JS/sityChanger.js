'use strict'

const textLine = document.querySelector('.textLine')


window.addEventListener('DOMContentLoaded', ()=>{
    main();
});

function main(){
    const sityChanger = document.querySelector('.sityChanger');

    const arr = sityChanger.dataset.sity.split(', ');
    const maxIndex = arr.length;

    let swapStr = arr[0];
    
    changer(arr, 0, sityChanger, true)
}

function changer(arr, index, elem, bool){
    if (arr.length == index) index = 0;
    if (bool){
        setTimeout(()=>{
            remover(arr, index ,elem);
        }, 2800)
        
    } else {
        setTimeout(()=>{
            adder(arr, index, elem);
        }, 300)
        
    }
    
}

function remover(arr, index ,elem){
    let wordSize = arr[index].length - 1;
    let wordSwap = arr[index];
    
    textLine.classList.remove('textLine-add');

    for (let i = 0; i <= wordSize; i++){
        setTimeout(()=>{
            elem.innerHTML = wordSwap.slice(0, wordSize - i);
            if (i == wordSize){
                changer(arr, index + 1, elem, false);
            }
        }, 200 * i + 100);
    }
    
    
}

function adder(arr,index,elem){
    

    elem.innerHTML = '';
    const size = arr[index].length;

    for (let i = 0; i<= size - 1; i++){
        setTimeout(()=>{
            elem.innerHTML = elem.innerHTML + arr[index][i];
            
            if (i == size - 1){
                textLine.classList.add('textLine-add');
                changer(arr, index, elem, true);
                
            }
        }, 120 * i + 100);
    }
    
    
}