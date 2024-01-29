// loading Screen
window.addEventListener("load", function () {
    $(".loadingScreen").fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
  });
  $(document).ready(function () {
      $(".loadingScreen").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
      });
      
    });


// Open-Close Nav
$( ".OpenLogo") .click( function(){
    if ( $(".NavOpen").css( "left" ) == "0px") {
        $( ".NavOpen" ).animate({ left : -265} , 1000);
          `<i class="fa-solid open-close-icon fa-align-justify fa-2x"></i>`
    }
    else{
        $( ".NavOpen" ).animate({ left : 0} );
           `<i class="fa-solid open-close-icon fa-2x fa-x"></i>`

    }

})







// Home Pagte API:
let x = [];
(async function(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);

    x = await response.json();

    display();
})();


  function display() {
    var cartoona = " ";

    for (var i = 0; i < x.meals.length; i++) {
        const meal = x.meals[i];
        cartoona += `<div class="col-md-3 rounded-3 img py-4">
                        <div class="position-relative overflow-hidden meal">  
                            <img src="${meal.strMealThumb}" alt="${meal.strTags}" class="rounded-3" width="100%">
                            <div class="MealLayer rounded-3 position-absolute">
                                <h3>${meal.strMeal}</h3>
                            </div>
                        </div>  
                    </div>`;
    }

    document.getElementById('Meals').innerHTML = cartoona;


    $('.img').on('click', function () {
        var cartona2 = " ";
        const index = $(this).index();
        console.log(index) 

        const meal = x.meals[index];
        console.log(meal);
        for(var i =0 ; i<meal; i++){
            console.log(meal[i]);
           
            console.log( meal.idMeal);

        }

        cartona2 = `<div class="col-md-5">
                        <img src="${meal.strMealThumb}" alt="${meal.strTags}" width="100%">
                        <h3 class="fw-bold text-center" style="color: white;"> ${meal.strMeal}</h3>     
                    </div>
                    <div class="col-md-7">
                        <div class="InstructionsData">
                            <h2>Instructions</h2>
                            <p>${meal.strInstructions}</p>
                            <h3><span class="fw-bold"> Area: </span>${meal.strArea}  </h3>
                            <h3><span class="fw-bold"> Category:</span> ${meal.strCategory} </h3>
                            <h3><span class="fw-bold"> Recipes:</span>
                                <ul class="list-unstyled d-flex g-3 flex-wrap">
                                        <li class="alert alert-info m-2 p-1"> ${meal.strIngredient1} </li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient2}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient3}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient4}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient5}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient6}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient7}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient8}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient9}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient10}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient11}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient12}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient13}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient14}</li>
                                        <li class="alert alert-info m-2 p-1">${meal.strIngredient15}</li>
                                </ul>
                            </h3>
                            <h3 class="alert alert-danger m-2 p-1"><span class="fw-bold">Tags : </span> ${meal.strTags}</h3>
                            <a class="btn btn-success fw-bold" href="${meal.strSource}">Source</a>
                            <a class="btn btn-danger fw-bold" href="${meal.strYoutube}">Youtube</a>
                        </div>
                    </div>`;

        document.getElementById('Meals').innerHTML = cartona2;
    });  


}





// // Categories API:
let y = [];

(async function(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

    y = await response.json();

    displaycategories();
})();

function displaycategories(){
    var cartoonacategories = ``;
    for( var i=0 ; i < y.categories.length ; i++ ){
        const categories = y.categories[i];
        cartoonacategories += ` <div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img src=${categories.strCategoryThumb} alt=${categories.strCategory} class="w-100">
                <div class="MealLayer position-absolute">
                    <h3 class="text-center">${categories.strCategory}</h3>
                    <div class="stylePIng"><p>${categories.strCategoryDescription}</p></div>
                </div>
            </div>
        </div>`
    }

document.getElementById("CategoryMeals").innerHTML=cartoonacategories;

}

//  ingredient API:
let z = [];

(async function(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);

    z = await response.json();

    displayingredient();
    console.log(z);
    
})();

function displayingredient(){
    var cartoonaingredient = ``;
    for( var i=0 ; i < z.meals.length ; i++){  
        const meals = z.meals[i];
        if(meals.strDescription != null){
            cartoonaingredient += `<div class="col-md-3 py-3">
            <i class="fa-solid fa-drumstick-bite fa-4x" style="color: #ffffff;"></i>
            <h3>${meals.strIngredient}</h3>
            <div class="stylePIng">   <p>${meals.strDescription}</p> </div>
        </div>`
        }
       
    }

document.getElementById("ingredientMeals").innerHTML = cartoonaingredient;

}




// Area API:
let a = [];

(async function(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);

    a = await response.json();

    displayarea();
    console.log(a);

})();

function displayarea(){
    var cartoonaarea = ``;
    for( var i=0 ; i < a.meals.length ; i++){
        const meals = a.meals[i];
        cartoonaarea += `<div class="col-md-3 py-3">
        <i class="fa-solid fa-house-laptop fa-5x" style="color: #ffffff;"></i>
        <h3>${meals.strArea}</h3>
    </div>`
    }

document.getElementById("areaMeals").innerHTML = cartoonaarea;

}






// Search ny Name Part API:
let s = [];

function displaySearchResults(data) {
    var cartoonasearch = ``;
    for (var i = 0; i < data.meals.length; i++) {
        let meal = data.meals[i];
        cartoonasearch +=
            `<div class="col-md-3 rounded-3 img">
            <div class="position-relative ">  
                <img src="${meal.strMealThumb}" alt="${meal.strTags}" class="rounded-3" width="100%">
                <div class="layer rounded-3">
                    <p class="m-auto mt-5 pt-5 ps-2 fw-bolder fs-4">
                        ${meal.strMeal}
                    </p>
                </div>
            </div>  
        </div>`;
    }
    document.getElementById("resultsContainer").innerHTML = cartoonasearch;
}



async function fetchDataFromAPI(searchTerm) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        s = await response.json();
        displaySearchResults(s);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}




















  

