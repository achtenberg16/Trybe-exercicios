const estados = { 
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goías',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraíma',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
    } 

    const state = document.getElementById('state');
    
    for(index in estados){
        const cria = document.createElement('option');
        cria.innerText = estados[index];
        cria.setAttribute('value', index)
        state.appendChild(cria)
    }

    const data = document.getElementById('data-inicio')

   function confereData(){
    const data2 = data.value
    const dia = parseInt(data2.slice(0,2))
    const mes = parseInt(data2.slice(3,5))
    const ano = parseInt(data2.slice(6,10))
    if((dia > 0 && dia <= 31) && (mes > 0 && mes < 13) && (ano > 1950)){
        return true
    } return alert('Formato Invalido')
}