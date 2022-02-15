let valor = document.querySelectorAll(".valor");
let numeroDeVoto = document.querySelector(".numeroDeVoto")
let resultadoVoto = document.querySelector(".resultadoVoto")

let votar = document.querySelector(".votar")

let armazena = [0];

function botaoNum(indice) {
  switch (indice) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      if(armazena[0] == 0){
        armazena[0] = armazena.slice(1,armazena.length);
      }
      if(armazena.length >= 2){
        alert("digite apenas 2 dígitos e aperte cancelar para limpar")
        numeroDeVoto.innerHTML = 0;
      }else{
        armazena = armazena +''+  indice;
      }
      break;
    default:
      console.error("erro")
  }
  numeroDeVoto.innerHTML = armazena;
}

function votarPresidente(){
  if(numeroDeVoto.innerHTML == 13){
    resultadoVoto.setAttribute('src', 'https://www.cartacapital.com.br/wp-content/uploads/2021/12/Sem-T%C3%ADtulo-52.jpg');
  }
}

function cancelar(){
  numeroDeVoto.innerHTML = 'nulo';
  armazena=[0];
}

function apagarDigito(){
  var novoValor=0;
  for(let i=0;i<armazena.length;i++){
    novoValor = armazena.slice(0,(armazena.length-1))
  }
    
  numeroDeVoto.innerHTML = novoValor

  armazena = [0]
}