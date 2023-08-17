import Statistics from './modules/Statistics.js';
import FetchUrl from './modules/fetchUrl.js';
import normmalizeTransacao from './modules/normalizeTransacao.js';
function fillTable(transacoes) {
    const table = document.querySelector('#transacoes tbody');
    if (!table)
        return;
    transacoes.forEach(transacao => {
        table.innerHTML += `
    <tr>
      <td>${transacao.nome}</td>
      <td>${transacao.email}</td>
      <td>R$ ${transacao.moeda}</td>
      <td>${transacao.formaDePagamento}</td>
      <td>${transacao.status}</td>
    </tr>
    `;
    });
}
;
function fillList(data, containerId) {
    const containerElement = document.querySelector(containerId);
    if (containerElement) {
        Object.keys(data).forEach(key => {
            containerElement.innerHTML += `<p>${key}: ${data[key]} </p>`;
        });
    }
}
function fillStatistics(transacoes) {
    const estatisticas = new Statistics(transacoes);
    const totalElement = document.querySelector('#total span');
    if (totalElement) {
        totalElement.innerHTML = estatisticas.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }
    fillList(estatisticas.pagamentos, '#pagamento');
    fillList(estatisticas.status, '#status');
    const diaElement = document.querySelector('#dia span');
    if (diaElement) {
        diaElement.innerHTML = estatisticas.melhorDia[0];
    }
}
async function handleData() {
    const data = await FetchUrl('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    const transacoes = data.map(normmalizeTransacao);
    fillTable(transacoes);
    fillStatistics(transacoes);
}
handleData();
//# sourceMappingURL=script.js.map