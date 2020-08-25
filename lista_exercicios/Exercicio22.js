function Pagamento(mes, pago){
    if(mes == 1){
        return pago
    } else {
       return pago * (1 + 0.05) ** mes
    }
}

console.log(Pagamento(1, 200).toFixed(2))
console.log(Pagamento(2, 200).toFixed(2))
console.log(Pagamento(3, 200).toFixed(2))
console.log(Pagamento(4, 200).toFixed(2))
console.log(Pagamento(5, 200).toFixed(2))
console.log(Pagamento(6, 200).toFixed(2))