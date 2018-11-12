//Variables
const course = document.querySelector('#courses-list');
    shoppingCartContent = doucment.querySelector('#cart-content tbody');
    clearCartBtn = document.querySelector('#clear-cart');




//Listeners
loadEventListener();

function loadEventListener(){
    //when a new course is added
    courses.addEventListener('click',buyCourse);

    //when the remove button is clicked
    shoppingCartContent.addEventListener('click', removeCourse);

    //Clear Cart Btn
    clearCartBtn.addEventListener('click', clearCart)

    //Document Ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}



//Functions

function buyCourse(e){
    e.preventDefault();
    //use delegation to find the course that was added to cart
    if(e.target.classList.contains('add-to-cart')){
        //read course values
        const course = e.target.parentElement.parentElement;
        
        //read the values
        getCourseinfo(course);
    }
}
// Reads the HTML information of the selected course
function getCourseInfo(course){

    //create an object with course data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    //insert into the shopping cart

}

//Display selected course into cart

function addIntoCart(course){
    //create a >tr>
    const row = document.createElement('tr');

    //Build the template
    row.innerHTML = '
        <tr>
            <td><img src="${course.image}" width= 100px></td>
            <td> ${course.title}</td>
            <td> ${course.price}</td>
            <td> <a href= "#" class="remove" data-id= "${courseid}">X</a></a></td>

        </tr>

    ';
    // Add into the shopping cart
    shoppingCartContent.appendChild(row);

    //Add course into local Storage
    saveIntoStorage(course);{
        let courses = getCoursesfromStorage();

        // add the course into the array
        courses.push(course);

        //storage saves strings, convert JSON into strings
        localStorage.setItem('courses',JSON.stringify(courses));
    }

    //get the content from storage
    function getCoursesFromStorage(){

        let courses;
        //if something exist in storage, get value, otherwise get empty array
        if(localStorage.getItem('courses' === null)){
            course = [];
        } else {
            course = JSON.parse(localStorage.getItem('courses'));
        }
        return courses
    }
}

    
//Remove course from the DOM
function removeCourse(e){
    let course, courseID;
    //remove from the DOM
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
        course = e.target.parentElement.parentElement;
        courseId = course.querySelector('a').getAttribute('data-id');  
        
         //remove from the local storage
    removeCourseLocalStorage(courseId);
    }
 
//remove from local storage
function removeCourseLocalStorage(id){
    //get local storage data
    let coursesLS = getCoursesFromStorage();

    //loop through array and find index to remove
    coursesLS.forEach(function(courseLS, index){
        if(courseLS.id === id){
            coursesLS.splice(index, 1);
        }
    });

    //Add the rest of the arrays
    localStorage.setItem('courses', JSON.stringify(coursesLS));
}


//Clears the shopping cart
 function clearCart(){

    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);

    }
    
    //Clear from local storage
    clearLocalStorage();
 }   

 //Clears local storage function
 function clearLocalStorage(){
     localStorage.clear();
 }

}

//Load when document is ready and print courses to cart
function getFromLocalStorage(){
    let coursesLS = getCoursesFromStorage();

    //LOOP through courses and print to cart
    coursesLS.forEach(function(course){
        //create the <tr>
        const row = document.createElement('tr');

        //print the content
        row.innerHTML = '
        
            <tr>
                <td><img src="${course.image}" width= 100px></td>
                <td> ${course.title}</td>
                <td> ${course.price}</td>
                <td> <a href= "#" class="remove" data-id= "${courseid}">X</a></a></td>

            </tr>

        ';
        shoppingCartContent.appendChild(row);
    })
        
}
