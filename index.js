//fetch('')

// const foodDescriptionList = document.getElementById('');
// const foodDescriptionListItems = foodDescriptionList.childNodes;
const navImages = document.getElementsByClassName("nav-item");
 navImages[0].addEventListener ('click',
(event) =>
console.log("CLICK")

)
navImages.forEach(element => {
   element.addEventListener('click' , (event) => console.log(element)) 
});
 

