function verificar(){
    var data = new Date()
    
    var ano = data.getFullYear()
    
    var fano = document.getElementById("txtano")
    
    var res = document.querySelector("#res")
    
    if(fano.value.length == 0 || fano.value >= ano ){
        alert("verifique os dados e tente novamente")
    } else{
        var fsex = document.getElementsByName("radsex")
        
        var idade = ano - Number(fano.value)
        
        var genero = ""
        
        var img = document.createElement(`img`)
        
        img.setAttribute("id" ,"foto" )
        if(fsex[0].checked){
            genero = 'homem'
            
            if( idade < 15){
                //criança
                img.setAttribute('src' , 'criançam.jfif')
                

            } else if( idade <= 25){
                //jovem
                img.setAttribute('src' , 'jovemm.jpg')
                
            }else if (idade<50){
                //adulto
                img.setAttribute('src', 'adultom.jpeg' )

            
            }else{
                //idoso
                img.setAttribute('src' , 'idosom.jpeg')
                
            }
        }else if(fsex[1].checked){
            genero="mulher"
            
            if(idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src' , 'bebef.jpg')
            
            } else if( idade <= 25){
                //jovem
                img.setAttribute('src' , 'jovemf.jpg')
            
            }else if (idade<50){
                //adulto
                img.setAttribute('src' , 'adultof.jpeg')
            
            }else{
                //idoso
                img.setAttribute('src' , 'idosof.jpeg')
            }
        }
        res.style.texteAlign="center"
        res.innerHTML=`detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }


}