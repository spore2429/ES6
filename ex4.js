//함수 파라메터 기본값 가능
function func1(x,y=200,z=300) {

    console.log(x,y,z);
}

func1(3,4,5);
func1(100); //안넣은값 x에 들어감
func1(3,4);
func1(); //x undefined

function func2(a,b) {
    return a+b;
}

console.log(func2(5,6)); //11

let arr=[3,5,9];
let r2=func2(arr[0],arr[1]);

console.log(r2); //8

//... :es6 추가된 기능... 펼침연산자
func1(...arr); //arr 전부 불러와짐
func1(arr[0],arr[1],arr[2]);

let r3=func2(...arr); //앞에 2개값만 넘어간다 3,5 8
console.log(r3);