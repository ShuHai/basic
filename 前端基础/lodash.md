_.chunk(array, size) e.g _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
将数组拆分成多个size长度块

_.compact(array) e.g_.compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]
返回一个新数组，去除所有假值,例如false、null、 0、""、undefined 和 NaN

_.difference(array, [values]) e.g _.difference([1, '2', 3], [4, 2]); //  => [1, "2", 3]
过滤数组中的某些值，只过滤掉全等的值

_.drop(array, [n=1]) e.g _.drop([1, 2, 3]); // => [2, 3] 默认是1开始的
将 array 中的前 n 个元素去掉，然后返回剩余的部分

_.dropRight 同上,从尾部开始去除元素

_.dropRightWhile(array, [predicate=_.identity], [thisArg])删除指定元素

_.dropWhile(array, [predicate=_.identity], [thisArg]) 删除指定元素（从前开始）

_.fill(array, value, [start=0], [end=array.length]) .e.g _.fill([4, 6, 8], '*', 1, 2); // => [4, '*', 8]
使用 value 值来填充（也就是替换） array，从start位置开始, 到end位置结束（但不包含end位置）






