import countBy from './countBy.js';

type TransacaoValor = Transacao & { valor: number };

function checkValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Statistics {
  private transacoes;
  total;
  pagamentos;
  status;
  semana;
  melhorDia;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamentos = this.setPagamentos();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
  }

  private setTotal() {
    return this.transacoes.filter(checkValor).reduce((acc, curr) => {
      return acc + curr.valor;
    }, 0);
  }

  private setPagamentos() {
    const pagamentos = this.transacoes.map(
      ({ formaDePagamento }) => formaDePagamento
    );
    return countBy(pagamentos);
  }

  private setStatus() {
    const status = this.transacoes.map(({ status }) => status);
    return countBy(status);
  }

  private setSemana() {
    const semana = {
      domingo: 0,
      segunda: 0,
      terca: 0,
      quarta: 0,
      quinta: 0,
      sexta: 0,
      sabado: 0,
    }
    const dates = this.transacoes.map(({data}) => data)
    dates.forEach(date => {
      if(date.getDay() === 0) semana.domingo += 1;
      if(date.getDay() === 1) semana.segunda += 1;
      if(date.getDay() === 2) semana.terca += 1;
      if(date.getDay() === 3) semana.quarta += 1;
      if(date.getDay() === 4) semana.quinta += 1;
      if(date.getDay() === 5) semana.sexta += 1;
      if(date.getDay() === 6) semana.sabado += 1;
    })
    return semana
  }

  private setMelhorDia() {
    return Object.entries(this.semana).sort((a, b) => b[1] - a[1])[0];
  }
}
