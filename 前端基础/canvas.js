var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// 填充颜色
ctx.fillStyle = "green";
// 轮廓颜色,线条颜色
ctx.strokeStyle = "green";
// 填充路径
ctx.fillRect(10, 10, 100, 100);
// 设置线条宽度
lineWidth = 2;
// 一个标准流程
context.beginPath();
context.strokeStyle = '#66ccff';
context.moveTo(x,y);
context.lineTo(x2,y2);
context.stroke();
// 画圆
context.beginPath();
context.arc(200,200,150,0,2*Math.PI);
context.stroke();