'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const exit = document.querySelector('.popup__contentExit');
    const popup = document.querySelector('.popup');
    const formTitle = document.querySelector('.formTitle');

    exit.addEventListener('click', ()=>{
        popup.style.display = 'none';
        popup.classList.remove('popup__simple');
        popup.classList.remove('popup__dis');
        popup.classList.remove('popup__zam');
    })

   
    const dizPop = document.querySelectorAll('.dizPop'),
          zamerPop = document.querySelectorAll('.zamerPop'),
          simplePop = document.querySelectorAll('.simplePop');
    const type__req = document.querySelector('.type__req');

    zamerPop.forEach(item=>{
        item.addEventListener('click', ()=>{
            console.log(item);
            popup.style.display = 'flex';
            popup.classList.add('popup__zam');
            formTitle.innerHTML = 'Вызвать замерщика';
            type__req.value = 'Вызов Замерщика';
        })
    })
    dizPop.forEach(item=>{
        item.addEventListener('click', ()=>{
            console.log(item);
            popup.style.display = 'flex';
            popup.classList.add('popup__dis');
            formTitle.innerHTML = 'Вызвать дизайнера';
            type__req.value = 'Вызов Дизайнера';
        })
    })

    simplePop.forEach(item=>{
        item.addEventListener('click', ()=>{
            console.log(item);
            popup.style.display = 'flex';
            popup.classList.add('popup__simple');
            formTitle.innerHTML = 'Обратный звонок';
            type__req.value = 'Обратный звонок';
        })
    })
})