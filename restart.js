/*


Author: Pratik Shukla
Email: pratiks@pratiks.net
desc: A simple script to reboot Xiaomi routers


*/




var querystring = require('querystring');
var request = require('request-promise-native');
var CryptoJS = require("crypto-js");

var password = "<YOUR_SSID_PASSWORD_HERE>"
var router_URL = '<YOUR_ROUTER_IP>'
var key = '<YOUR_ROUTER_PRIVATE_KEY>'
var deviceId = '<YOUR_DEVICE_ID>'

var Encrypt = {
    key: key,
    nonce: null,
    init: function() {
        var nonce = this.nonceCreat();
        this.nonce = nonce;
        return this.nonce;
    },
    nonceCreat: function() {
        var type = 0;
        var deviceId = deviceId;
        var time = Math.floor(new Date().getTime() / 1000);
        var random = Math.floor(Math.random() * 10000);
        return [type, deviceId, time, random].join('_');
    },
    oldPwd: function(pwd) {
        return CryptoJS.SHA1(this.nonce + CryptoJS.SHA1(pwd + this.key).toString()).toString();
    }
};

var nonce = Encrypt.init();
var oldPwd = Encrypt.oldPwd(password);



var form = {
    "username": "admin",
    "password": oldPwd,
    "logtype": 2,
    "nonce": nonce
};

var formData = querystring.stringify(form);
var contentLength = formData.length;


const options = {
    headers: {
        "Accept": "*/*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Referer": router_URL + "/cgi-bin/luci/web/home",
        "X-Requested-With": "XMLHttpRequest"
    },
    uri: router_URL + '/cgi-bin/luci/api/xqsystem/login',
    body: formData,
    method: 'POST'
}





let AuthUser = function() {
    return request(options, function(err, res, body) {

    });
}
let userToken = AuthUser()
userToken.then(a => {
    var ttt = JSON.parse(a).token
        //console.log("Received token :: " + ttt)
    console.log("rebooting Router now")
    let form = {
        "client": "web"
    };

    let formData = querystring.stringify(form);
    const restart = {
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Referer": router_URL + "/cgi-bin/luci/web/home",
            "X-Requested-With": "XMLHttpRequest"
        },
        uri: router_URL + '/cgi-bin/luci/;stok=' + ttt + '/api/xqsystem/reboot',
        body: formData,
        method: 'POST'
    }


    return request(restart, function(err, res, body) {

    });

})
