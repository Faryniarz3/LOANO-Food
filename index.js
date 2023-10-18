let currentDish
let dishIDCounter

fetch('http://localhost:3000/burgers')
.then((res) => res.json())
.then((data) => {
   // console.log(data);
    getBurgers(data);
    getDishDetails(data);

})
fetch('http://localhost:3000/pastas')
.then((res) => res.json())
.then((data) => {
   // console.log(data);
    getPastas(data);
    getDishDetails(data);
})

fetch('http://localhost:3000/pizzas')
.then((res) => res.json())
.then((data) => {
   // console.log(data);
    getPizzas(data);
    getDishDetails(data);

})


// const foodDescriptionList = document.getElementById('');
// const foodDescriptionListItems = foodDescriptionList.childNodes;
const navImages = document.getElementsByClassName("nav-item");
const navImagesArr = Array.from(navImages);

const menuNavCategories = document.getElementsByClassName('overlay-text')
const instructionsHeader = document.getElementById('instructions')
const menuItemsList = document.getElementById('dish-items')
const instructionsList = document.getElementById('menu-items')

const logoImgBlock = document.querySelector('span.image-box');
const dishDetailContainer = document.getElementById('food-description-list');


//DOM variables containing the elements for selecting menu items 
const menuItemsListElement = document.getElementById('dish-items')
const menuItemsListItemsArr = Array.from(menuItemsListItems)

//variables for dish detail section
const dishDetailsLiElements = document.getElementsByClassName('dishlist');
const dishDetailsLiElementsArr = Array.from(dishDetailsLiElements);

//form element variables

function getPastas(data) {
    navImagesArr[0].addEventListener('click', () =>{
        
        menuItemsList.textContent = "";
            instructionsHeader.textContent = `Favorite Local Pasta:`;
            instructionsList.style.display = 'none';
            logoImgBlock.innerHTML=""
            menuItemsList.style.display = 'block';
            dishDetailContainer.style.display = 'block';

        data.forEach((ele) => {
            // console.log(ele)
            const menuItemEls = document.createElement('li');
            menuItemEls.textContent = ele.name;
            menuItemEls.className = 'menu-item-els'
            menuItemsList.appendChild(menuItemEls);

        })
        //auto loads first menu item on menu list
        if(data.length > 0) {displayDishDetails(data[0])};
    })
}


function getPizzas(data) {
    navImagesArr[1].addEventListener('click', () =>{
            menuItemsList.textContent = "";
            instructionsHeader.textContent = `Favorite Local Pizza:`;
            instructionsList.style.display = 'none';
            logoImgBlock.innerHTML=""
            menuItemsList.style.display = 'block';
            dishDetailContainer.style.display = 'block';
        data.forEach((ele) => {
            // console.log(ele)
            const menuItemEls = document.createElement('li');
            menuItemEls.textContent = ele.name;
            menuItemsList.appendChild(menuItemEls);
          
        })
         //auto loads first menu item on menu list
        if(data.length > 0) {displayDishDetails(data[0])};
    })
}

function getBurgers(data) {
    navImagesArr[2].addEventListener('click', () =>{
        menuItemsList.textContent = "";
            instructionsHeader.textContent = `Favorite Local Burgers:`;
            instructionsList.style.display = 'none';
            logoImgBlock.innerHTML=""
            menuItemsList.style.display = 'block';
            dishDetailContainer.style.display = 'block';
            
        data.forEach((ele) => {
            const menuItemEls = document.createElement('li');
            menuItemEls.textContent = ele.name;
            menuItemsList.appendChild(menuItemEls);
          
        })
         //auto loads first menu item on menu list
        if(data.length > 0) {displayDishDetails(data[0])};
       
    })
    
}

//gets dish details by connect textContent of event.target (dish name on menu) w/ name value of dish in json object
function getDishDetails (data) {

    menuItemsListElement.addEventListener('click', (event) => {
        

      
      
        //grabs dish object by searching for name value in object array
        const itemName = event.target.textContent;
        const item = data.find(obj => obj.name == itemName);
        console.log(item);
        //adds star symbol in place of number values for rating and repeats symbol based on value
        const starSymbol = "٭";
        const starRating = starSymbol.repeat(item.rating); 

        dishDetailsLiElementsArr[0].innerHTML = `<strong> Dish Name: </strong> \n ${item.name}`;
        dishDetailsLiElementsArr[1].innerHTML = `<strong> Description: </strong> \n ${item.description}`;
        dishDetailsLiElementsArr[2].innerHTML = `<strong> Restaurant: </strong> \n ${item['restaurant-name']}`;
        dishDetailsLiElementsArr[3].innerHTML = `<strong> Address: </strong> \n ${item.address}`;
        dishDetailsLiElementsArr[4].innerHTML = `<strong> Price: </strong> \n $${item.price}`;
        dishDetailsLiElementsArr[5].innerHTML = `<strong> Type: </strong> \n ${item.category}`;
        dishDetailsLiElementsArr[6].innerHTML = `<strong> Rating: </strong> \n <span class="stars">${starRating}</span>`;
        // dishDetailsLiElementsArr[6].innerHTML = `<strong> Rating: </strong> \n <span class="stars">${starRating}</span>`;
       
       // document.addEventListener('DOMContentLoaded', function() {
            const mapDiv = document.getElementById('map');
            mapDiv.innerHTML = ''; 
            const iframe = document.createElement('iframe');
            mapDiv.style.display = 'block';
            iframe.width = '600';
            iframe.height = '450';
            iframe.style.border = '0';
            iframe.loading = 'lazy';
            const location = encodeURIComponent(item.address); 
            iframe.src = `https://www.google.com/maps?q=${location}&output=embed`; 
            mapDiv.appendChild(iframe);       

    })

}


function displayDishDetails (data) {
    //adds star symbol in place of number input for rating
    const starSymbol = "٭";
    const starRating = starSymbol.repeat(data.rating); 

    dishDetailsLiElementsArr[0].innerHTML = `<strong> Dish Name: </strong> \n ${data.name}`;
    dishDetailsLiElementsArr[1].innerHTML = `<strong> Description: </strong> \n ${data.description}`;
    dishDetailsLiElementsArr[2].innerHTML = `<strong> Restaurant: </strong> \n ${data['restaurant-name']}`;
    dishDetailsLiElementsArr[3].innerHTML = `<strong> Address: </strong> \n ${data.address}`;
    dishDetailsLiElementsArr[4].innerHTML = `<strong> Price: </strong> \n $${data.price}`;
    dishDetailsLiElementsArr[5].innerHTML = `<strong> Type: </strong> \n ${data.category}`;
    dishDetailsLiElementsArr[6].innerHTML = `<strong> Rating: </strong> \n ${data.rating}`;
    dishDetailsLiElementsArr[6].innerHTML = `<strong> Rating: </strong> \n <span class="stars">${starRating}</span>`;
    //dishDetailsLiElementsArr[6].innerHTML = `<strong> Rating: </strong> \n <span class="stars">${starRating}</span>`;


}

const foodForm = document.getElementById('new-food-form');

foodForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('new-name').value;
  const description = document.getElementById('new-description').value;
  const restaurantName = document.getElementById('new-restaurant').value;
  const address = document.getElementById('new-address').value;
  const price = document.getElementById('new-price').value;
  const category = document.getElementById('food-type').value;

 
  const newFood = {
    name: name,
    description: description,
    [`restaurant-name`]: restaurantName,
    address: address,
    price: price,
    category: category,
  };

  // Send a POST request to your server to add the new food item to the database
  fetch(`http://localhost:3000/${category}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newFood),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response if necessary
      // For example, you can display a success message to the user
      console.log('Food item added successfully:', data);
    })
    .catch((error) => {
      console.error('Error adding food item:', error);
    });
});