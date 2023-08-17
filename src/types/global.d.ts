interface TransacaoAPI {
  ["Cliente Novo"]: number;
  Data: string;
  Email: string; 
  ["Forma de Pagamento"]: string;
  ID: number;
  Nome: string;
  Status: string;
  ["Valor (R$)"]: string;
}

interface Transacao {
  "clienteNovo": boolean;
  "data": Date;
  "email": string; 
  "formaDePagamento": string;
  "id": number;
  "nome": string;
  "status": string;
  "valor": number | null;
  "moeda": string;
}