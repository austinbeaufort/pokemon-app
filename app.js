
let button = document.querySelector('.button');

// START CALL TO API
button.addEventListener('click', function() {
    
    let xhr = new XMLHttpRequest();
    let body = document.querySelector('body');
    
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*151)}/`, true);
    
    xhr.onload = function() {
        let pokeData = JSON.parse(xhr.responseText);
        console.log(pokeData);
        loaded(pokeData);
    } 
    
    xhr.send();
});
// END CALL TO API



function loaded(pokeData) {
    // name
    let name = document.querySelector('.name');
    name.innerHTML = pokeData.species.name;

    // type
    let type = document.querySelector('.type');
    let typeName = pokeData.types["0"].type.name;
    type.innerHTML = `Type: ${typeName} pokemon`;

    // images
    document.querySelector('.image').src = pokeData.sprites.front_default;
    document.querySelector('.image2').src = pokeData.sprites.back_default;
    document.querySelector('.image3').src = pokeData.sprites.front_shiny;
    document.querySelector('.image4').src = pokeData.sprites.back_shiny;

    // background changes
    switch(typeName) {
        case 'fire': 
            document.body.style.background = 'red';
            document.body.style.color = 'white';
            break;
        case 'water': 
            document.body.style.background = 'blue';
            document.body.style.color = 'white';
            break;
        case 'electric': 
            document.body.style.background = 'yellow'; 
            document.body.style.color = 'black';
            break;
        case 'steel': 
            document.body.style.background = 'silver'; 
            document.body.style.color = 'black';
            break;
        case 'rock': 
            document.body.style.background = 'grey';
            document.body.style.color = 'black';
            break;
        case 'grass': 
            document.body.style.background = 'green';
            document.body.style.color = 'black';
            break;
        case 'ice': 
            document.body.style.background = 'aqua';
            document.body.style.color = 'black';
            break;
        case 'psychic': 
            document.body.style.background = 'purple';
            document.body.style.color = 'white';
            break;
        case 'poison': 
            document.body.style.background = '#3500c6';
            document.body.style.color = 'white';
            break;
        case 'flying': 
            document.body.style.background = '#d1fcf8';
            document.body.style.color = 'black';
            break;
        case 'bug': 
            document.body.style.background = '#014704';
            document.body.style.color = 'white';
            break;
        case 'dragon': 
            document.body.style.background = 'black';
            document.body.style.color = 'white';
            break;
        case 'fighting':
            document.body.style.background = 'brown';
            document.body.style.color = 'black';
            break;
        case 'normal':
            document.body.style.background = 'wheat';
            document.body.style.color = 'black';
            break;
        case 'ground':
            document.body.style.background = '#441c00';
            document.body.style.color = 'white';
            break;
        case 'fairy':
            document.body.style.background = 'pink';
            document.body.style.color = 'black';
            break;
        default:
            document.body.style.color = 'black';
            document.body.style.background = 'white';
            break;
        }

}


// START KEEPS BUTTON BACKGROUND IMAGE CONSISTENT
button.addEventListener('click', function() {
    button.style.backgroundImage = "url('https://i.ibb.co/MpjLY91/pokemon.jpg')";
})

button.addEventListener('mouseenter', function() {
    button.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/2274/3743/products/1.jpg?v=1511107894')";
})

button.addEventListener('mouseleave', function() {
    button.style.backgroundImage = "url('https://i.ibb.co/MpjLY91/pokemon.jpg')";
})
// END KEEP BUTTON BACKGROUND IMAGE CONSISTENT