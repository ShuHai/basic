### Map

    var myMap = new Map();
    myMap.set('keyA', 'a');
    myMap.set('keyB', 'b');
    myMap.set('keyC', 'c');
    myMap.get('keyA');

### Set
集合（Set）对象允许你存储任意类型的唯一值（不能重复），无论它是原始值或者是对象引用。

    var mySet = new Set();
    mySet.add(1);
    mySet.add(1);
    mySet.add(2);
    console.log(mySet.size);
    for (let item of mySet) {console.log(item)}

通过Array.from可以转换成数组

    var arr = Array.from(mySet);
    console.log(arr); // [1,2]

Set和Array互换,顺便来个浅拷贝

    var arr1 = [1,2,3,4];
    var set1 = new Set(arr1);
    var arr2 = [...set1];
    console.log(arr2); // [1,2,3,4]
    console.log(arr2 === arr1); // false

### 扩展运算符...
扩展运算符用三个点号表示，功能是把数组或类数组对象展开成一系列用逗号隔开的值

    var arr = [1,2,3,{b:4},[5,6]];
    console.log(...arr) //1,2,3,{b:4},[5,6]

一个复杂点的栗子,我们可以看到arr这个对象通过扩展运算符被浅拷贝了

    var object1 = {parm1: 'aa', parm2: 'bb'}
    var arr     = [1,2,3,object1]
    var arr2    = arr
    var arr3    = [...arr1]
    console.log(arr2 === arr)  // true
    console.log(arr3 === arr)  // false
    console.log(arr3[3] === object1) // true
