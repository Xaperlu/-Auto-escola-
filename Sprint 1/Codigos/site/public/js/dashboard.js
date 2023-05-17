window.onload = function(){
    pegarInfoBanco();
    pegarInfoDash();
}

nomeEmpresa.innerHTML = sessionStorage.getItem('EMPRESA_USUARIO')

document.querySelector("#voltarperfil").addEventListener("click", ()=>{
   console.log("sair")

    window.location = "./perfil.html";
    

    
})

function pegarInfoDash(){
    let hardware = document.querySelector('#selHardware')
    let id = sessionStorage.getItem('ID_USUARIO')

    fetch(`/usuarios/pegarInfoDash/${id}`).then(function (resposta){
        if(resposta.ok){
            resposta.json().then(function(response){
                var info = JSON.parse((JSON.stringify(response)))

                for(let i = 0; i < response.length; i++){
                    hardware.innerHTML += `<option value = ${info[i].id_hardware}>${info[i].numero_serie}</option>`
        
                }
                obterDadosDash()
                obterDadosRam()
                obterDadosDisco()
                obterDadosRede()
                pegarDadosGraficosRosca()
            })
        }
    })
}

function recarregarDashs(){
    obterDadosDash2()
    obterDadosRam2()
    obterDadosDisco2()
    pegarDadosGraficosRosca()
    myChart4.update()
    /* obterDadosRede() */
}

function pegarInfoBanco(){
    let unidade = document.querySelector('#selUnidade')
    let id = sessionStorage.getItem('ID_USUARIO')

    fetch(`/usuarios/pegarInfoBanco/${id}`).then(function (resposta){
        if(resposta.ok){
            resposta.json().then(function(response){
                var info = JSON.parse((JSON.stringify(response)))

                for(let i = 0; i < response.length; i++){
                    unidade.innerHTML += `<option value = ${info[i].id_unidade}>${info[i].nome_unidade}</option>`
                }

            })
        }
    })
}

// Dashboard CPU

function obterDadosDash2(){
    let hardware = document.querySelector('#selHardware').value
    fetch(`/usuarios/obterDadosDash/${hardware}`).then((resposta)=>resposta.json().then((response)=>trocarDadosDash(response, myChart9)))
}

function trocarDadosDash(dadosR, chart){
    chart.config._config.data.datasets[0].data = []
    chart.config._config.data.labels = []

    for(var i = 0; i < dadosR.length; i++){
        var atual = dadosR[dadosR.length - (i + 1)]
        chart.config._config.data.labels.push(atual.momento)
        chart.config._config.data.datasets[0].data.push(atual.porcentagem_uso)
    }

    chart.update()
}

function obterDadosDash(){
    let hardware = document.querySelector('#selHardware').value
    fetch(`/usuarios/obterDadosDash/${hardware}`).then((resposta)=>resposta.json().then((response)=>exibirDados(response, hardware)))
}

let myChart9

function excluirChart(){
    myChart9.destroy()
}

function exibirDados(dadosR, hardware){
    var labels = []
    var dados = {
        labels,
        datasets: [
        {
            label: 'CPU',
            data: [],
            fill: false,
            backgroundColor: '#B3345E',
            borderColor: '#B3345E',
            tension: 0.2,
            borderWidth: 2
        }]
    }
    for(var i = 0; i < dadosR.length; i++){
        var atual = dadosR[dadosR.length - (i + 1)]
        labels.push(atual.momento)
        dados.datasets[0].data.push(atual.porcentagem_uso)
    }
    const config = {
        type: 'line', 
        data: dados,
        options: {}
    }
    if(myChart9 != null){
        excluirChart()
    }
    myChart9 = new Chart(
        document.getElementById('myChart9'),
        config
    )
    setTimeout(()=>atualizarGrafico(hardware, dados, myChart9),5000)
}

var proximaAtualizacao

function atualizarGrafico(hardware, dados, myChart9){
    fetch(`/usuarios/atualizarGrafico/${hardware}`).then((resposta)=>{
        if(resposta.ok){
            resposta.json().then((response)=>{
                if(response[0].momento == dados.labels[dados.labels.length - 1]){

                }else{
                    dados.labels.shift()
                    dados.labels.push(response[0].momento)
                    dados.datasets[0].data.shift()
                    dados.datasets[0].data.push(response[0].porcentagem_uso)
                    myChart9.update()
                }
                proximaAtualizacao = setTimeout(()=>atualizarGrafico(hardware, dados, myChart9), 5000)
            })
        }
    })
}


//Dashboard RAM

function obterDadosRam2(){
    let hardware = document.querySelector('#selHardware').value
    fetch(`/usuarios/obterDadosRam/${hardware}`).then((resposta)=>resposta.json().then((response)=>trocarDadosDash(response, myChart5)))
}

function obterDadosRam(){
    let hardware = document.querySelector('#selHardware').value
    fetch(`/usuarios/obterDadosRam/${hardware}`).then((resposta)=>resposta.json().then((response)=>exibirDadosRam(response, hardware)))
}

let myChart5

function excluirChart5(){
    myChart5.destroy()
}

function exibirDadosRam(dadosR, hardware){
    var labels = []
    var dados = {
        labels,
        datasets: [
        {
            label: 'Memória RAM',
            data: [],
            fill: false,
            backgroundColor: '#5F57BD',
            borderColor: '#5F57BD',
            tension: 0.2,
            borderWidth: 2
        }]
    }
    for(var i = 0; i < dadosR.length; i++){
        var atual = dadosR[dadosR.length - (i + 1)]
        labels.push(atual.momento)
        dados.datasets[0].data.push(atual.porcentagem_uso)
    }
    const config = {
        type: 'line', 
        data: dados,
        options: {}
    }
    if(myChart5 != null){
        excluirChart5()
    }
    myChart5 = new Chart(
        document.getElementById('myChart5'),
        config
    )
    setTimeout(()=>atualizarGraficoRam(hardware, dados, myChart5),5000)
}

var proximaAtualizacaoRam

function atualizarGraficoRam(hardware, dados, myChart5){
    fetch(`/usuarios/atualizarGraficoRam/${hardware}`).then((resposta)=>{
        if(resposta.ok){
            resposta.json().then((response)=>{
                if(response[0].momento == dados.labels[dados.labels.length - 1]){

                }else{
                    dados.labels.shift()
                    dados.labels.push(response[0].momento)
                    dados.datasets[0].data.shift()
                    dados.datasets[0].data.push(response[0].porcentagem_uso)
                    myChart5.update()
                }
                proximaAtualizacaoRam = setTimeout(()=>atualizarGraficoRam(hardware, dados, myChart5), 5000)
            })
        }
    })
}

//Dashboard Disco
function obterDadosDisco2(){
    let hardware = document.querySelector('#selHardware').value
    fetch(`/usuarios/obterDadosDisco/${hardware}`).then((resposta)=>resposta.json().then((response)=>trocarDadosDash(response, myChart7)))
}

function obterDadosDisco(){
    let hardware = document.querySelector('#selHardware').value
    fetch(`/usuarios/obterDadosDisco/${hardware}`).then((resposta)=>resposta.json().then((response)=>exibirDadosDisco(response, hardware)))
}

let myChart7

function excluirChart7(){
    myChart7.destroy()
}

function exibirDadosDisco(dadosR, hardware){
    var labels = []
    var dados = {
        labels,
        datasets: [
        {
            label: 'Disco',
            data: [],
            fill: false,
            backgroundColor: '#964EBF',
            borderColor: '#964EBF',
            tension: 0.2,
            borderWidth: 2
        }]
    }
    for(var i = 0; i < dadosR.length; i++){
        var atual = dadosR[dadosR.length - (i + 1)]
        labels.push(atual.momento)
        dados.datasets[0].data.push(atual.porcentagem_uso)
    }
    const config = {
        type: 'line', 
        data: dados,
        options: {}
    }
    if(myChart7 != null){
        excluirChart7()
    }
    myChart7 = new Chart(
        document.getElementById('myChart7'),
        config
    )
    setTimeout(()=>atualizarGraficoDisco(hardware, dados, myChart7),5000)
}

var proximaAtualizacaoDisco

function atualizarGraficoDisco(hardware, dados, myChart7){
    fetch(`/usuarios/atualizarGraficoDisco/${hardware}`).then((resposta)=>{
        if(resposta.ok){
            resposta.json().then((response)=>{
                if(response[0].momento == dados.labels[dados.labels.length - 1]){

                }else{
                    dados.labels.shift()
                    dados.labels.push(response[0].momento)
                    dados.datasets[0].data.shift()
                    dados.datasets[0].data.push(response[0].porcentagem_uso)
                    myChart7.update()
                }
                proximaAtualizacaoDisco = setTimeout(()=>atualizarGraficoDisco(hardware, dados, myChart7), 5000)
            })
        }
    })
}

//Rede

function obterDadosRede(){
    let hardware = document.querySelector('#selHardware').value
    fetch(`/usuarios/obterDadosRede/${hardware}`).then((resposta)=>resposta.json().then((response)=>exibirDadosRede(response, hardware)))
}

let myChart3

function excluirChart3(){
    myChart3.destroy()
}

function exibirDadosRede(dadosR, hardware){
    var labels = []
    var dados = {
        labels,
        datasets: [
        {
            label: 'Download',
            data: [],
            fill: false,
            backgroundColor: '#30537D',
            borderColor: '#30537D',
            tension: 0.2,
            borderWidth: 2
        },
        {
            label: 'Upload',
            data: [],
            fill: false,
            backgroundColor: '#7DB1F0',
            borderColor: '#7DB1F0',
            tension: 0.2,
            borderWidth: 2
        }]
    }
    for(var i = 0; i < dadosR.length; i++){
        var atual = dadosR[dadosR.length - (i + 1)]
        labels.push(atual.momento)
        dados.datasets[0].data.push(atual.download_mbps)
        dados.datasets[1].data.push(atual.upload_mbps)
    }
    const config = {
        type: 'line', 
        data: dados,
        options: {}
    }
    if(myChart3 != null){
        excluirChart3()
    }
    myChart3 = new Chart(
        document.getElementById('myChart3'),
        config
    )
    setTimeout(()=>atualizarGraficoRede(hardware, dados, myChart3),5000)
}

var proximaAtualizacaoRede

function atualizarGraficoRede(hardware, dados, myChart3){
    fetch(`/usuarios/atualizarGraficoRede/${hardware}`).then((resposta)=>{
        if(resposta.ok){
            resposta.json().then((response)=>{
                if(response[0].momento == dados.labels[dados.labels.length - 1]){

                }else{
                    dados.labels.shift()
                    dados.labels.push(response[0].momento)
                    dados.datasets[0].data.shift()
                    dados.datasets[1].data.shift()
                    dados.datasets[0].data.push(response[0].download_mbps)
                    dados.datasets[1].data.push(response[0].upload_mbps)
                    myChart3.update()
                }
                proximaAtualizacaoRede = setTimeout(()=>atualizarGraficoRede(hardware, dados, myChart3), 5000)
            })
        }
    })
}

let myChart1
let myChart2
let myChart4
let myChart6
let myChart8

function excluirChartRosca(){
    /* myChart1.destroy()
    myChart2.destroy() */
    myChart4.destroy()
    myChart6.destroy()
    myChart8.destroy()
}

function pegarDadosGraficosRosca2(){
    let hardware = document.querySelector('#selHardware').value
    fetch(`/usuarios/pegarDadosGraficosRosca/${hardware}`).then((resposta)=>resposta.json().then((response)=>trocarDadosRosca(response, myChart1, myChart2, myChart4, myChart6, myChart8)))
}

function trocarDadosRosca(dadosR, chart1, chart2, chart4, chart6, chart8){
    chart.config._config.data.datasets[0].data = []
    chart.config._config.data.labels = []

    for(var i = 0; i < dadosR.length; i++){
        var atual = dadosR[dadosR.length - (i + 1)]
        chart.config._config.data.labels.push(atual.momento)
        chart.config._config.data.datasets[0].data.push(atual.porcentagem_uso)
    }

    chart.update()
}

function pegarDadosGraficosRosca(){
    let hardware = document.querySelector('#selHardware').value
    fetch(`/usuarios/pegarDadosGraficosRosca/${hardware}`).then((resposta)=>{
        if(resposta.ok){
            resposta.json().then((response)=>{
                console.log(response)
                console.log(hardware)
                exibirDadosGraficoRosca(response, hardware, myChart1, myChart2, myChart4, myChart6, myChart8)
            })
        }
    })
}

function exibirDadosGraficoRosca(dadosR, hardware, myChart1, myChart2, myChart4, myChart6, myChart8){
    let labels = ['Acima', 'Abaixo']

    let dadosRam = {
        labels,
        datasets: [
        {
            label: 'Consumo de Memória RAM',
            data: [],
            backgroundColor: [
                '#5F57BD',
                '#362F7C'
            ],
            borderColor: ['#5F57BD'],
            hoverOffset: 4
        }]
    }

    let dadosDisco = {
        labels,
        datasets: [
        {
            label: 'Consumo de Disco',
            data: [],
            backgroundColor: [
                '#964EBF',
                '#653381'
            ],
            borderColor: ['#964EBF'],
            hoverOffset: 4
        }]
    }

    let dadosCpu = {
        labels,
        datasets: [
        {
            label: 'Consumo de CPU',
            data: [],
            backgroundColor: [
                '#A04564',
                '#792440'
            ],
            borderColor: ['#A04564'],
            hoverOffset: 4
        }]
    }

    let kpiRam = document.querySelector('#kpi02')
    let kpiCpu = document.querySelector('#kpi04')
    let kpiDisco = document.querySelector('#kpi03')

    for(let i = 0; i < dadosR.length; i++){
        let atual = dadosR[dadosR.length - (i + 1)]
        dadosRam.datasets[0].data.push(atual.RamAcima, atual.RamAbaixo)
        dadosDisco.datasets[0].data.push(atual.DiscoAcima, atual.DiscoAbaixo)
        dadosCpu.datasets[0].data.push(atual.CpuAcima, atual.CpuAbaixo)
        kpiRam.innerHTML = ((atual.RamAcima / (atual.RamAcima + atual.RamAbaixo)) * 100) + "%" 
        kpiCpu.innerHTML = ((atual.CpuAcima / (atual.CpuAcima + atual.CpuAbaixo)) * 100) + "%" 
        kpiDisco.innerHTML = ((atual.DiscoAcima / (atual.DiscoAcima + atual.DiscoAbaixo)) * 100) + "%" 
    }

    verificarCoresKpi(dadosR[0])

    const config1 = {
        type: 'doughnut', 
        data: dadosRam
    }

    const config2 = {
        type: 'doughnut', 
        data: dadosDisco
    }

    const config3 = {
        type: 'doughnut', 
        data: dadosCpu
    }

    /* if(myChart4 != null || myChart6 != null || myChart8 != null){
        excluirChartRosca()
    } */

    /* myChart1 = new Chart(
        document.getElementById('myChart1'),
        config
    )

    myChart2 = new Chart(
        document.getElementById('myChart2'),
        config
    ) */

    myChart4 = new Chart(
        document.getElementById('myChart4'),
        config1
    )

    myChart6 = new Chart(
        document.getElementById('myChart6'),
        config2
    )

    myChart8 = new Chart(
        document.getElementById('myChart8'),
        config3
    )

    /* setTimeout(()=>atualizarGraficoRede(hardware, dados, myChart3),5000) */
}

function verificarCoresKpi(dados){
    let ram = document.querySelector('#barraRam')
    let disco = document.querySelector('#barraDisco')
    let cpu = document.querySelector('#barraCpu')

    if(((dados.RamAcima / (dados.RamAcima + dados.RamAbaixo)) * 100) < 10){
        ram.style.backgroundColor = "#1FB981"
    }else if(((dados.RamAcima / (dados.RamAcima + dados.RamAbaixo)) * 100) < 20){
        ram.style.backgroundColor = "#fbbf24"
    }else{
        ram.style.backgroundColor = "#f97316"
    }

    if(((dados.CpuAcima / (dados.CpuAcima + dados.CpuAbaixo)) * 100) < 10){
        cpu.style.backgroundColor = "#1FB981"
    }else if(((dados.CpuAcima / (dados.CpuAcima + dados.CpuAbaixo)) * 100) < 20){
        cpu.style.backgroundColor = "#fbbf24"
    }else{
        cpu.style.backgroundColor = "#f97316"
    }

    if(((dados.DiscoAcima / (dados.DiscoAcima + dados.DiscoAbaixo)) * 100) < 10){
        disco.style.backgroundColor = "#1FB981"
    }else if(((dados.DiscoAcima / (dados.DiscoAcima + dados.DiscoAbaixo)) * 100) < 20){
        disco.style.backgroundColor = "#fbbf24"
    }else{
        disco.style.backgroundColor = "#f97316"
    }
}