let historico = [];

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        calcularSomatorio();
    }
}

function calcularSomatorio() {
    const inputNumberElement = document.getElementById('inputNumber');
    const inputNumber = inputNumberElement.value;
    const resultado = somatorioDivisiveis(inputNumber);
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
    
    // Adicionando ao histórico
    adicionarAoHistorico(inputNumber, resultado);
}

function somatorioDivisiveis(num) {
    return Array.from({ length: num - 1 }, (_, index) => index + 1)
        .filter((value) => value % 3 === 0 || value % 5 === 0)
        .reduce((acc, curr) => acc + curr, 0);
}

function adicionarAoHistorico(valorInformado, resultado) {
  const dataHora = new Date().toLocaleString();
  historico.push({ dataHora, valorInformado, resultado });
  atualizarHistorico();
}

// Atualizando o histórico
function atualizarHistorico() {
    const historicoBody = document.getElementById('historicoBody');
    historicoBody.innerHTML = '';
  
    // Reverso para que os resultados mais recentes fiquem no topo
    const historicoReverso = historico.slice().reverse();
  
    for (const item of historicoReverso) {
      const row = historicoBody.insertRow();
      row.insertCell(0).textContent = item.dataHora;
      row.insertCell(1).textContent = item.valorInformado;
      row.insertCell(2).textContent = item.resultado;
    }
  }  

function zerarHistorico() {
  historico = [];
  atualizarHistorico();
}