let numberNota = 101;
let nota;
if (numberNota >= 90 && numberNota < 100) { nota = "A" }
else if (numberNota >= 80 && numberNota < 90) { nota = "B" }
else if (numberNota >= 70 && numberNota < 80) { nota = "C" }
else if (numberNota >= 60 && numberNota < 70) { nota = "D" }
else if (numberNota >= 50 && numberNota < 60) { nota = "E" }
else if (numberNota < 50 && numberNota >= 0) { nota = "F" }
else { nota = false };
console.log(nota);
