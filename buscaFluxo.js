document.addEventListener('DOMContentLoaded', async () => {
    const listaFluxos = document.getElementById('listaFluxos');

    try {
        const fluxos = await buscarFluxos();
        fluxos.forEach(fluxo => {
            const li = document.createElement('li');
            li.className = "flex justify-between items-center bg-gray-100 p-2 rounded";
            li.innerHTML = `<span>${fluxo.nome} (Blocos: ${fluxo.blocos.length})</span> 
            <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Excluir</button>`;
            listaFluxos.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao carregar fluxos', error);
    }
});
