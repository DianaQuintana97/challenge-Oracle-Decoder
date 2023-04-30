function validaText(id){
    var text = document.getElementById(id).value;
    const pattern = /([A-Z])|([áéíóúÁÉÍÓÚ])/;
    var valida = pattern.test(text);
    if(valida == false){
        encriptar(text);
        document.getElementById(id).value = "";
    }else{
        document.getElementById(id).value = "";
        alert('El texto ingresado contiene Mayusculas o acentos');
    }
    
}

function encriptar(text){
    var letras = text.split('');
    var textE='',letra='';
    if(text!=''){
        for(var i=0; i<letras.length;i++){
            letra=letras[i];
            console.log(letra)
            if(letra == 'e'){
                textE = textE + 'enter';
            }else if(letra == 'i'){
                textE = textE + 'imes';
            }else if (letra == 'a'){
                textE = textE + 'ai';
            }else if(letra == 'o'){
                textE = textE + 'ober';
            }else if(letra == 'u'){
                textE = textE + 'ufat';
            }else{
                textE = textE + letra;
            }
        }
        console.log(textE);
        document.getElementById("sinText").style.display="none";
        document.getElementById("conText").style.display="block";
        document.getElementById('text_final').innerText=textE;
    }else{
        swal("Espera...", "No has ingresado el texto", "warning", {
            button: "OK!",
          });
        document.getElementById("sinText").style.display="block";
        document.getElementById("conText").style.display="none";
    }
    
}
function copiarAlPortapapeles(id_elemento) {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página
    document.body.removeChild(aux);
  
  }
function desencriptar(id){
    var t=document.getElementById(id).value;
    if(t!=''){
        t= t.replaceAll(/(enter)/g,'e');
        t= t.replaceAll(/(imes)/g,'i');
        t= t.replaceAll(/(ai)/g,'a');
        t= t.replaceAll(/(ober)/g,'o');
        t= t.replaceAll(/(ufat)/g,'u');
        console.log(t);
        document.getElementById("sinText").style.display="none";
        document.getElementById("conText").style.display="block";
        document.getElementById('text_final').innerText=t;
        document.getElementById('text_inicial').value = "";
    }else{
        swal("Espera...", "No has ingresado el texto", "warning", {
            button: "OK!",
          });
          document.getElementById("sinText").style.display="block";
        document.getElementById("conText").style.display="none";
    }
}