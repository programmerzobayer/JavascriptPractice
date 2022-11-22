// Arrow function
const multiple = num => num * 2 ;
const multipleResult = multiple(10);
console.log(multipleResult);

const Add = (x,y) => x + y ;
const addResult = Add(10,8);
console.log(addResult);

const num = () => 5 ;
const numResult = num();
console.log(numResult);
 
const bigFun = (x,y) => {
    const sum = x + y ;
    const dif = x - y ;
    const result = sum * dif ;
    return result ;
}
const result = bigFun(12,7);
console.log(result);