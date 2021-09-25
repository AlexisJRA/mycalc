var operandoa;
var operandob;
var operandoc;

function init(){
    var resultado =document.getElementById("resultado");
    var siete =document.getElementById("siete");
    var ocho =document.getElementById("ocho");
    var div =document.getElementById("div");
    var cuatro =document.getElementById("cuatro");
    var cinco =document.getElementById("cinco");
    var seis =document.getElementById("seis");
    var mult =document.getElementById("mult");
    var uno =document.getElementById("uno");
    var dos =document.getElementById("dos");
    var tre =document.getElementById("tres");
    var res =document.getElementById("res");
    var del =document.getElementById("del");
    var cero =document.getElementById("cero");
    var sum =document.getElementById("sum");
    var resu =document.getElementById("resu");
    
    uno.onclick=function(e){
        resultado.textContent=resultado.textContent+"1"
    }
    dos.onclick=function(e){
        resultado.textContent=resultado.textContent+"2"
    }
    tres.onclick=function(e){
        resultado.textContent=resultado.textContent+"3"
    }
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent+"4"
    }
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent+"5"
    }
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent+"6"
    }
    siete.onclick=function(e){
        resultado.textContent=resultado.textContent+"7"
    }
    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent+"8"
    }
    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent+"9"
    }
    cero.onclick=function(e){
        resultado.textContent=resultado.textContent+"0"
    }
    del.onclick=function(e){
        del();
    }
    sum.onclick=function(e){
        operandoa=resultado.textContent;
        operandoc="+";
        limpiar();
    }
    res.onclick=function(e){
        operandoa=resultado.textContent;
        operandoc="-";
        limpiar();
    }
    mult.onclick=function(e){
        operandoa=resultado.textContent;
        operandoc="*";
        limpiar();
    }
    div.onclick=function(e){
        operandoa=resultado.textContent;
        operandoc="/";
        limpiar();
    }
    resu.onclick=function(e){
        operandob=resultado.textContent;
        resolver();
    }

}

function limpiar(){
    resultado.textContent="";
}

function del(){
    resultado.textContent="";
    operandoa=0;
    operandob=0;
    operandoc="";
}

function resolver(){
    var res = 0;
    switch(operandoc){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    del();
    resultado.textContent = res;
  }