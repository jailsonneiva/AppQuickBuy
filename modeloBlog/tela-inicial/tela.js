


document.getElementById("texto").focus();
var p = document.createElement("h1");
var txtNode = document.createTextNode("digite - \"tesoura\" ");
p.appendChild(txtNode);

//...........FUNÇÃO REMOVE...................
function remove(){ 
  document.getElementById("botoes").appendChild(p).remove();
  document.querySelector("#p2").innerHTML="";
  document.querySelector("#texto").style.zIndex=1;
  document.getElementById("texto").focus();
}
//...........FUNÇÃO LIST...................
function list(){ 

  var texto= document.getElementById("texto").value.toLowerCase();
  var zIndex = document.getElementById("texto").style.zIndex=0;

 if(texto && texto=="tesoura"){ 
      document.querySelector("#p1").style.display="block";
      document.getElementById("texto").style.zIndex=1; 
      
    }else if(texto && texto!="tesoura"){
      document.getElementById("p2").innerHTML="Inválido";
      zIndex;
      document.getElementById("texto").value=""; 
      document.getElementById("botoes").appendChild(p);
        setTimeout(remove, 3500).remove() 

    }else {
    document.getElementById("p2").innerHTML="Digite alguma coisa";
      zIndex;
      document.getElementById("texto").value="";  
      setTimeout(remove, 3000).remove()   
    }
} 
document.getElementById("btn1").addEventListener("click", list);

// .....FUNÇÃO LIMPAR .....................

function limpar(){    
  document.querySelector("#p2").innerHTML="";
  document.querySelector("#texto").value="";
  document.querySelector("#p1").style.display="none"; 
  document.querySelector("#texto").style.zIndex=1;
  document.getElementById("botoes").appendChild(p).remove();
  document.getElementById("texto").focus();
}
document.getElementById("btn2").addEventListener("click", limpar);



/*
const urlUF = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

window.addEventListener("load", async()=>{
  const request = await fetch(urlUF);
  const response = await request.json();
console.log(response[0].sigla);


})

*/

