let arr1=[1,2,3];
let arr2=[4,5];
let arr3=[11,12,...arr1,22,...arr2];
console.log(arr3.length);
console.dir(arr3); //구조나옴

let arr4=[...[100,200],...arr2];
console.log(arr4);

function fsum(arr) {
    let sum=0;

    //방법1
    /*for(i=0;i<arr.length;i++) {
        sum+=arr[i];
    }*/

    //방법2
    for(let a in arr) {
        sum+=arr[a];
    }

    console.log("합계: "+sum);
}
fsum(arr3);

function func3(a,b,c,d,e) {
    console.log(a,b,c,d,e);
}

//func3(arr3);
func3(...arr3);  //func3의 5개가있으므로 5개만 나타남