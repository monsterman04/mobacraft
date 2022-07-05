var urls = null;
$.ajax({'async': false,'global': false,'url': "urls.json",'dataType': "json",'success': function (data) {urls = data;}});


function find(_short){
    for(var i = 0; i < urls.length; i++){
        if(urls[i].short == _short){return urls[i].url;}
    }
    
    return "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
}

console.log(find(window.location.pathname.split("/")[1]));
window.location.href = find(window.location.pathname.split("/")[1]);

