

document.getElementById("texto").focus();

var p = document.createElement("h2");
var txtNode = document.createTextNode("digite - \' tesoura \' ");
p.appendChild(txtNode);

function estilo(){
  p.style.backgroundColor="blue"
  p.style.backgroundColor="blue";
  p.style.padding="7px 20px";  
  p.style.margin="20px auto 0";
  p.style.fontSize="clamp(1.4rem, 3vw, 1.6rem)";
  p.style.color="#f5ff6d";
}


//...........FUNÇÃO REMOVE...................
function remover(){ 
  document.getElementById("botoes").appendChild(p).remove();
  document.querySelector("#p2").innerHTML="";
  document.getElementById("p2").innerHTML="";
  document.querySelector("#texto").style.zIndex=1;
  document.getElementById("texto").focus();
  document.querySelector("#p1").style.display="none";
  document.querySelector("Option").innerHTML="";
  document.querySelector("#texto").value="";
}

//...........FUNÇÃO LOJAS...................

function lojas(){ 
  var texto = document.getElementById("texto").value.toLowerCase();
  
  if (texto && texto=="tesoura") { 
     document.querySelector("#p1").style.display="block";
     document.getElementById("form-input").reset();
     document.querySelector("#p2").innerHTML="";
     document.getElementById("texto").focus();
     document.getElementById("p2").style.display="none";
     document.getElementById("texto").style.zIndex=1;

  } else if (texto && texto!="tesoura") {
     document.getElementById("p2").innerHTML="Inválido";
     document.getElementById("texto").style.zIndex=0;
     document.querySelector("#p1").style.display="none";
     document.getElementById("form-input").reset(); 
     document.getElementById("botoes").appendChild(p);
     estilo()
     setTimeout(remover, 2000).remove() 
     estilo();
     document.querySelector("#texto").value="";
     setTimeout(remover, 2000).remove(); 

  } else {     
     document.getElementById("p2").innerHTML="Digite alguma coisa"; 
     document.getElementById("texto").style.zIndex=0;
    setTimeout(remover, 1500).remove();   
    }   
} 
document.getElementById("btn1").addEventListener("click", lojas);

/*
//.........FUNÇÃO ENTER..................
lojas().addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("btn1").click();
  } 
});
*/

// .....FUNÇÃO LIMPAR .....................

function limpar(){    
  document.querySelector("#p2").innerHTML="";
  document.getElementById("form-input").reset();
  document.querySelector("#p1").style.display="none"; 
  document.querySelector("#texto").value="";
  document.getElementById("botoes").appendChild(p).remove();
  document.getElementById("texto").focus();
}
document.getElementById("btn2").addEventListener("click", limpar);

