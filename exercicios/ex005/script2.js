function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //CRIANCA
                img.setAttribute('src', 'imagem/bebemas.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagem/jovemmasc.png')
            } else if (idade < 50) {
                //ADULTO 
                img.setAttribute('src', 'imagem/adultomasc.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagem/idosomasc.png') 
            }
                
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //CRIANCA
                img.setAttribute('src', 'imagem/bebefem.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagem/jovemfem.png')
            } else if (idade < 50) {
                //ADULTO 
                img.setAttribute('src', 'imagem/adultofem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagem/idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}