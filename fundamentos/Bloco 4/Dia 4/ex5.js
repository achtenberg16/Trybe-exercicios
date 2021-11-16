let info2 = {
    personagem: "Tio Patinhas",
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: "sim",
};

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "sim"
};


for (index in info) {
    if (index === "recorrente" && info[index] == "sim" && info2[index] == "sim") { console.log("ambos são recontes")}
    else{console.log(info[index]+" e " + info2[index])}
}