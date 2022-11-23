const number = [12,16,65,78];
const numberTwo = [62,34,85,23];
const nuberThree = [100,499,300];
//const totalArray = number.concat(numberTwo).concat(nuberThree);
// three dots ... to concat system 
const totalArray =[...number,...numberTwo,...nuberThree];
console.log(totalArray);


// const job = 850 ;
// const business = 900 ;
// const political = 800 ;
// var result= Math.max(job,business,political);
// console.log(result);


// max number array value 
const studentNumber = [23,45,50,60];
//const result =Math.max(studentNumber);  // result Nan becuase math.max not founded array highest value.
const result = Math.max(...studentNumber);
console.log(result);