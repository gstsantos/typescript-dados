import moedaParaNumber from "./moedaParaNumber.js";
import stringToDate from "./stringToDate.js";
export default function normmalizeTransacao(transacao) {
    return {
        "clienteNovo": Boolean(transacao["Cliente Novo"]),
        "data": stringToDate(transacao.Data),
        "email": transacao.Email,
        "formaDePagamento": transacao["Forma de Pagamento"],
        "id": transacao.ID,
        "nome": transacao.Nome,
        "status": transacao.Status,
        "valor": moedaParaNumber(transacao["Valor (R$)"]),
        "moeda": transacao["Valor (R$)"],
    };
}
//# sourceMappingURL=normalizeTransacao.js.map