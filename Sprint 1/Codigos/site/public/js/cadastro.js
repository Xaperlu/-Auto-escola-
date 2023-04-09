
const cnpj = document.getElementById('inCnpj');

function MascaraCnpj() {

    let tamanhoCnpj = cnpj.value.length

    if (tamanhoCnpj == 2 || tamanhoCnpj == 6 || tamanhoCnpj == 15) {
        cnpj.value += "."
    }

    if (tamanhoCnpj == 10) {
        cnpj.value += "/"
    }
}