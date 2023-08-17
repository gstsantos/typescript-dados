/**
 * Recebe string '1.200,50' retorna number: 1200.50
 */

export default function moedaParaNumber(moeda: string):number | null {
  const number = Number(moeda.replaceAll('.', '').replace(',', '.'));
  return isNaN(number) ? null : number;
}