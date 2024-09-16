
const pacotes = [];

function gerarPacote() {
    const pacote = {
        origem: '192.168.0.1',
        destino: '192.168.0.2',
        dados: 'Mensagem de teste',
        timestamp: new Date().toISOString()
    };

    pacotes.push(pacote);
    mostrarPacotes();
}

function mostrarPacotes() {
    const lista = document.getElementById('pacotes');
    lista.innerHTML = '';
    pacotes.forEach(p => {
        const item = document.createElement('li');
        item.textContent = `Origem: ${p.origem}, Destino: ${p.destino}, Dados: ${p.dados}, Timestamp: ${p.timestamp}`;
        lista.appendChild(item);
    });
}
