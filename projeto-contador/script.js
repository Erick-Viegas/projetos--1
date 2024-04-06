function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        window.alert('ERRO!')  
} else {  
res.innerHTML = 'Contando: '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value) //transformando em numero
if (i < f) {
    for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
    } } else {
        for(c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }

} 
}