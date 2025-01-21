let amigos = [];

function adicionarAmigo(){
    let nomeDoAmigoInserido = document.getElementById('amigo').value;
    
    if (nomeDoAmigoInserido.trim() == ""){
        alert('Por favor, insira um nome.')
    }
    else{
        amigos.push(nomeDoAmigoInserido);        
    }

    limparNomeDoAmigoInserido();
    
    mostrarNomesDosAmigos();
}

function limparNomeDoAmigoInserido(){
    let nomeInserido = document.querySelector('input');
    nomeInserido.value = '';
}

function mostrarNomesDosAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    let conteudo = '';

    for (let i = 0; i < amigos.length; i++){
        conteudo += "<li><strong>" + amigos[i] + "</strong></li>";
    }

    listaAmigos.innerHTML = conteudo;
}

function sortearAmigo(){

    let indiceAleatorio;
    
    amigos.length == 0 ? alert('A lista de amigos está vazia') : indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    let amigoSorteado = amigos[indiceAleatorio];

    if (!amigoSorteado){
        return;
    }

    mostrarAmigoSorteado(amigoSorteado);    
}

function mostrarAmigoSorteado(nome){

    listaAmigos.innerHTML = "";
    let nomeSorteado = document.getElementById('resultado');
    nomeSorteado.innerHTML = `<li>O amigo secreto sorteado é: ${nome}</li>`;
}