//função entrar

function entrar(){
      
    var area =document.getElementById('area');
    var texto =prompt('Digite seu nome');

    if (texto == null || texto == ''){
        alert("Digite seu nome novamente...");
        area.innerHTML='Bem Vindo...';
    }else{ 
        area.innerHTML='Bem Vindo: '+texto;
    }
}

function entrar2(nome){
    var area2 = document.getElementById('area2');
    var texto2 = prompt('Digite seu sobrenome');

        area2.innerHTML = nome +' '+ texto2;
}