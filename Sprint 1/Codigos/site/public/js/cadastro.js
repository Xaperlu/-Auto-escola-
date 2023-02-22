
const cnpj = document.getElementById('inCnpj');

function MascaraCnpj(){

    let tamanhoCnpj = cnpj.value.length

    if(tamanhoCnpj == 2 || tamanhoCnpj == 6 || tamanhoCnpj == 15){
        cnpj.value += "."
    }

    if(tamanhoCnpj == 10){
        cnpj.value += "/"
    }
}

const numCep= document.getElementById('inCep');
const logradouro = document.getElementById('inLogradouro'); 
const bairro = document.getElementById('inBairro');

function CepMascara(){

    if(numCep.value.length == 5){
        numCep.value += "-"
    }

    if(numCep.value.length == 9){
        PegarEndereco(numCep.value)
    }

    if(numCep != 9){
        logradouro.value = "";
        bairro.value = "";
    }
}

function PegarEndereco(cep){
    let script = document.createElement('script');

    script.src = `https://viacep.com.br/ws/${cep}/json/?callback=CallbackEndereco`;

    document.body.appendChild(script);
}

function CallbackEndereco(endereco){
    logradouro.value = (endereco.logradouro);
    bairro.value = (endereco.bairro);
}

const celular = document.getElementById('inCelular');
const telefone = document.getElementById('inFixo');

function CelMascara() {
    
    let tamanhoCel = celular.value.length

    if(tamanhoCel == 2) {
        celular.value += " "
    }

    if(tamanhoCel == 8){
        celular.value += "-"
    }

}

function FixoMascara() {

    let tamanhoTel = telefone.value.length

    if(tamanhoTel == 2) {
        telefone.value += " "
    }

    if(tamanhoTel == 7){
        telefone.value += "-"
    }
}
