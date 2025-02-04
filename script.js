
const pacotes = [];

function gerarPacote() {
    const pacote = {
        origem: '192.168.0.1',
        destino: '192.168.0.2',
        dados: 'Pacote Gerado',
        timestamp: new Date().toLocaleDateString()
    };

    pacotes.push(pacote);
    mostrarPacotes();
}

function mostrarPacotes() {
    const lista = document.getElementById('pacotes');
    lista.innerHTML = '';
    pacotes.forEach(pacote => {
        const item = document.createElement('li');
        item.innerHTML = `Origem: ${pacote.origem} <br> Destino: ${pacote.destino} <br> Dados: ${pacote.dados} <br> Timestamp: ${pacote.timestamp}`;
        lista.appendChild(item);
    });
}

function resize(){
    const geral = document.getElementById('geral');
    geral.style.maxHeight = '430px';
    geral.style.overflowY = 'auto';
}

resize()

