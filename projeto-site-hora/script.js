function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')


 var data = new Date()
 var hora = data.getHours()
 var minuto = data.getMinutes()
 var segundo = data.getSeconds()
 setInterval(carregar, 1000)
 
msg.innerHTML = `Agora são ${hora} Horas ${minuto} minutos e ${segundo} segundos no horário de Brasília`

if (hora >= 5 && hora <= 11) {
 img.src = 'imagens/manhã.jpg'
 document.body.style.background = '#ff8000'
 img.style.width = '375px'
} else if (hora >= 12 && hora <= 17) {
 img.src = 'imagens/tarde.webp'
 document.body.style.background = '#fff71c'
 img.style.width = '375px'
} else {
 img.src = 'imagens/noite.jpg'
 document.body.style.background = '#0b0034'
 img.style.width = '375px'

} 

if (hora >= 5 && hora <= 11) {
var dia = window.document.getElementById('manha')
dia.innerHTML = "Bom dia!"

 }
if (hora >= 12 && hora <= 17) {
    var dia = window.document.getElementById('tarde')
    dia.innerHTML = "Boa tarde!"
    
}
if (hora >= 18 && hora <= 23) {
    var dia = window.document.getElementById('noite')
    dia.innerHTML = "Boa noite!"
   
}
}
