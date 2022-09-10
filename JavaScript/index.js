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