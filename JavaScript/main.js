const $loadingIndicator = $('#loading');

// Function to show the loading indicator
function showLoading() {
  $loadingIndicator.fadeIn();
  $('body').css('overflow','hidden')
}

// Function to hide the loading indicator
function hideLoading() {
  $loadingIndicator.fadeOut();
  $('body').css('overflow','visible')
  $('body').css('overflow-x','hidden')
}

// Function to refresh the page
function refreshPage() {
  showLoading(); 
  location.reload(); 

}

// Prevent default action for all <i> elements
$('i').click(function (e) {
  e.preventDefault();
})

// Get the width of the navigation panel and initially hide it
const w = $('#navigation').innerWidth();
$('#navigation').animate({ left: `-${w}` });

// Function to toggle the navigation panel
$('#navCtrl .navCtrlIcon').click(function (e) {
  e.preventDefault();

  if ($('#navigation').css('left') == '0px') {
    $('#navigation').animate({ left: `-${w}` }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-x')
    $('#navCtrl .navCtrlIcon').addClass('fa-bars')
    $('#navLinks ul ').removeClass('show')
    $('#navLinks ul ').addClass('hide')
  }

  else {
    $('#navigation').animate({ left: 0 }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-bars')
    $('#navCtrl .navCtrlIcon').addClass('fa-x')
    $('#navLinks ul ').removeClass('hide')
    $('#navLinks ul ').addClass('show')
  }

})

// Hide the navigationBar On click
$('#area').click(function (e) {
  e.preventDefault();

  if ($('#navigation').css('left') == '0px') {
    $('#navigation').animate({ left: `-${w}` }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-x')
    $('#navCtrl .navCtrlIcon').addClass('fa-bars')
    $('#navLinks ul ').removeClass('show')
    $('#navLinks ul ').addClass('hide')
  }

  else {
    $('#navigation').animate({ left: 0 }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-bars')
    $('#navCtrl .navCtrlIcon').addClass('fa-x')
    $('#navLinks ul ').removeClass('hide')
    $('#navLinks ul ').addClass('show')
  }

})

// Hide the navigationBar On click
$('#search').click(function (e) {
  e.preventDefault();

  if ($('#navigation').css('left') == '0px') {
    $('#navigation').animate({ left: `-${w}` }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-x')
    $('#navCtrl .navCtrlIcon').addClass('fa-bars')
    $('#navLinks ul ').removeClass('show')
    $('#navLinks ul ').addClass('hide')
  }

  else {
    $('#navigation').animate({ left: 0 }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-bars')
    $('#navCtrl .navCtrlIcon').addClass('fa-x')
    $('#navLinks ul ').removeClass('hide')
    $('#navLinks ul ').addClass('show')
  }

})

// Hide the navigationBar On click
$('#categories').click(function (e) {
  e.preventDefault();

  if ($('#navigation').css('left') == '0px') {
    $('#navigation').animate({ left: `-${w}` }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-x')
    $('#navCtrl .navCtrlIcon').addClass('fa-bars')
    $('#navLinks ul ').removeClass('show')
    $('#navLinks ul ').addClass('hide')
  }

  else {
    $('#navigation').animate({ left: 0 }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-bars')
    $('#navCtrl .navCtrlIcon').addClass('fa-x')
    $('#navLinks ul ').removeClass('hide')
    $('#navLinks ul ').addClass('show')
  }

})

// Hide the navigationBar On click
$('#ingredients').click(function (e) {
  e.preventDefault();

  if ($('#navigation').css('left') == '0px') {
    $('#navigation').animate({ left: `-${w}` }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-x')
    $('#navCtrl .navCtrlIcon').addClass('fa-bars')
    $('#navLinks ul ').removeClass('show')
    $('#navLinks ul ').addClass('hide')
  }

  else {
    $('#navigation').animate({ left: 0 }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-bars')
    $('#navCtrl .navCtrlIcon').addClass('fa-x')
    $('#navLinks ul ').removeClass('hide')
    $('#navLinks ul ').addClass('show')
  }

})

// Hide the navigationBar On click
$('#contactUs').click(function (e) {
  e.preventDefault();

  if ($('#navigation').css('left') == '0px') {
    $('#navigation').animate({ left: `-${w}` }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-x')
    $('#navCtrl .navCtrlIcon').addClass('fa-bars')
    $('#navLinks ul ').removeClass('show')
    $('#navLinks ul ').addClass('hide')
  }

  else {
    $('#navigation').animate({ left: 0 }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-bars')
    $('#navCtrl .navCtrlIcon').addClass('fa-x')
    $('#navLinks ul ').removeClass('hide')
    $('#navLinks ul ').addClass('show')
  }

})

// Hide the navigationBar On click
$('html').click(function (e) {
  e.preventDefault();

  if ($('#navigation').css('left') == '0px') {
    $('#navigation').animate({ left: `-${w}` }, 'slow');
    $('#navCtrl .navCtrlIcon').removeClass('fa-x')
    $('#navCtrl .navCtrlIcon').addClass('fa-bars')
    $('#navLinks ul ').removeClass('show')
    $('#navLinks ul ').addClass('hide')
  }

})

// Function to fetch and display meals for the home page
async function getHome() {
  showLoading();
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`, { method: 'GET' });
  let data = await response.json();
  hideLoading();
  displayMeals(data)
}

// Function to display meals on the page
function displayMeals(data) {

  $("#contactForm").removeClass('vh-100')
  let meals = data.meals;
  let box = '';
  for (let i = 0; i < meals.length; i++) {
    box += `    <div id="${meals[i].idMeal}"  class="itemStyle btn col-md-3 mb-4  position-relative ">
    <img id="${meals[i].idMeal}" class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" >
    <div id="${meals[i].idMeal}"class="infoStyle position-absolute h-100 d-flex align-items-center rounded-3 ps-2">
      <h3 id="${meals[i].idMeal}">${meals[i].strMeal}</h3>
    </div>
  </div>`

  }

  $('#meals').html(box);
  $('#mealInfo').html('')

  $('#Cat').html('')
  $('#areas').html('')
  $('#Ing').html('')
  $('#contactForm').html('')
}

// Shows the loading indicator and fetches meal data by ID
async function getMeal(id) {
  showLoading();
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    hideLoading();

    if (!data.meals || data.meals.length === 0) {
      throw new Error('No meal found with the given ID.');
    }

    const meal = data.meals[0];
    displayMealDetails(meal);
  } catch (error) {
    hideLoading();
    console.error('Error fetching meal:', error.message);
    
  }
}


// Displays the meal information on the page
function showMeal(data) {
  $('#loading').fadeOut(600)
  $('body').css('overflow', 'visible')
  $('body').css('overflow-x', 'hidden')
  $("#contactForm").removeClass('vh-100')
  let box = `   <section id="mealInfo" class="d-flex ms-5 text-white pb-5">
  <div id="mealImg" class="d-flex flex-column col-md-4">
    <img src=${data.strMealThumb} alt="" class=" rounded-3">
    <h2>${data.strMeal}</h2>
  </div>
  <div id="mealIns" class="col-md-7 h-50">
    <h2>Instructions</h2>
    <p>${data.strInstructions}</p>
    <h3><span class="fw-bolder">Area : </span>${data.strArea}</h3>
    <h3><span class="fw-bolder">Category : </span>${data.strCategory}</h3>
    <h3>Recipes : </h3>
    <ul id="receipes" class="d-flex flex-wrap">
    </ul>
    <h3>Tags :</h3> 
    <a id="source" class="btn" href="${data.strSource}" target="_blank">Source</a>
    <a id="youtube" class="btn" href="${data.strYoutube}" target="_blank">Youtube</a>
  </div>
</section>`

  $('#meals').html('');
  $('#mealInfo').html(box)
  $('#searchBars').html('');
  $('#Cat').html('')
  $('#areas').html('')
  $('#Ing').html('')
  $('#contactForm').html('')

  var ul = '';
  for (var i = 1; i <= 20; i++) {

    if (data[`strMeasure${i}`] && data[`strMeasure${i}`].trim() !== "") {
      console.log(data[`strMeasure${i}`]);
      ul += `<li>${data[`strMeasure${i}`]}</li>`
    }
  }

  $('#receipes').html(ul);
}

// Handles click events on the meals section to fetch meal details
$('#meals').click(function (e) {

  getMeal(e.target.id)
})



async function getMealsByFullSearch(searched) {
  // Ensure the search term is at least two characters long
  if (searched.length < 2) {
    displayMeals({ meals: [] }); // No meals to display
    return;
  }

  showLoading();
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`);
  const data = await response.json();
  hideLoading();

  // Filter meals to show only those that contain the searched term as a whole word
  const meals = data.meals || [];
  const searchTerm = searched.toLowerCase();
  const matchedMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchTerm));

  // Display the matched meals
  displayMeals({ meals: matchedMeals });
}

async function getMealsByFirstLetter(firstLetter) {
  // Ensure the search term is a single letter
  if (firstLetter.length !== 1 || !/[a-zA-Z]/.test(firstLetter)) {
    displayMeals({ meals: [] }); // No meals to display
    return;
  }

  showLoading();
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const data = await response.json();
  hideLoading();

  // Display the meals starting with the first letter
  const meals = data.meals || [];
  displayMeals({ meals });
}

function showSearch() {
  $("#contactForm").removeClass('vh-100')
  let box = `<div class="d-flex justify-content-end align-items-center flex-column" style="height: 50vh">
<input id="searchByName" type="text" class="form-control m-4" placeholder="Search By Name">
<input id="searchByFL" type="text" class="form-control m-4" placeholder="Search By First Letter">
</div>`

  $('#searchBars').html(box);
  $('#meals').html('');
  $('#Cat').html('')
  $('#mealInfo').html('')
  $('#areas').html('')
  $('#Ing').html('')
  $('#contactForm').html('')

  $('#searchByName').on('input', () => {
    const searchTerm = $('#searchByName').val();
    getMealsByFullSearch(searchTerm);
  });

  $('#searchByFL').on('input', () => {
    const searchTerm = $('#searchByFL').val();
    getMealsByFirstLetter(searchTerm);
  });

}

$('#search').click(function (e) {
  e.preventDefault();

  showSearch()

})

async function getMealCategories() {
  showLoading()
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
  hideLoading()
  displayCategories(data);
}

async function filterMealsByCategory(category) {
  showLoading()
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await response.json();
  hideLoading()
  displayMeals(data);
}

// Function to display meal ingredients
function displayCategories(data) {
  $("#contactForm").removeClass('vh-100')
  let cat = data.categories;
  let box = '';
  for (let i = 0; i < cat.length; i++) {
    box += `    <div id="${cat[i].strCategory}"  class="itemStyle btn col-md-3 mb-4  position-relative ">
  <img id="${cat[i].strCategory}" class="w-100 rounded-3" src="${cat[i].strCategoryThumb}" alt="${cat[i].strCategory}" >
  <div id="${cat[i].strCategory}"class="infoStyle position-absolute h-100 d-flex flex-column align-items-center rounded-3 ps-2">
    <h3 id="${cat[i].strCategory}">${cat[i].strCategory}</h3>
    <p class="ellipsis text-white px-2" id="${cat[i].strCategory}">${cat[i].strCategoryDescription}</p>
  </div>
</div>`

  }
  $('#meals').html('');
  $('#mealInfo').html('')
  $('#searchBars').html('');
  $('#Cat').html(box)
  $('#areas').html('')
  $('#Ing').html('')
  $('#contactForm').html('')
}

$('#Cat').click(function (e) {
  filterMealsByCategory(e.target.id)
})

$('#categories').click(function (e) {
  e.preventDefault();

  getMealCategories()

})

// Function to fetch and display meal areas
async function getAreas() {
  showLoading()
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const data = await response.json();
  hideLoading()
  displayAreas(data)
}

// Function to display meal areas
function displayAreas(data) {
  $("#contactForm").removeClass('vh-100')
  let areas = data.meals
  let box = '';
  for (let i = 0; i < areas.length; i++) {
    box += `   <div id="${areas[i].strArea}" class="text-white btn col-md-3 mb-4 ">
    <i id="${areas[i].strArea}" class="fa-solid fa-house-laptop fa-4x w-100 "></i>
    <h3 id="${areas[i].strArea}">${areas[i].strArea}</h3>
  </div>   `

  }
  $('#meals').html('');
  $('#mealInfo').html('')
  $('#searchBars').html('');
  $('#Cat').html('')
  $('#areas').html(box)
  $('#Ing').html('')
  $('#contactForm').html('')
}

$('#area').click(function (e) {
  e.preventDefault();

  getAreas()

})

// Function to fetch and display meals by area
async function getMealsByArea(area) {
  showLoading()
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
  const response = await fetch(url);
  const data = await response.json();
  hideLoading()
  displayMeals(data)
}

$('#areas').click(function (e) {
  getMealsByArea(e.target.id)
})


// Function to fetch and display meal ingredients
async function getIngrediants() {
  showLoading()
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const data = await response.json();
  hideLoading()
  displayIngrediants(data)
}


function displayIngrediants(data) {
  $("#contactForm").removeClass('vh-100')
  let ingrediants = data.meals
  let box = '';
  for (let i = 0; i < 20; i++) {
    box += `   <div id="${ingrediants[i].strIngredient}" class="text-white btn col-md-3 mb-4 overfolw-hidden">
    <i id="${ingrediants[i].strIngredient}" class="fa-solid fa-drumstick-bite fa-4x w-100 "></i>
    <h3 id="${ingrediants[i].strIngredient}">${ingrediants[i].strIngredient}</h3>
    <p id="${ingrediants[i].strIngredient}">${ingrediants[i].strDescription.split(' ').slice(0, 20).join(' ')}</p>
  </div>   `

  }

  $('#meals').html('');
  $('#mealInfo').html('')
  $('#searchBars').html('');
  $('#Cat').html('')
  $('#areas').html('')
  $('#Ing').html(box)
  $('#contactForm').html('')
}

$('#ingredients').click(function (e) {
  e.preventDefault();

  getIngrediants()

})

// Function to fetch and display meals by ingredient
async function getMealsByIngrediant(mainIngrediant) {
  showLoading()
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngrediant}`;
  const response = await fetch(url);
  const data = await response.json();
  hideLoading()
  displayMeals(data)
}

$('#Ing').click(function (e) {
  getMealsByIngrediant(e.target.id)
})



// Function to display contact form
function showForm() {
  $("#contactForm").addClass('vh-100')
  let box = '';
  box += `<div class="col-md-6 col-sm-12 d-flex justify-content-around p-lg-3 w-75">

  <div class="mx-lg-3 w-50">
    <input id="name" type="text" class="form-control " placeholder="Enter Your Name">
    <div id="nameWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
      Special characters and numbers are not allowed
    </div>
  </div>

  <div class="mx-lg-3 w-50">
    <input id="email" type="text" class="form-control" placeholder="Enter Your Email">
    <div id="emailWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
      The Email you entered is not valid *exemple@yyy.zzz
    </div>
  </div>

</div>



<div class="col-md-6 col-sm-12 d-flex justify-content-around p-lg-3 w-75">

  <div class="mx-lg-3 w-50">
    <input id="phone" type="text" class="form-control " placeholder="Enter Your Phone">
    <div id="phoneWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
      Please enter a valid Phone Number
    </div>
  </div>

  <div class="mx-lg-3 w-50">
    <input id="age" type="number" class="form-control" placeholder="Enter Your Age">
    <div id="ageWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
      Please enter a valid age
    </div>
  </div>

</div>



<div class="col-md-6 col-sm-12 d-flex justify-content-around p-lg-3 w-75">

  <div class="mx-lg-3 w-50">
    <input id="pass" type="password" class="form-control " placeholder="Enter Your Password">
    <div id="passWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
      Please enter a valid password that contains a minimum of eight characters, one letter and one number
    </div>
  </div>

  <div class="mx-lg-3 w-50">
    <input id="repass" type="password" class="form-control" placeholder="Repassword">
    <div id="repassWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
      Please enter a valid repassword
    </div>
  </div>

</div>


<button id="formSubmitBtn" class="btn" disabled>Submit</button> 
`


  $('#meals').html('');
  $('#mealInfo').html('')
  $('#searchBars').html('');
  $('#Cat').html('')
  $('#areas').html('')
  $('#Ing').html('')
  $('#contactForm').html(box)

  let nameRegFlag = false, emailRegFlag = false, ageRegFlag = false, phoneRegFlag = false, passRegFlag = false, repassRegFlag = false;

  $('#name').on('input', () => {
    const searchTerm = $('#name').val();
    if (nameRegex(searchTerm)) {
      nameRegFlag = true
      $('#nameWarning').removeClass('d-flex')
      $('#nameWarning').addClass('d-none')
    }
    else {
      nameRegFlag = false
      $('#nameWarning').removeClass('d-none')
      $('#nameWarning').addClass('d-flex')
    }

    if (nameRegFlag && emailRegFlag && ageRegFlag && phoneRegFlag && passRegFlag && repassRegFlag) {
      $('#formSubmitBtn').prop('disabled', false);

    }
    else {
      $('#formSubmitBtn').prop('disabled', true);
    }
  });

  $('#email').on('input', () => {
    const searchTerm = $('#email').val();
    if (emailRegex(searchTerm)) {
      emailRegFlag = true
      $('#emailWarning').removeClass('d-flex')
      $('#emailWarning').addClass('d-none')
    }
    else {
      emailRegFlag = false
      $('#emailWarning').removeClass('d-none')
      $('#emailWarning').addClass('d-flex')
    }

    if (nameRegFlag && emailRegFlag && ageRegFlag && phoneRegFlag && passRegFlag && repassRegFlag) {
      $('#formSubmitBtn').prop('disabled', false);

    }
    else {
      $('#formSubmitBtn').prop('disabled', true);
    }
  });

  $('#phone').on('input', () => {
    const searchTerm = $('#phone').val();
    if (phoneRegex(searchTerm)) {
      phoneRegFlag = true
      $('#phoneWarning').removeClass('d-flex')
      $('#phoneWarning').addClass('d-none')
    }
    else {
      phoneRegFlag = false
      $('#phoneWarning').removeClass('d-none')
      $('#phoneWarning').addClass('d-flex')
    }

    if (nameRegFlag && emailRegFlag && ageRegFlag && phoneRegFlag && passRegFlag && repassRegFlag) {
      $('#formSubmitBtn').prop('disabled', false);

    }
    else {
      $('#formSubmitBtn').prop('disabled', true);
    }
  });

  $('#age').on('input', () => {
    const searchTerm = $('#age').val();
    if (ageRegex(searchTerm)) {
      ageRegFlag = true;
      $('#ageWarning').removeClass('d-flex')
      $('#ageWarning').addClass('d-none')
    }
    else {
      ageRegFlag = false
      $('#ageWarning').removeClass('d-none')
      $('#ageWarning').addClass('d-flex')
    }

    if (nameRegFlag && emailRegFlag && ageRegFlag && phoneRegFlag && passRegFlag && repassRegFlag) {
      $('#formSubmitBtn').prop('disabled', false);

    }
    else {
      $('#formSubmitBtn').prop('disabled', true);
    }
  });

  $('#pass').on('input', () => {
    const searchTerm = $('#pass').val();
    if (passRegex(searchTerm)) {
      passRegFlag = true;
      $('#passWarning').removeClass('d-flex')
      $('#passWarning').addClass('d-none')
    }
    else {
      passRegFlag = false;
      $('#passWarning').removeClass('d-none')
      $('#passWarning').addClass('d-flex')
    }

    if (nameRegFlag && emailRegFlag && ageRegFlag && phoneRegFlag && passRegFlag && repassRegFlag) {
      $('#formSubmitBtn').prop('disabled', false);

    }
    else {
      $('#formSubmitBtn').prop('disabled', true);
    }
  });


  $('#repass').on('input', () => {
    const searchTerm = $('#repass').val();
    if (searchTerm == $('#pass').val()) {
      repassRegFlag = true;
      $('#repassWarning').removeClass('d-flex')
      $('#repassWarning').addClass('d-none')
    }
    else {
      repassRegFlag = false;
      $('#repassWarning').removeClass('d-none')
      $('#repassWarning').addClass('d-flex')
    }

    if (nameRegFlag && emailRegFlag && ageRegFlag && phoneRegFlag && passRegFlag && repassRegFlag) {
      $('#formSubmitBtn').prop('disabled', false);

    }
    else {
      $('#formSubmitBtn').prop('disabled', true);
    }
  });

  $('#formSubmitBtn').click(function (e) {
    e.preventDefault();
  })

}

// Regex
function nameRegex(input) {
  let regex = /^[a-zA-Z\s]+$/;
  if (regex.test(input))
    return true
  else
    return false
}

function emailRegex(input) {
  let regex = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(input))
    return true
  else
    return false
}

function phoneRegex(input) {
  let regex = /^01[0125][0-9]{8}$/;
  if (regex.test(input))
    return true
  else
    return false
}

function ageRegex(input) {
  let regex = /^(?:[1-9]|[1-9][0-9])$/;
  if (regex.test(input))
    return true
  else
    return false
}

function passRegex(input) {
  let regex = /^(?=.*[a-zA-Z])(?=.*\d)[\w]{8,}$/;
  if (regex.test(input))
    return true
  else
    return false
}

// Add click event listener to display the contact form when the contact us element is clicked
$('#contactUs').click(function (e) {
  e.preventDefault();

  showForm()

})

// Fetch and display meals for the home page on initial load
getHome();
