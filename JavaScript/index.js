var i = 0;
var text = "Welcome to my page!";
var speed = 200;

function type(){
    if(i < text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

// ↑ Typewriter ↑

function start(){
    type();
    getRandomPokemon();
}

// ↓ Form sender ↓

let form = document.querySelector("form");
let button = document.querySelector("#form-button");
form.addEventListener('submit', (e) =>{
    button.innerText = "Sending...";
    e.preventDefault();
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbz_NRYhKjZ_FgCUieSjmrKse_-kqA5DrXI4D0w8zHz-q-U1K_bMVoR1ibPJrrxbV_EN_Q/exec', {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(data => onSubmit(data));
})

function onSubmit(data){
    button.innerText = "✔";
    console.log(data);
    form.reset();
    setTimeout(() => button.innerText = "Send", 5000);
}

// ↑ Form sender ↑

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

// ↓  Pokemon generator ↓

function getPokemonExact(num){
    return fetch("https://pokeapi.co/api/v2/pokemon/" + num)
    .then(res => res.json())
    .then(data => {
        return data;
    });
}

async function getRandomPokemon(){
    const POKEMON_COUNT = 905;
    const pokemon = await getPokemonExact(randomIntFromInterval(1, POKEMON_COUNT));
    
    
    const name = document.getElementById("poke-name");
    name.innerText = pokemon.name;

    const weight = document.getElementById("poke-weight");
    weight.innerText = "Weight: " + pokemon.weight;

    const image = document.getElementById("poke-img");
    image.alt = pokemon.name;
    image.src = pokemon.sprites.other['official-artwork'].front_default;

    const types = document.getElementById("poke-type");
    let typeText = "";
    for(let i = 0; i < pokemon.types.length; i++){
        typeText += pokemon.types[i].type.name;
        if(i != pokemon.types.length -1){typeText += ", ";}
    }
    if(pokemon.types.length > 1){
        types.innerText = "Types: " + typeText;
    }else{types.innerText = "Type: " + typeText;}
}


