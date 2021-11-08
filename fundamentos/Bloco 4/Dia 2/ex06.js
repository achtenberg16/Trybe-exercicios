let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberImpar = 0;
for(let index = 0; index < numbers.length; index +=1){if(numbers[index]%2 !== 0){numberImpar += 1}};

if(numberImpar > 0){console.log(numberImpar)}
else{console.log("nenhum valor impar")}