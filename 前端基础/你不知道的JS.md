## 第一部分 作用域和闭包
### 第一章 作用域是什么
LHS,RHS : JS赋值操作的左侧查询和右侧查询,RHS只是确认变量没有发生变化，而LHS的目的在于赋值。

e.g,console.log(a);这里对a的操作是RHS,因为他没有发生变化。

let a = 2;这里对a的操作是LHS。

RHS如果找不到变量会抛出ReferenceError的异常，LHS在非严格模式下则会创建一个该名称变量。如果进行不合理操作则会抛出typeError

<!-- more -->

### 第二章 词法作用域
利用eval可以欺骗词法作用域。使用with可以快速创建对象。如果引擎在代码中发现了eval或with,他在词法分析阶段无法明确知道eval接收的代码，导致其放弃对整段代码进行性能优化。

### 第三章 函数作用域和块作用域
我们通过声明一个名字独特的对象，来当做库的命名空间，所有需要暴露给外界的功能都会变成这个对象（命名空间）的属性。下面是例子

    `
    var objectLibrary = {
      variableA: 'testA',
      doSomething: function () {
        console.log('aaaaa')
      }
    }
    `
匿名函数的缺点:在栈追踪中没有有意义的函数名使调试困难，只能使用过期的arguments.callee来引用自身。不利于代码的可读性和可理解性。所以始终给函数命名是一个最佳实践。<br>
IIFE:立即执行函数，通常是一个匿名函数表达式。有两种写法<br>

    `
    (function foo() {})()
    (function foo() {} ())
    `
 进阶用法是把他们当函数调用并传参进入<br>

    `
    var a = 2;
    (function IIFE(global) {console.log(global.a)})
    (window);
    `
<br>冷知识，在没有let之前，catch可以创建块级作用域<br>
### 第四章 提升
a = 2; var a;console.log(a); 此时会输出2,原因就在于变量的提升。先console.log(a); var a = 2;则会输出undefined。
当我们看到var a = 2;JS会把他看成两步操作，var a;a = 2;第一个定义会在编译过程完成,第二个赋值声明会留在原地等待执行。所以，在变量声明赋值过程中，先声明,后赋值。<br>
在函数声明过程中，函数及其内部定义内容会集体提前。但是你对一个变量赋值给他一个函数时，依然是变量先声明，到位置才赋值给他函数。比如

    `
    foo();bar();var foo = function bar() {};
    `

 <br>这段代码会被实际解析成<br/>

    `
    var foo; foo(); bar(); foo = function() {
      var bar = self
    }
    `

<br>函数声明会提升到普通变量之前，因此定义一个函数foo()以后再var foo，这个变量声明会被忽略掉。尽可能避免在块内部声明函数</br>

### 第五章 作用域闭包
当函数可以记住并访问所在的词法作用域的时候,就产生了闭包。函数在调用之后本来应该销毁，但是由于外部对函数内部的引用导致其无法销毁，这时候就产生了闭包。来一个最简单的例子。<br>

    `
    function foo() {
      var a = 2;
      function bar() {console.log(a)}
      return bar;
    }
    var baz = foo();
    baz();
    `
 <br>这就是闭包的效果，bar这个函数在定义的词法作用域以外的地方被执行。又比如计时器。

   ```
   function wait() {
     var test = 'test';
     setTimeout(function timer(){console.log(test)}, 1000)
   }
   ```
<br>由于计时器会持有对参数的引用，在第一次触发函数后他尼日不作用域不会消失，所以timer依旧保持着闭包。同理，事件监听器（比如jq的click触发一个函数），ajax请求等等使用了回调函数实际都是在使用闭包。下面是那个很经典的例子<br>

 ```
 for(var i =1;i<5;i++) {
  setTimeout(function timer() {
    console.log(i)
  },1000)
 }
 ```

 <br>上面的例子会输出五次5，如果想避免这种情况发生。要改成下面的样子<br>

 ```
 for(var i =1;i<5;i++) {
   (function(i){
     setTimeout(function timer() {
       console.log(i)
     },1000)
   })(i)
 }
 ```

## 第二部分 this和对象原型
### 第一章 关于this
this在任何情况下都不指向函数的词法作用域。
当我们在一个函数中使用了严格模式，默认的this指向不是全局对象而是undefined<br>

  ```
  function foo() {console.log(this.a)}
  var a = 2;
  foo(); //2
  ```

  ```
  function foo() {console.log(this.a)};
  var obj = {a:2,foo:foo};
  obj.foo(); //2
  ```

<br>关于隐式绑定this丢失，回调，计时器会发生同样的问题，参数传递是一种隐式赋值<br>

  ```
  function foo() {console.log(this.a)};
  var obj = {a:2,foo:foo};
  obj.foo(); //2
  var bar = obj.foo;
  var a = 'global';
  bar(); //global
  ```

 <br>硬绑定:通过把apply包裹在一个函数内实现this不可换<br>

  ```
  function foo() {console.log(this.a)};
  var obj = {a:2};
  var bar = function(){foo.call(obj)}
  ```

 <br>在es5硬绑定被封装成了bind函数<br>

 ```
 function bind(fn,obj){
   return funtion() {
     return fn.apply(obj,arguments)
   }
 }
 ```
 <br>this的优先级（这段有争议还要好好理解一下）:是箭头函数优先级最高（但是他和其他规则有点不一样），然后是new出来的对象，然后是显示调用（bind硬绑定和call,apply这种普通的显示绑定），然后是隐式调用（比如在一个obj绑一个函数，里面用到了this），最后是默认this（一般是windows对象）

 ```
 function foo(arg) {
   this.a = arg;
 }
 var obj1 = {};
 var bar = foo.bind(obj1);
 bar(2);
 console.log(obj1.a);
 var baz = new bar(3);
 console.log(obj1.a);
 console.log(baz.a);
 ```
## 中卷 第一部分 类型和语法

 使用复合条件来判断一个变量是否是null: !a && typeof a === 'object'

 var a ; type of a;type of b;都是undefined

 数组也是对象：var a = [];a[0] = 1;a['foo'] =2;console.log(a.length);

 使用Array.prototype.slice(arguments)来获取函数传参

 整数的安全范围：2的53次方 - 1

 isNaN('foo') 会返回true，但这其实是一个bug，不要在项目中使用isNaN来做数字判断
  `
 function foo(x) {
   x.push(4)
   x = [4,5,6]
   x.push(7)
 }
 var a = [1,2,3];
 foo(a)
 console.log(a);//[1,2,3,4]
 `
 <br>如果我们要让x指向[4,5,6,7],那我们在foo函数要先把x.length = 0,然后push(4,5,6,7)才行

 [] + {} ===  [object object] {}+[] = 0

 a||b 等价于 a ? a : b; a && b等价于a ? b : a

 "0" == false; false == 0;false ="";""==0;""=[];0==[];

## 第二部分 异步和性能
通过尾调用来优化性能。对中卷的理解还不够深刻，挖个坑，等以后理解够了再继续填坑。
