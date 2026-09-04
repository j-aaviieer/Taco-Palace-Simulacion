var counter = 0;

var foodCounterNumber = document.getElementById("foodCounter");
var orderButtonCount = document.getElementById("orderButton");

orderButtonCount.onclick = function () {
    counter = counter + 1;
    foodCounterNumber.innerText = counter;
};
var foodCounterNumber = document.getElementById("foodCounter");
var orderButtonCount = document.getElementById("orderButton2");

orderButtonCount.onclick = function () {
    counter = counter + 1;
    foodCounterNumber.innerText = counter;
};


const tarjeta = document.getElementById("imageContainer");

const imagenTarjeta = document.querySelector(".section-left-image");
tarjeta.addEventListener("mouseover", function () {
   imagenTarjeta.src = "static/images/comida-mexicana2.jpg";
});
tarjeta.addEventListener("mouseout", function () {
   imagenTarjeta.src = "static/images/comida-mexicana.jpg";
});



const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    const loginInput = document.getElementById('login').value;
    alert(`Bienvenid@ ${loginInput}`)
});