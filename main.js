async function fnConsultarCEP() {

    const CEP = '13466321'

    const resposta = await fetch(`http://viacep.com.br/ws/${CEP}/json/`)
    console.log(resposta)

    if (resposta.status == 200) {
        const data = await resposta.json()

        console.log('============================')
        console.log(`CEP: ${data.cep}`)
        console.log(`Rua: ${data.logradouro}`)
        console.log(`Bairro: ${data.bairro}`)
        console.log(`Cidade: ${data.localidade}`)
        console.log(`Estado: ${data.estado}`)
        console.log('============================')
    } else {
        console.log('============================')
        console.log('ENDEREÇO NÃO ENCONTRADO')
        console.log('============================')
    }
}

fnConsultarCEP()