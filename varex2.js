/*
var: 함수형변수
let: 영역형변수
const: 영역형변수 상수
*/

//var Test: 재선언가능,업데이트 가능
var hello="안녕";
var hello="헬로우";  //재선언
var cnt=5;

if(cnt<6) {
    var hello1="say hello~~";
    console.log(hello1);
}

console.log(hello1); //false 시 찾지못함
console.log(hello);

//let ..재선언 불가,업데이트 가능
let hi="hi";
hi="하이라고 할게";

let times=5;

if(times>3) {
    let hi1="say Hi~~";
    console.log(hi1);
}

//console.log(hi1);
console.log(hi);

//const :재선언 불가,업데이트 불가
const hi3={
    message:"3th say Hi~~",
    times:4
}

console.log(hi3);

/*const hi3={
    message:"4th say Hi~~",
    times:5
}

console.log(hi3);*/

hi3.message="요렇게는 될까?";
hi3.times=44;
console.log(hi3);