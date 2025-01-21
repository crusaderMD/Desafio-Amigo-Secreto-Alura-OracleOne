let amigos = [];

function adicionarAmigo(){
    let nomeDoAmigoInserido = document.getElementById("amigo").value;
    
    if (nomeDoAmigoInserido.trim() == ""){
        alert('Por favor, insira um nome.')
    }
    else{
        amigos.push(nomeDoAmigoInserido);        
    }
    limparNomeDoAmigoInserido();    
}

function limparNomeDoAmigoInserido(){
    nomeDoAmigoInserido = document.querySelector('input');
    nomeDoAmigoInserido.value = '';
}