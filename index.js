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
const menuItemsListItems = menuItemsListElement.childNodes
const menuItemsListItemsArr = Array.from(menuItemsListItems)

//variables for dish detail section
const dishDetailsLiElements = document.getElementsByClassName('dishlist');
const dishDetailsLiElementsArr = Array.from(dishDetailsLiElements);


function getPastas(data) {
    navImagesArr[0].addEventListener('click', () =>{

        menuItemsList.textContent = "";
            instructionsHeader.textContent = `Favorite Local Pasta:`;
            instructionsList.style.display = 'none';
            logoImgBlock.innerHTML=""
            menuItemsList.style.display = 'block';
            dishDetailContainer.style.display = 'block';

        data.forEach((ele) => {
            console.log(ele)
            const menuItemEls = document.createElement('li');
            menuItemEls.textContent = ele.name;
            menuItemEls.className = 'menu-item-els'
            menuItemsList.appendChild(menuItemEls);

        })
     
    })
}

function searchDishName(data) {
    //create array of dishes

   
    // const itemName = event.target.textContent;
    // const item = data.find(obj => obj.name === itemName);
    
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
            console.log(ele)
            const menuItemEls = document.createElement('li');
            menuItemEls.textContent = ele.name;
            menuItemsList.appendChild(menuItemEls);
          
        })
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
            console.log(ele)
            const menuItemEls = document.createElement('li');
            menuItemEls.textContent = ele.name;
            menuItemsList.appendChild(menuItemEls);
            
          
        })
    })
}

//gets dish details by connect textContent of event.target (dish name on menu) w/ name value of dish in json object
function getDishDetails (data) {
    menuItemsListElement.addEventListener('click', (event) => {
        const itemName = event.target.textContent;
        const item = data.find(obj => obj.name == itemName);
        console.log(item)
        dishDetailsLiElementsArr[0].innerText = `Dish Name: \n ${item.name}`;
        dishDetailsLiElementsArr[1].innerText = `Description: \n ${item.description}`;
        dishDetailsLiElementsArr[2].innerText = `Restaurant: \n ${item['restaurant-name']}`;
        dishDetailsLiElementsArr[3].innerText = `Address: \n ${item.address}`;
        dishDetailsLiElementsArr[4].innerText = `Price: \n $${item.price}`;
        dishDetailsLiElementsArr[5].innerText = `Type: \n ${item.category}`;
    
        const mapContainer = document.getElementById('map-container');
        const iframe = document.createElement('iframe');
        mapContainer.appendChild(iframe);
        console.log(iframe.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${item.address}`);
        mapContainer.style.display = 'block';
        iframe.style.width = '100%';    
        iframe.style.height = '100%';
        iframe.frameBorder = '0';
        iframe.style.border = '0';
       

    })

}


// //iframe object with map location
// // Get the container
// const mapContainer = document.getElementById('map-container');
// const iframe = document.createElement('iframe');

// // Set the Google Maps URL with the location
// iframe.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${item.address}`;

// // Apply styles to iframe
// iframe.style.width = '100%';
// iframe.style.height = '100%';
// iframe.frameBorder = '0';
// iframe.style.border = '0';

// // Append the iframe to the container
// mapContainer.appendChild(iframe);