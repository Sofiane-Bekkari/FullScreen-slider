let sliderImage = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

current = 0;

function reset(){
    for(let i = 0; i < sliderImage.length ; i++){
        sliderImage[i].style.display = 'none';
    }
}

// CALL RESET FUNCTION
//reset();

// INITIAL SLIDER 
function startSlide(){
    reset();
    sliderImage[0].style.display = 'block';
}

// SHOW PREVIWES
function slideLeft(){
    reset();
    sliderImage[current -1].style.display = 'block';
    current -- ; 
}

// LEFT ARROW CLICK 
arrowLeft.addEventListener('click', function(){
    if( current == 0 ){
        current = sliderImage.length;
    }
    slideLeft();
});

// SHOW NEXT 
function slideRight(){
    reset();
    sliderImage[current + 1].style.display = 'block';
    current ++;
}

// LEFT ARROW CLICK 
arrowRight.addEventListener('click', function(){
    if( current == sliderImage.length -1 ){
        current = -1;
    }
    slideRight();
});


//startSlide();