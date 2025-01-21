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
    
    mostrarNomesAmigos();

}

function limparNomeDoAmigoInserido(){
    nomeDoAmigoInserido = document.querySelector('input');
    nomeDoAmigoInserido.value = '';
}

function mostrarNomesAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');

    let conteudo = '';

    for (let i = 0; i < amigos.length; i++){
        conteudo += "<li><strong>" + amigos[i] + "</strong></li>";
    }

    listaAmigos.innerHTML = conteudo;
}