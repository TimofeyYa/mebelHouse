'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const arrLeft = document.querySelector('.team__controlsItemLeft'),
          arrRight = document.querySelector('.team__controlsItemRight'),
          team__controls = document.querySelector('.team__controls');
    
    const team__block = document.querySelectorAll('.team__block');

    if (team__block.length > 2) team__controls.style.display = 'flex';

    const  blockChanger = (bool) => {
        if (bool){
            const swap = [team__block[0].querySelector('img').src, team__block[0].querySelector('h5').innerHTML, team__block[0].querySelector('p').innerHTML];
            
            for (let i = 0; i < team__block.length - 1; i++){
                if (i + 1 == team__block.length - 1){
                    team__block[i].querySelector('img').src = swap[0];
                    team__block[i].querySelector('h5').innerHTML = swap[1];
                    team__block[i].querySelector('p').innerHTML = swap[2];
                } else{
                    team__block[i].querySelector('img').src = team__block[i + 1].querySelector('img').src;
                    team__block[i].querySelector('h5').innerHTML = team__block[i + 1].querySelector('h5').innerHTML;
                    team__block[i].querySelector('p').innerHTML = team__block[i + 1].querySelector('p').innerHTML;
                }
            }
        } else {
            const swap = [team__block[team__block.length].querySelector('img').src, team__block[team__block.length].querySelector('h5').innerHTML, team__block[team__block.length].querySelector('p').innerHTML];
            
            for (let i = team__block.length; i > 0; i--){
                if (i - 1 == 0){
                    team__block[i].querySelector('img').src = swap[0];
                    team__block[i].querySelector('h5').innerHTML = swap[1];
                    team__block[i].querySelector('p').innerHTML = swap[2];
                } else{
                    team__block[i].querySelector('img').src = team__block[i - 1].querySelector('img').src;
                    team__block[i].querySelector('h5').innerHTML = team__block[i - 1].querySelector('h5').innerHTML;
                    team__block[i].querySelector('p').innerHTML = team__block[i - 1].querySelector('p').innerHTML;
                }
            }
        }
    }

    arrRight.addEventListener('click',blockChanger,true);
    arrLeft.addEventListener('click',blockChanger,false);
    
})