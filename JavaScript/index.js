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