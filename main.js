// function doSomething(){
//     for(var  i = 0;i<5;i++){
//         console.log(i);
//     }
//     console.log("Finally: "+i);
// }
// doSomething();
// let count = 5;
// count = 'a';
// let message;
// message = 'abc';
// let endsWith = (<String>message).endsWith('c');
// let alternativeWay = (message as String).endsWith('c');
// interface Point{
//     x:number;
//     y:number;
// }
// let drawPoint = (point : Point) => {
// }
// let getDistance = (pointA : Point,pointB : Point) =>{
// }
// drawPoint({
//     x:1,
//     y:2
// });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.draw = function () {
        console.log("x: " + this.x + " y: " + this.y);
    };
    Point.prototype.getDistance = function (anotherPoint) {
    };
    return Point;
}());
var point = new Point();
point.setX(2);
point.y = 10;
point.draw();
