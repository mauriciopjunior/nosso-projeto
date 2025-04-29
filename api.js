const API_BASE_URL = 'http://localhost:3000/api/fluxos';

async function salvarFluxo(nome, blocos) {
    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, blocos })
        });
        if (!response.ok) throw new Error('Erro ao salvar fluxo');
        return await response.json();
    } catch (error) {
        console.error(error);
        alert('Erro ao salvar fluxo!');
    }
}

async function buscarFluxos() {
    try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) throw new Error('Erro ao buscar fluxos');
        return await response.json();
    } catch (error) {
        console.error(error);
        alert('Erro ao buscar fluxos!');
    }
}

async function salvarNovoFluxo() {
    const nome = document.getElementById('fluxoNome').value;
    if (!nome.trim()) {
        alert('Informe um nome para o fluxo!');
        return;
    }
    await salvarFluxo(nome, []);
    alert('Fluxo salvo!');
    window.location.reload();
}
