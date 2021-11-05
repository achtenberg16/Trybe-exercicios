const nota = 80;
let resultado;
if (nota >= 80) { resultado = "aprovado" }
else if (nota < 80 & nota >= 60) { resultado = "lista" }
else { resultado = "repovada" };


switch (resultado) {
    case "aprovado": console.log("parabéns, você passou");
        break
    case "lista": console.log("voce está em lista de espera, aguarde")
        break;
    case "repovado": console.log("lamento, você foi reprovado");
        break
    default: console.log("lamento, não encontramos sua nota")
}