/**
 * Calcula o Holerite
 * @author Ana Caroline Campopiano
 * @since 2026-03-22
 * @version 1.0.0
 **/

function calcularHolerite(event) {
    if (event) event.preventDefault()

    const salario= document.getElementById("bruto").value
    let inss= obterCalculoInss(salario)
    const divInss= document.getElementById("inss")
    divInss.value= "R$ " + inss.replace(".",",")

    let irrf= obterIrrf(salario,inss)
    const divIrrf= document.getElementById("irrf")
    divIrrf.value= "R$ " + irrf.replace(".",",")

    const salarioliquido= document.getElementById("resultadoId")
    const total= salario-inss-irrf
    salarioliquido.textContent= "R$ " + total.toFixed(2).replace(".",",")
}

function limpaformulario(event) {
    if (event) event.preventDefault()
    document.getElementById("bruto").value= ""
    document.getElementById("inss").value="R$ 0,00"
    document.getElementById("irrf").value="R$ 0,00"
    document.getElementById("resultadoId").textContent="R$ 0,00"
    document.getElementById("mensagemisento").textContent=""
}

function obterCalculoInss(salario) {
    let inss = 0
    if (salario <= 1621.00) {
        inss = salario * 0.075;
    } else if (salario <= 2902.84) {
        inss = (1621.00 * 0.075) + 
                ((salario - 1621.00) * 0.09);
    } else if (salario <= 4354.27) {
        inss = (1621.00 * 0.075) + 
                ((2902.84 - 1621.00) * 0.09) + 
                ((salario - 2902.84) * 0.12);
    } else {
        inss = (1621.00 * 0.075) + 
                ((2902.84 - 1621.00) * 0.09) + 
                ((4354.27 - 2902.84) * 0.12) + 
                ((salario - 4354.27) * 0.14);
    }            
    return inss.toFixed(2)
}

function obterIrrf(salariobruto,inss) {
    const baseCalculo= salariobruto-inss
    if (baseCalculo <= 5000) {
        document.getElementById("mensagemisento").textContent= "Você está isento de Imposto de Renda em 2026!"
        return "0"
    } else {
        let excedente= baseCalculo-5000
        excedente= excedente*0.275
        return excedente.toFixed(2)
    }
}