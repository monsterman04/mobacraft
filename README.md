# monsterman04.github.io

URL Shortener created by me :D<br/>
Created for personal use<br/>

~~‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ~~

How it works:

1) Split URL<br/>
• https://monsterman04.github.io/plugins -> plugins

2) Search **urls.json**<br/>
• Looks for JSON object which has key "short" with value "plugins"

3) Redirect<br/>
• If found -> check value of key "url" and redirect to that url<br/>
• Else -> redirect to **https://monsterman04.github.io/**
