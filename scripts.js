function atualizarMonitor() {
    // 1. Captura de dados
    const prod = parseFloat(document.getElementById('producao').value);
    const pres = parseFloat(document.getElementById('mata').value);
    
    // Elementos para atualizar
    const txtProd = document.getElementById('txtProducao');
    const txtPres = document.getElementById('txtPreservacao');
    const msgStatus = document.getElementById('mensagemStatus');
    const cardPres = document.getElementById('cardPreservacao');

    // Validação simples
    if (isNaN(prod) || isNaN(pres)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // 2. Atualização dos Cards
    txtProd.innerText = prod + " Hectares";
    txtPres.innerText = pres + " Hectares";

    // 3. Lógica de Equilíbrio (Sustentabilidade)
    const total = prod + pres;
    const percPreservacao = (pres / total) * 100;

    if (percPreservacao >= 20) {
        msgStatus.innerText = "Sustentabilidade em Dia! Futuro Garantido. 🌱";
        msgStatus.className = "status-box sucesso";
        cardPres.className = "card sucesso";
    } else {
        msgStatus.innerText = "Alerta: Baixa preservação! Precisa de mais equilíbrio. ⚠️";
        msgStatus.className = "status-box alerta";
        cardPres.className = "card alerta";
    }
}
