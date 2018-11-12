//Variables
const course = document.querySelector('#courses-list');




//Listeners
loadEventListener();

function loadEventListener(){
    //when a new course is added
    courses.addEventListener('click',buyCourse);
}



//Functions

function buyCourse(e){
    //use delegation to find the course that was added to cart
    if(e.target.classList.contains('add-to-cart')){
        
    }
}

