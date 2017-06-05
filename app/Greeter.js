/**
 * Created by Administrator on 2017/6/5.
 */
// Greeter.js
/*
module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = "Hi there and greetings!";
    return greet;
};

*/

var config = require('./config.json');

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;

    const s = new Set();
    var str='';
    [2, 3, 5, 4, 5, 2,9,45, 2].forEach(x => s.add(x));
    for (let i of s) {
        str=str+i;
    }
    greet.textContent = str;

    return greet;
};

