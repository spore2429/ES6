var a=1;
var b=2;

function myFunction() {

    var a=3;
    let b=4;

    if(true) {
        var a=5;
        let b=6;

        console.log(a); //5
        console.log(b); //6
    }
    console.log(a); //5
    console.log(b); //4 //let재선언 안됌
}
myFunction();

console.log(a); //1
console.log(b); //2

