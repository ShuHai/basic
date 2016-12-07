## 第一部分 作用域和闭包
### 第一章 作用域是什么
LHS,RHS : JS赋值操作的左侧查询和右侧查询,RHS只是确认变量没有发生变化，而LHS的目的在于赋值。e.g,console.log(a);这里对a的操作是RHS,因为他没有发生变化。let a = 2;这里对a的操作是LHS。RHS如果找不到变量会抛出ReferenceError的异常，LHS在非严格模式下则会创建一个该名称变量。如果进行不合理操作则会抛出typeError

### 第二章 词法作用域
利用eval可以欺骗词法作用域。使用with可以快速创建对象。如果引擎在代码中发现了eval或with,他在词法分析阶段无法明确知道eval接收的代码，导致其放弃对整段代码进行性能优化。

### 第三章 函数作用域和块作用域
我们通过声明一个名字独特的对象，来当做库的命名空间，所有需要暴露给外界的功能都会变成这个对象（命名空间）的属性。下面是例子<br>
    `
    var objectLibrary = {
      variableA: 'testA',
      doSomething: function () {
        console.log('aaaaa')
      }
    }
    `
<br>我们利用立即执行的函数来避免污染作用域。例如<br>
    `
    function foo() {
      var a =3;
      console.log(a);
    }  
    `
<br>匿名函数的缺点:在栈追踪中没有有意义的函数名使调试困难，只能使用过期的arguments.callee来引用自身。不利于代码的可读性和可理解性。所以始终给函数命名是一个最佳实践。<br>
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