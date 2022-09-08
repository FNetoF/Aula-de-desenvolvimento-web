const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const resultado = document.getElementById('resultado')

function somar() {
    resultado.innerHTML = parseInt(n1.value) +  parseInt(n2.value)
}

function subtrair() {
    resultado.innerHTML = parseInt(n1.value) -  parseInt(n2.value)
}

function multiplicar() {
    resultado.innerHTML = parseInt(n1.value) *  parseInt(n2.value)
}

function dividir() {
    resultado.innerHTML = parseInt(n1.value) /  parseInt(n2.value)
}
