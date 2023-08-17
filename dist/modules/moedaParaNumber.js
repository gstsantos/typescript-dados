export default function moedaParaNumber(moeda) {
    const number = Number(moeda.replaceAll('.', '').replace(',', '.'));
    return isNaN(number) ? null : number;
}
//# sourceMappingURL=moedaParaNumber.js.map