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

class Point{
    private x : number;
    y:number;

    constructor(x?:number,y?:number){
        this.x = x;
        this.y = y;
    }
    public setX(x:number){
        this.x = x;
    }

    draw(){
      console.log("x: "+this.x+" y: "+this.y);
    }
    getDistance(anotherPoint :Point){

    }

}

let point = new Point() ;
point.setX(2) ;
point.y = 10 ;
point.draw();


