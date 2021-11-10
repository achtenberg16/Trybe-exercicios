let n = 7;
let simbolo = "*";
let space = " "
let line = "";
let soma = n;

for (let index = 0; index < n; index += 1) {
    for (let i = 1; i <= n; i += 1) {
        if (i < soma) { line = line + space } else { line = line + simbolo }
    }
    console.log(line)
    line = "";
    soma--;
}