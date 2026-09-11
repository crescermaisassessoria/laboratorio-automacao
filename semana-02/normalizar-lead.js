// 1. Objeto com o lead de teste (Contrato JSON)
const lead = {
  nome: "Carlos Eduardo",
  whatsapp: "5543999998888",
  email: "carlos.eduardo@exemplo.com",
  tipo_imovel: "Apartamento 3 quartos",
  orcamento_maximo: 650000,
  prazo_decisao: "30_dias",
  pretende_visitar: true,
  canal_origem: "Meta Ads - Campanha Residencial Aurora"
};

// 2. Validação de campos obrigatórios
const camposObrigatorios = ["nome", "whatsapp", "orcamento_maximo"];
const faltando = [];
for (const campo of camposObrigatorios) {
  if (!lead[campo]) {
    faltando.push(campo);
  }
}

// 3. Função para normalizar telefone (remove caracteres não numéricos)
function normalizarTelefone(numero) {
  return numero.replace(/\D/g, "");
}

// 4. Matriz de Qualificação (Regra de Negócio)
function classificar(lead) {
  if (lead.prazo_decisao === "30_dias" && lead.pretende_visitar) return "quente";
  if (lead.prazo_decisao === "30_dias" || lead.pretende_visitar) return "morno";
  return "frio";
}

// 5. Exibindo os resultados do Lead Completo
console.log("=== TESTE 1: LEAD VÁLIDO ===");
console.log("Lead recebido:", lead.nome);
console.log("Campos faltando:", faltando);
console.log("Telefone normalizado:", normalizarTelefone(lead.whatsapp));
console.log("Classificação:", classificar(lead));

// 6. Teste de Cenário com Erro (Lead sem nome e sem whatsapp)
const leadIncompleto = {
  ...lead,
  nome: undefined,
  whatsapp: ""
};

const faltando2 = [];
for (const campo of camposObrigatorios) {
  if (!leadIncompleto[campo]) {
    faltando2.push(campo);
  }
}

console.log("\n=== TESTE 2: LEAD INCOMPLETO ===");
console.log("Campos faltando (deve acusar nome e whatsapp):", faltando2);
