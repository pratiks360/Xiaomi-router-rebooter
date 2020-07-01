# Xiaomi Router rebooter


### Powered by Nodejs
[![N|Solid](https://img.olx.com.br/thumbs256x256/21/214913031438051.jpg)](https://www.google.com/search?sxsrf=ALeKk0315qU7MGKaRgzCK75Zn5sbt-l3ZA%3A1593429937294&ei=sc_5XtO2EdP39QPd-5LYBg&q=mi+routers&oq=mi+routers&gs_lcp=CgZwc3ktYWIQAzIHCCMQsQIQJzIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIECAAQCjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB5Q_TRY_TRggjhoAXAAeACAAYUBiAGFAZIBAzAuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwiT04uL9abqAhXTe30KHd29BGsQ4dUDCAw&uact=5)


### About
In the recent router firmware update, MI removed the functionality to restart your router at a schedule day-time.
This feature was quite useful for dynamic IP users for achieving network privacy.
Moreover, releasing of stalled network services hosted by your network devices like chromecast, Nas-drives,Raspberry-Pi your refrigerator :P




### Tech


* [NodeJs] - The core runtime based on javascript

And of course this project itself is open source with a [public repository][repo]
 on GitHub.

### Installation

This Project requires Nodejs execute and some libs to run.

just change the router details in router.js file for this programs to run
values to change
* var password = "<YOUR_SSID_PASSWORD_HERE>" 
* var router_URL = '<YOUR_ROUTER_IP>'  eg. http://192.168.1.1
* var key = '<YOUR_ROUTER_PRIVATE_KEY>'  you can get this key by viewing the page source of your router homepage. it should be something like this key: 'a2ffa5c9be07488bbb04a3a47d3c5f6a'
* var deviceId = '<YOUR_DEVICE_ID>' you can get this key by viewing the page source of your router homepage. it should be something like this deviceId ='e8:d0:fc:d5:5d:7d'

*configure this script in your directly in your crontab or scheduler

```sh
#Ensure if java is installed
$ npm -v
$ npm i g crypto-js
$ npm i g request
$ npm i g request-promise-native
$ npm i g querystring
$ node router.py
```


### Todos

 - Tests on other Xaiomi models
 

License
----

Apache Foundation

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [pratiks]: <https://github.com/pratiks360>
   [repo]:https://github.com/pratiks360/Xiaomi-router-rebooter
  
