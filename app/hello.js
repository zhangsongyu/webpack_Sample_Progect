/**
 * Created by Administrator on 2017/6/6.
 */
//hello.js
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
    this.sayGoodbye=function () {
        console.log('byebye ' + name);    };
};

module.exports = Hello;