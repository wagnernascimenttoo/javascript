function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML =`Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagem/dia.jpg'
        document.body.style.background = '#394acf'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagem/tarde.jpeg'
        document.body.style.background = '#dda221'
    } else {
        //BOA NOITE!
        img.src = 'imagem/noite.jpg'
        document.body.style.background = '#292c44'
    }
}
