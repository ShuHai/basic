instance of,type of,toString
instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
下面是MDN基本教程
// 定义构造函数
function C(){}
function D(){}

var o = new C();

// true，因为 Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false，因为 D.prototype不在o的原型链上
o instanceof D;

o instanceof Object; // true,因为Object.prototype.isPrototypeOf(o)返回true
C.prototype instanceof Object // true,同上

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true

可以用来判断类型细节。比如a = [];a instanceof Array,Object,Function等等
特殊情况:我们的脚本可能需要在多个窗口之间进行交互。多个窗口意味着多个全局环境，不同的全局环境拥有不同的全局对象，从而拥有不同的内置类型构造函数。这可能会引发一些问题。比如，表达式 [] instanceof window.frames[0].Array 会返回false，因为 Array.prototype !== window.frames[0].Array.prototype，因此你必须使用 Array.isArray(myObj) 或者 Object.prototype.toString.call(myObj) === "[object Array]"来判断myObj是否是数组

typeof用来判断基本类型。注意function也能被判断出来。
undefined,object,boolean,number,string,symbol,function,object

toString() 方法返回一个表示该对象的字符串
var toString = Object.prototype.toString
toString.call(new Date); // [object Date]
toString.call(new Number); // [object Number]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
toString.call(new Array); // [object Array]

JavaScript 调用 valueOf() 方法用来把对象转换成原始类型的值（数值、字符串和布尔值）。 你很少需要自己调用此函数; JavaScript 会自动调用此函数当需要转换成一个原始值时。
