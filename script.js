const customers = [
  {
    name: "Ana Souza",
    vin: "9BF-RNG25-A82",
    model: "Ranger 2025",
    dealer: "Ford Lapa",
    score: 82,
    leadStatus: "Aguardando",
    action: "Check-up prioritário + Ford Protect",
    warranty: "vence em 5 meses",
    lastService: "62 dias atrasada",
    revenue: 11910,
    reasons: [
      "Revisão obrigatória atrasada",
      "Garantia próxima do fim",
      "Baixa interação com a rede oficial",
      "Modelo com maior criticidade de pós-venda",
    ],
    message:
      "Ana, identificamos um ponto importante de manutenção na sua Ranger. Agende um check-up preventivo na Ford Lapa e preserve sua cobertura.",
    phone: "5511987654321",
    aiPlan: {
      generatedAt: "22 set. 2026 às 09:12",
      confidence: 94,
      tone: "Consultivo, com senso de urgência",
      channel: "WhatsApp",
      bestWindow: "Hoje, entre 17h e 19h",
      actionable: true,
      summary:
        "Ana está no grupo de maior risco de evasão: revisão obrigatória atrasada há 62 dias e garantia vencendo em 5 meses. Ação imediata reduz a chance de ela buscar uma oficina independente.",
      steps: [
        "Reconhecer o vínculo com a Ranger e o histórico de manutenção",
        "Alertar sobre a revisão atrasada sem soar como cobrança",
        "Oferecer 2 horários prioritários com busca e entrega do veículo",
        "Reforçar que a garantia Ford Protect segue válida se a revisão for feita em até 15 dias",
      ],
      whatsappMessage:
        "Oi Ana! Aqui é o assistente Predit da Ford Lapa 👋 Notei que a revisão da sua Ranger está com 62 dias de atraso e sua garantia vence em breve. Posso te ajudar a agendar um horário essa semana, com busca e entrega no seu endereço?",
    },
  },
  {
    name: "Rafael Lima",
    vin: "9BF-BRO24-B74",
    model: "Bronco 2024",
    dealer: "Ford Morumbi",
    score: 74,
    leadStatus: "Aguardando",
    action: "Inspeção preventiva + reserva técnica",
    warranty: "ativa",
    lastService: "8 meses sem passagem",
    revenue: 11910,
    reasons: [
      "Histórico de alerta por modelo",
      "Última passagem há 8 meses",
      "Uso severo informado no app",
    ],
    message:
      "Rafael, sua Bronco está próxima de uma janela recomendada de inspeção. Reserve um horário com prioridade na Ford Morumbi.",
    phone: "5511976543210",
    aiPlan: {
      generatedAt: "22 set. 2026 às 08:47",
      confidence: 88,
      tone: "Direto, focado no uso do veículo",
      channel: "WhatsApp",
      bestWindow: "Amanhã, entre 9h e 11h",
      actionable: true,
      summary:
        "Rafael está há 8 meses sem passar pela rede e informou uso severo no app. Perfil de risco por desgaste acelerado sem inspeção preventiva.",
      steps: [
        "Citar o uso severo informado no app Ford Connect",
        "Explicar o risco de desgaste em itens críticos sem inspeção",
        "Oferecer inspeção preventiva com peça técnica já reservada",
        "Disponibilizar horário de fim de semana para reduzir fricção",
      ],
      whatsappMessage:
        "Rafael, tudo bem? Aqui é o assistente Predit da Ford Morumbi. Vimos que sua Bronco está há 8 meses sem passar por uma inspeção e identificamos uso mais intenso pelo app. Posso reservar um horário com a peça já separada pra você?",
    },
  },
  {
    name: "Marina Costa",
    vin: "9BF-MAV23-C66",
    model: "Maverick 2023",
    dealer: "Ford Campinas",
    score: 66,
    leadStatus: "Aguardando",
    action: "Oferta de revisão + benefício de retorno",
    warranty: "vence em 72 dias",
    lastService: "fora do prazo",
    revenue: 11910,
    reasons: [
      "Garantia próxima do fim",
      "Revisão feita fora do prazo",
      "Cliente sem retorno após campanha anterior",
    ],
    message:
      "Marina, temos uma condição especial para sua próxima revisão na rede Ford. Agende pelo app e acompanhe tudo por aqui.",
    phone: "5519998877665",
    aiPlan: {
      generatedAt: "22 set. 2026 às 10:03",
      confidence: 81,
      tone: "Empático, recuperação de relacionamento",
      channel: "WhatsApp",
      bestWindow: "Hoje, após 18h",
      actionable: true,
      summary:
        "Marina não retornou após a última campanha e está com a revisão fora do prazo e garantia terminando em 72 dias. Precisa de uma abordagem que reconstrua a confiança.",
      steps: [
        "Reconhecer que o último contato não teve retorno, sem soar como cobrança",
        "Oferecer uma condição exclusiva de retorno",
        "Reforçar o prazo da garantia como urgência real, não pressão comercial",
        "Confirmar disponibilidade antes de sugerir horários",
      ],
      whatsappMessage:
        "Oi Marina! Aqui é o assistente Predit da Ford Campinas. Vi que não conseguimos falar com você na última campanha — sem problemas! Sua garantia vence em 72 dias e temos uma condição especial pra próxima revisão. Posso te mostrar as opções?",
    },
  },
  {
    name: "Bruno Martins",
    vin: "9BF-MUS24-D58",
    model: "Mustang 2024",
    dealer: "Ford Morumbi",
    score: 58,
    leadStatus: "Aguardando",
    action: "Convite para revisão premium",
    warranty: "ativa",
    lastService: "próxima do vencimento",
    revenue: 11910,
    reasons: [
      "Baixo engajamento no app",
      "Perfil premium com alto valor de recompra",
      "Última revisão próxima do vencimento",
    ],
    message:
      "Bruno, sua próxima revisão está chegando. A rede Ford pode preparar um atendimento premium para manter seu Mustang em alta performance.",
    phone: "5511965432198",
    aiPlan: {
      generatedAt: "22 set. 2026 às 07:55",
      confidence: 76,
      tone: "Premium, exclusivo",
      channel: "WhatsApp",
      bestWindow: "Hoje, entre 12h e 14h",
      actionable: true,
      summary:
        "Bruno tem baixo engajamento no app, mas alto valor de recompra. A abordagem precisa ser exclusiva para não parecer um lembrete genérico.",
      steps: [
        "Tratar como cliente premium, citando o perfil do Mustang",
        "Oferecer atendimento exclusivo fora do horário comercial padrão",
        "Evitar linguagem de 'lembrete' e focar em experiência",
        "Convidar para um test-drive de um novo lançamento como gancho",
      ],
      whatsappMessage:
        "Bruno, tudo certo? Aqui é o assistente Predit da Ford Morumbi. Preparamos um atendimento exclusivo para o seu Mustang, com horário reservado e sem espera. Quer que eu já separe um horário essa semana?",
    },
  },
  {
    name: "Camila Rocha",
    vin: "9BF-RNG24-E41",
    model: "Ranger 2024",
    dealer: "Ford Lapa",
    score: 41,
    leadStatus: "Monitorar",
    action: "Lembrete preventivo",
    warranty: "ativa",
    lastService: "em dia",
    revenue: 11910,
    reasons: [
      "Revisões em dia",
      "Garantia ativa",
      "Boa interação com concessionária",
    ],
    message:
      "Camila, sua Ranger está com manutenção em dia. Continue acompanhando seus alertas pelo app Ford Connect.",
    phone: "5511991234567",
    aiPlan: {
      generatedAt: "22 set. 2026 às 06:30",
      confidence: 97,
      tone: "Informativo, sem necessidade de ação",
      channel: "App",
      bestWindow: "Não é necessário contato ativo",
      actionable: false,
      summary:
        "Camila está com tudo em dia. O agente recomenda apenas manter as notificações automáticas ativas, sem abordagem direta agora.",
      steps: [
        "Manter lembretes automáticos ativos no app",
        "Nenhuma ação humana necessária neste momento",
        "Reavaliar em 90 dias ou se o score subir acima de 55%",
      ],
      whatsappMessage: "",
    },
  },
  {
    name: "Diego Nunes",
    vin: "9BF-TER25-F63",
    model: "Territory 2025",
    dealer: "Ford Campinas",
    score: 63,
    leadStatus: "Aguardando",
    action: "Contato consultivo de 1ª revisão",
    warranty: "ativa",
    lastService: "primeira revisão próxima",
    revenue: 11910,
    reasons: [
      "Primeiro ciclo de pós-venda",
      "Cliente novo sem vínculo com concessionária",
      "Baixa abertura de notificações",
    ],
    message:
      "Diego, sua primeira revisão está chegando. Agende pelo app e mantenha seu Territory protegido pela rede Ford.",
    phone: "5519987651234",
    aiPlan: {
      generatedAt: "22 set. 2026 às 09:40",
      confidence: 84,
      tone: "Acolhedor, boas-vindas",
      channel: "WhatsApp",
      bestWindow: "Hoje, entre 15h e 17h",
      actionable: true,
      summary:
        "Diego é cliente novo, ainda sem vínculo com a concessionária, e está com baixa abertura de notificações. A primeira revisão é o momento-chave para criar relacionamento.",
      steps: [
        "Dar boas-vindas à rede Ford, sem tom comercial",
        "Explicar a importância da primeira revisão de forma simples",
        "Oferecer atendimento consultivo, apresentando o consultor por nome",
        "Convidar para conhecer o app Ford Connect",
      ],
      whatsappMessage:
        "Oi Diego! Aqui é o assistente Predit da Ford Campinas. Seja bem-vindo à rede Ford! Sua primeira revisão do Territory está próxima e eu posso te ajudar a agendar com um consultor dedicado. Quer que eu já verifique os horários disponíveis?",
    },
  },
];

const campaigns = [
  {
    title: "Pré-viagem",
    description: "Check-up preventivo para clientes com viagem informada no app.",
    audience: "1.240",
    conversion: "18%",
    revenue: "R$ 2,6 mi",
  },
  {
    title: "Garantia em risco",
    description: "Contato ativo antes do fim da cobertura para reduzir evasão.",
    audience: "860",
    conversion: "24%",
    revenue: "R$ 2,4 mi",
  },
  {
    title: "Aniversário do cliente",
    description: "Benefício opt-in para fortalecer relacionamento sem invadir privacidade.",
    audience: "3.180",
    conversion: "9%",
    revenue: "R$ 3,4 mi",
  },
  {
    title: "Retorno pós-atrito",
    description: "Ação consultiva para clientes que enfrentaram espera por peça ou atendimento longo.",
    audience: "420",
    conversion: "31%",
    revenue: "R$ 1,5 mi",
  },
];

const titles = {
  overview: ["Retenção preditiva por VIN", "Identifique clientes em risco e acione a próxima melhor ação."],
  clients: ["Clientes em risco", "Entenda os fatores que explicam a propensão de evasão da rede oficial."],
  leads: ["Leads proativos", "Transforme score em tarefas práticas para a concessionária."],
  campaigns: ["Campanhas inteligentes", "Use contexto e consentimento para criar relacionamento relevante."],
};

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

let selectedVin = customers[0].vin;
let selectedCampaign = 0;

const byId = (id) => document.getElementById(id);

function riskLevel(score) {
  if (score >= 75) return "high";
  if (score >= 55) return "medium";
  return "low";
}

function riskLabel(score) {
  if (score >= 75) return "Alto";
  if (score >= 55) return "Médio";
  return "Baixo";
}

function riskColorVar(level) {
  if (level === "high") return "var(--red)";
  if (level === "medium") return "var(--yellow)";
  return "var(--green)";
}

function filteredCustomers() {
  const dealer = byId("dealerFilter").value;
  const query = byId("searchInput").value.trim().toLowerCase();
  const riskFilter = byId("riskFilter")?.value ?? "all";

  return customers.filter((customer) => {
    const matchesDealer = dealer === "all" || customer.dealer === dealer;
    const haystack = `${customer.name} ${customer.vin} ${customer.model} ${customer.dealer}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    const matchesRisk = riskFilter === "all" || riskLevel(customer.score) === riskFilter;
    return matchesDealer && matchesSearch && matchesRisk;
  });
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

function renderMetrics() {
  const list = filteredCustomers();
  const risky = list.filter((customer) => customer.score >= 55);
  const revenue = risky.reduce((total, customer) => total + customer.revenue, 0);
  const readyLeads = risky.filter((customer) => customer.leadStatus !== "Monitorar").length;

  byId("riskCount").textContent = risky.length;
  byId("leadCount").textContent = readyLeads;
  byId("revenueRisk").textContent = formatter.format(revenue);
  byId("vinShare").textContent = byId("dealerFilter").value === "all" ? "68%" : "64%";
}

function renderRows() {
  const rows = byId("customerRows");
  rows.innerHTML = "";

  filteredCustomers()
    .slice()
    .sort((a, b) => b.score - a.score)
    .forEach((customer) => {
      const row = document.createElement("button");
      row.className = `table-row ${selectedVin === customer.vin ? "selected" : ""}`;
      row.innerHTML = `
        <span><strong>${customer.name}</strong><small>${customer.vin}</small></span>
        <span>${customer.model}</span>
        <span>${customer.dealer}</span>
        <span class="score ${riskLevel(customer.score)}-text">${customer.score}%</span>
        <span>${customer.action}</span>
      `;
      row.addEventListener("click", () => selectCustomer(customer.vin));
      rows.appendChild(row);
    });
}

function selectCustomer(vin) {
  const customer = customers.find((item) => item.vin === vin);
  if (!customer) return;

  selectedVin = vin;
  byId("detailName").textContent = customer.name;
  byId("detailVehicle").textContent = `${customer.model} | ${customer.vin} | ${customer.dealer}`;
  byId("detailScore").textContent = `${customer.score}%`;
  byId("appMessage").textContent = customer.message;

  const ringColor = riskColorVar(riskLevel(customer.score));
  byId("scoreRing").style.background = `conic-gradient(${ringColor} ${customer.score}%, var(--line-strong) 0)`;

  const reasonList = byId("reasonList");
  reasonList.innerHTML = "";
  customer.reasons.forEach((reason) => {
    const item = document.createElement("span");
    item.textContent = reason;
    reasonList.appendChild(item);
  });

  renderAiPlan(customer);
  renderRows();
  renderClientCards();
}

function renderAiPlan(customer) {
  const plan = customer.aiPlan;
  if (!plan) return;

  byId("aiConfidence").textContent = `${plan.confidence}% confiança`;
  byId("aiSummary").textContent = plan.summary;
  byId("aiTone").textContent = plan.tone;
  byId("aiChannel").textContent = plan.channel;
  byId("aiWindow").textContent = plan.bestWindow;
  byId("aiGeneratedAt").textContent = `Gerado por Predit AI em ${plan.generatedAt}`;

  const steps = byId("aiSteps");
  steps.innerHTML = "";
  plan.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    steps.appendChild(item);
  });

  byId("aiWhatsappMessage").textContent =
    plan.whatsappMessage || "Nenhuma abordagem ativa recomendada no momento.";

  const button = byId("startWhatsapp");
  button.disabled = !plan.actionable;
  button.classList.toggle("disabled", !plan.actionable);
  byId("whatsappBtnLabel").textContent = plan.actionable
    ? "Iniciar abordagem no WhatsApp"
    : "Sem ação recomendada agora";
}

function openWhatsappForCustomer(customer) {
  const plan = customer.aiPlan;
  if (!plan?.actionable) {
    showToast(`${customer.name} está com baixo risco: nenhuma abordagem ativa recomendada agora.`);
    return;
  }

  const url = `https://wa.me/${customer.phone}?text=${encodeURIComponent(plan.whatsappMessage)}`;
  window.open(url, "_blank", "noopener");
  showToast(`Agente de IA Predit iniciou abordagem no WhatsApp com ${customer.name}.`);
}

function renderModelBars() {
  const modelGroups = customers.reduce((acc, customer) => {
    const model = customer.model.split(" ")[0];
    acc[model] ??= [];
    acc[model].push(customer.score);
    return acc;
  }, {});

  byId("modelBars").innerHTML = Object.entries(modelGroups)
    .map(([model, scores]) => {
      const avg = Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length);
      const level = riskLevel(avg);
      return `
        <label>${model} <span class="${level}-text">${avg}%</span></label>
        <div><i style="width:${avg}%; background: ${riskColorVar(level)}"></i></div>
      `;
    })
    .join("");
}

function renderClientCards() {
  const grid = byId("clientCards");
  if (!grid) return;
  grid.innerHTML = "";

  filteredCustomers()
    .slice()
    .sort((a, b) => b.score - a.score)
    .forEach((customer) => {
      const card = document.createElement("article");
      card.className = "client-card";
      card.innerHTML = `
        <header>
          <div>
            <h3>${customer.name}</h3>
            <small>${customer.model} | ${customer.dealer}</small>
          </div>
          <span class="risk-tag ${riskLevel(customer.score)}-text">${riskLabel(customer.score)} ${customer.score}%</span>
        </header>
        <dl>
          <div><dt>VIN</dt><dd>${customer.vin}</dd></div>
          <div><dt>Garantia</dt><dd>${customer.warranty}</dd></div>
          <div><dt>Serviço</dt><dd>${customer.lastService}</dd></div>
          <div><dt>Valor em risco</dt><dd>${formatter.format(customer.revenue)}</dd></div>
        </dl>
      `;
      card.addEventListener("click", () => {
        selectCustomer(customer.vin);
        setView("overview");
      });
      grid.appendChild(card);
    });
}

function renderLeads() {
  const list = byId("leadList");
  list.innerHTML = "";
  const leadCustomers = customers.filter((customer) => customer.score >= 55);
  byId("leadStatus").textContent = `${leadCustomers.length} leads aguardando`;

  leadCustomers
    .slice()
    .sort((a, b) => b.score - a.score)
    .forEach((customer) => {
      const card = document.createElement("article");
      card.className = "lead-card";
      card.innerHTML = `
        <div>
          <header>
            <div>
              <h3>${customer.name}</h3>
              <small>${customer.model} | ${customer.vin}</small>
            </div>
            <span class="risk-tag ${riskLevel(customer.score)}-text">${customer.score}%</span>
          </header>
          <p>${customer.action}. Mensagem sugerida: ${customer.message}</p>
        </div>
        <div class="lead-actions">
          <button data-action="app" data-vin="${customer.vin}">Enviar para app</button>
          <button class="whatsapp-action" data-action="whatsapp" data-vin="${customer.vin}">Abordagem no WhatsApp</button>
          <button data-action="schedule" data-vin="${customer.vin}">Criar agendamento</button>
          <button data-action="done" data-vin="${customer.vin}">${customer.leadStatus}</button>
        </div>
      `;
      list.appendChild(card);
    });
}

function renderCampaigns() {
  const list = byId("campaignList");
  list.innerHTML = "";

  campaigns.forEach((campaign, index) => {
    const button = document.createElement("button");
    button.className = `campaign-card ${selectedCampaign === index ? "active" : ""}`;
    button.innerHTML = `<h3>${campaign.title}</h3><p>${campaign.description}</p>`;
    button.addEventListener("click", () => {
      selectedCampaign = index;
      updateSelectedCampaign();
      renderCampaigns();
    });
    list.appendChild(button);
  });

  updateSelectedCampaign();
}

function updateSelectedCampaign() {
  const campaign = campaigns[selectedCampaign];
  byId("campaignTitle").textContent = campaign.title;
  byId("campaignDescription").textContent = campaign.description;
  byId("campaignAudience").textContent = campaign.audience;
  byId("campaignConversion").textContent = campaign.conversion;
  byId("campaignRevenue").textContent = campaign.revenue;
}

function updateImpact(points) {
  const value = 5830000 * points;
  byId("impactValue").textContent = formatter.format(value);
  byId("impactText").textContent = `receita preservada ao recuperar ${points} p.p. de VIN Share.`;

  document.querySelectorAll(".scenario-buttons button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.points) === points);
  });
}

function setView(viewId) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });

  const [title, subtitle] = titles[viewId];
  byId("viewTitle").textContent = title;
  byId("viewSubtitle").textContent = subtitle;
}

function generateLeads() {
  customers.forEach((customer) => {
    if (customer.score >= 55 && customer.leadStatus === "Aguardando") {
      customer.leadStatus = "Pronto";
    }
  });
  renderLeads();
  renderMetrics();
  showToast("Leads priorizados com base no Score Predit.");
}

function renderAll() {
  renderMetrics();
  renderRows();
  renderClientCards();
  renderLeads();
  renderCampaigns();
  renderModelBars();
}

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

byId("dealerFilter").addEventListener("change", renderAll);
byId("searchInput").addEventListener("input", renderAll);
byId("riskFilter").addEventListener("change", renderAll);
byId("generateLeads").addEventListener("click", generateLeads);
byId("activateCampaign").addEventListener("click", () => {
  showToast(`Campanha "${campaigns[selectedCampaign].title}" ativada como piloto.`);
});

byId("startWhatsapp").addEventListener("click", () => {
  const customer = customers.find((item) => item.vin === selectedVin);
  if (customer) openWhatsappForCustomer(customer);
});

document.querySelectorAll(".scenario-buttons button").forEach((button) => {
  button.addEventListener("click", () => updateImpact(Number(button.dataset.points)));
});

byId("leadList").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const customer = customers.find((item) => item.vin === button.dataset.vin);
  if (!customer) return;

  if (button.dataset.action === "app") {
    showToast(`Mensagem enviada para o app de ${customer.name}.`);
  }
  if (button.dataset.action === "whatsapp") {
    openWhatsappForCustomer(customer);
  }
  if (button.dataset.action === "schedule") {
    showToast(`Pré-agendamento criado para ${customer.dealer}.`);
  }
  if (button.dataset.action === "done") {
    customer.leadStatus = customer.leadStatus === "Concluído" ? "Pronto" : "Concluído";
    renderLeads();
    showToast(`Lead de ${customer.name} atualizado para ${customer.leadStatus}.`);
  }
});

renderAll();
selectCustomer(selectedVin);
