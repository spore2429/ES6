//es6 좀더 언어적으로 바뀜, Set,Map가능(컬렉션)
let set=new Set("abcccdddeeefffff"); //중복문자 걸러짐
console.log(set);

set.add("g"); //없으니까 추가됨
console.log(set);

console.log(set.has("a")); //true
console.log(set.has("z")); //false
console.log("길이: "+set.size);

console.log(...set); //펼침연산자
set.delete("a"); //하나씩 삭제
console.log(...set);

set.clear(); //전체 삭제
console.log(set.size);

//비교연산자
let a=6;
let b="6";

console.log(a==b); //값으로만 비교하기때문에 true
console.log(a===b); //타입까지 같아야되기때문에 false
