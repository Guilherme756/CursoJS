var agora = new Date() // new date() para advinhar a hora exata do nosso relogio
var hora = agora.getHours() // gett.hours() para advinhar a hora exata do nosso relogio
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}