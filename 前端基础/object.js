// 在JavaScript中，所有的对象都是基于 Object；所有的对象都继承了Object.prototype的属性和方法，它们可以被覆盖（除了以null为原型的对象，如 Object.create(null)）。
// 例如，新的构造函数的原型覆盖原来的构造函数的原型，提供它们自己的 toString() 方法.。
// 对象的原型的改变会传播到所有对象上，除非这些属性和方法被其他对原型链更里层的改动所覆盖。
Object.prototype()
// 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。
Object.getOwnPropertyNames()
// 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。
Object.defineProperty()
// 利用get和set实现双向绑定
Object.defineProperty(userInfo, "nickName", {
    get: function(){
        return document.getElementById('nickName').innerHTML;
    },
    set: function(nick){
        document.getElementById('nickName').innerHTML = nick;
    }
});

//深克隆
var cloneObj = function(obj){
   var str, newobj = obj.constructor === Array ? [] : {};
   if(typeof obj !== 'object'){
     return;
   } else if(window.JSON){
     str = JSON.stringify(obj), //系列化对象
    newobj = JSON.parse(str); //还原
 } else {
    for(var i in obj){
     newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];
      }
    }
    return newobj;
};