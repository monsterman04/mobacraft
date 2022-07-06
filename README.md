# monsterman04.github.io

URL Shortener created by me :D
Created for personal use

~~                             ~~

How it works:

1) Split URL
• https://monsterman04.github.io/plugins -> plugins

2) Search **urls.json**
• Looks for JSON object which has key "short" with value "plugins"

3) Redirect
• If found -> check value of key "url" and redirect to that url
• Else -> redirect to **https://monsterman04.github.io/**
