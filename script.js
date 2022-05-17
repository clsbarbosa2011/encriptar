const inputTexto= document.querySelector(".input-texto");
const mensagem=document.querySelector(".mensagem");


    function btnEncriptar() {
        const textoEncriptado =encriptar(inputTexto.value)
        mensagem.value = textoEncriptado
        document.getElementById("menino").style.display="none";
   }

     function encriptar(stringEncriptada){
         let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i=0; i < matrizCodigo.length ; i++ ) {


         if(stringEncriptada.includes(matrizCodigo[i][0])) {
             stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }  

     }            

       return stringEncriptada

    } 

    function btnDescriptar(){
            const textoDesencriptado = descriptar(inputTexto.value)
            mensagem.value = textoDesencriptado



    }
        function descriptar(stringDesencriptada){
            let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
            stringDesencriptada = stringDesencriptada.toLowerCase();
            document.getElementById("menino").style.display="none";


         for(let i=0 ; i < matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][0])){
                stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            }
        }

        return stringDesencriptada;

    }

     function btnCopiar (){
         let copiado = document.getElementById("idUnica").value;
         document.getElementById("menino").style.display="none";


         if(navigator.clipboard.writeText(copiado)){
             document.getElementById("idBotao").textContent = "Copiado";

         }

         setInterval(function(){
             document.getElementById("idBotao").textContent = "Copiar";},3000);
             console.log(copiado);

          }


        function btnLimpar(){
                mensagem.value= "";
                inputTexto.value="";
                document.getElementById("menino").style.display = "block";
                inputTexto.value="";
                inputTexto.focus();
           }
