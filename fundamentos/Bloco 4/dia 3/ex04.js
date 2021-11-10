let n = 15;
let simbolo = "*"
let espaço = " "
let control = (n+1)/2;
let esquerda = control;
let direita = control;
resultado = ""
for(i = 0; i <= control; i++){
    for(let index = 1;index <= n; index++){
        if(index > esquerda && index < direita){
            resultado =resultado + simbolo
        }
        else{resultado =resultado + espaço}
    }
    esquerda--; 
    direita++; 
    console.log(resultado)
    resultado = ""
}