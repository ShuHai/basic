## 第一部分 作用域和闭包
### 第一章 作用域是什么
LHS,RHS : JS赋值操作的左侧查询和右侧查询,RHS只是确认变量没有发生变化，而LHS的目的在于赋值。e.g,console.log(a);这里对a的操作是RHS,因为他没有发生变化。let a = 2;这里对a的操作是LHS。RHS如果找不到变量会抛出ReferenceError的异常，LHS在非严格模式下则会创建一个该名称变量。如果进行不合理操作则会抛出typeError

### 第二章 词法作用域
利用eval可以欺骗词法作用域。使用with来快速创建对象。如果引擎在代码中发现了eval或with,他在词法分析阶段无法明确知道eval接收的代码，导致其放弃对整段代码进行性能优化。

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
a
