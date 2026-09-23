Predit Dashboard
================

Este MVP demonstra a visao Ford/concessionaria da solucao Predit: um
sistema de retencao preditiva que identifica clientes com risco de
migrar para a rede independente e sugere a proxima melhor acao para
cada um deles.

Como abrir
----------
Nao precisa de servidor nem instalacao. Basta abrir o arquivo
index.html direto no navegador (duplo clique ou "Abrir com" > Chrome/
Edge/Firefox). Todo o dashboard roda em HTML/CSS/JS puro, sem backend.

Estrutura de telas (menu lateral)
----------------------------------
- Visao geral: fila de clientes ordenada por risco de evasao, com o
  caso selecionado detalhado ao lado (score, motivos e plano de
  abordagem gerado por IA). Traz tambem o risco medio por modelo e a
  simulacao de impacto financeiro da recuperacao de VIN Share.
- Clientes em risco: todos os clientes em formato de cards, com filtro
  por nivel de risco (alto/medio/baixo).
- Leads proativos: fila de tarefas praticas para a concessionaria,
  com acoes rapidas por cliente (enviar para app, abordar no
  WhatsApp, criar agendamento, concluir lead).
- Campanhas: exemplos de campanhas de relacionamento com consentimento
  do cliente (pre-viagem, garantia em risco, aniversario, retorno
  pos-atrito).

Filtros e busca (topo da tela)
-------------------------------
- Busca por nome do cliente, VIN ou modelo.
- Filtro por concessionaria (Ford Lapa, Morumbi, Campinas).
- Filtro por nivel de risco (somente na tela "Clientes em risco").
- Botao "Gerar leads": promove os clientes com score >= 55% de
  "Aguardando" para "Pronto" na fila de leads.

Como testar o plano de abordagem gerado por IA
------------------------------------------------
1. Va em "Visao geral" e clique em qualquer linha da tabela (ou em um
   card na tela "Clientes em risco").
2. No painel "Caso selecionado", role ate o card "Analise Predit AI".
   Ele mostra: nivel de confianca, tom recomendado, canal, melhor
   horario de contato, passos sugeridos e a mensagem pronta para
   WhatsApp.
3. Compare clientes diferentes: a Camila Rocha (baixo risco) mostra
   como a IA recomenda "nenhuma acao agora" e desabilita o botao de
   WhatsApp - os demais (risco medio/alto) tem plano ativo.

IMPORTANTE: esse plano e todo pre-escrito nos dados de cada cliente
(script.js), nao e gerado por um modelo de IA em tempo real. E uma
simulacao para demonstrar a experiencia do produto; em producao, o
texto seria gerado por um agente de IA a partir do historico real do
cliente (revisoes, garantia, CRM, uso do app, dados do veiculo).

Como testar o botao "Iniciar abordagem no WhatsApp"
------------------------------------------------------
Aparece em dois lugares: no painel de detalhe (Visao geral) e em cada
card da tela "Leads proativos". Ao clicar:
1. Abre uma nova aba do WhatsApp Web/App (link wa.me) com o numero do
   cliente e a mensagem sugerida ja preenchida no campo de texto.
2. Mostra um aviso confirmando que a "abordagem foi iniciada".

IMPORTANTE: o botao so abre a conversa com a mensagem pronta - quem
envia e uma pessoa (consultor da concessionaria), nao um robo. Os
numeros de telefone tambem sao fake, criados so para a demo. Nao
existe, hoje, nenhum agente de IA conversando de fato com o cliente
pelo WhatsApp; isso exigiria integracao com a WhatsApp Business
Platform (API oficial da Meta) e um backend rodando o modelo de IA.

Estrutura de arquivos
----------------------
- index.html   -> estrutura das telas e componentes
- styles.css   -> tema visual (dark, estilo enterprise SaaS)
- script.js    -> dados mockados dos clientes/campanhas e toda a logica
- assets/      -> logo Predit

Observacao para apresentacao
-------------------------------
Todos os dados (clientes, scores, planos de IA, campanhas) sao
simulados para provar a logica do produto. Em producao, a base seria
alimentada por historico de revisoes, garantia, CRM, estoque de
pecas, interacoes no app e dados de veiculos conectados.
