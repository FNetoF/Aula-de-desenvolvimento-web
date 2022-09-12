const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const resultado = document.getElementById('resultado')

function somar() {
    resultado.innerHTML = parseInt(n1.value) +  parseInt(n2.value)

    if ( n1.value === '' && n2.value === '' ) {
        return resultado.innerHTML = `Informe os numeros nos campos`
    }
    else if ( n1.value === '' || n2.value === '' ) {
        return resultado.innerHTML = `Informe um numero em um dos campos`
    }
    else {
        return resultado.innerHTML = `${n1.value} + ${n2.value} = ${resultado.innerHTML}`
    }
}

function subtrair() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)

    if ( n1.value === '' && n2.value === '' ) {
        return resultado.innerHTML = `Informe os numeros nos campos`
    }
    else if ( n1.value === '' || n2.value === '' ) {
        return resultado.innerHTML = `Informe um numero em um dos campos`
    }
    else {
        return resultado.innerHTML = `${n1.value} - ${n2.value} = ${resultado.innerHTML}`
    }
}

function multiplicar() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)

    if ( n1.value === '' && n2.value === '' ) {
        return resultado.innerHTML = `Informe os numeros nos campos`
    }
    else if ( n1.value === '' || n2.value === '' ) {
        return resultado.innerHTML = `Informe um numero em um dos campos`
    }
    else {
        return resultado.innerHTML = `${n1.value} * ${n2.value} = ${resultado.innerHTML}`
    }
}

function dividir() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)

    if ( n1.value === '' && n2.value === '' ) {
        return resultado.innerHTML = `Informe os numeros nos campos`
    }
    else if ( n1.value === '' || n2.value === '' ) {
        return resultado.innerHTML = `Informe um numero em um dos campos`
    }
    else {
        return resultado.innerHTML = `${n1.value} / ${n2.value} = ${resultado.innerHTML}`
    }
}
