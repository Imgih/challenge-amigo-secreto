let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    nomeInput.value = ""; // Limpa o campo de entrada
    atualizarLista();
    document.getElementById("listaAmigos").style.display = "block";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").textContent = `Amigo Secreto: ${amigoSorteado}`;
    document.getElementById("listaAmigos").style.display = "none"; 
    document.getElementById("botaoNovoSorteio").style.display = "block"; 
}

function novoSorteio() {
    amigos = []; 
    atualizarLista(); 
    
    document.getElementById("resultado").textContent = ""; 
    document.getElementById("botaoNovoSorteio").style.display = "none"; 
    document.getElementById("listaAmigos").style.display = "block"; 
    document.getElementById("amigo").value = ""; 
}
