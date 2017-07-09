注册事件监听器（见https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener）

EventTarget.addEventListener

myButton.addEventListener('click', function(){alert('Hello world');}, false);

第一个参数为常见事件类型，参考https://developer.mozilla.org/zh-CN/docs/Web/Events

第二个参数为函数，第三个参数为冒泡还是捕获，默认冒泡。除此以外还有options参考文档。比如只调用一次等。

值得一提的是addEventListener的option新加的参数passive，这个属性可以提高页面的流程程度。细节可参考专栏https://zhuanlan.zhihu.com/p/24555031。简单点说就是原来touch是应该滚动的，但是可能在函数中被preventDefault，所以浏览器会通过函数内容来判断，这一定程度会有延迟，所以把这个东西提了出来，单独通过一个属性来判断来提升滑动速度。如果你把这个属性设置成true你就不能再在函数中使用preventDefault了，但是滚动效果就棒棒的。（个人在css中会使用-webkit-overflow-scrolling: touch来优化滑动效果

或者直接绑在元素上面
myButton.onclick = function(event){alert('Hello world');};
