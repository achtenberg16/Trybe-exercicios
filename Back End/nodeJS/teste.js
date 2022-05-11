function newNumber() {
return new Promise((resolve) => {
  setTimeout(() => {
    resolve(Math.floor(Math.random() * 100 + 1));
  }, 3000);
})
}

async function main () {
 const num1 = await newNumber();
 const num2 = await newNumber();
 console.log(num1, num2);
}

main();


async function main2 () {
  const [num1, num2] = await Promise.allSettled([newNumber(), newNumber()]);
  try {
    console.log(num1, num2);
  } 
  catch (e) {
    console.log(e)
  }
}
main2();


const fs = require('fs').promises;


 function write (file, data) {
  return fs.writeFile(file, data);
 }

write('teste.txt', 'teste');