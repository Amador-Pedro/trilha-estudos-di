// Etapa 1: conteúdo. Cada objeto representa um cartão e suas instruções.
const methods = [
  {id:'pomodoro',title:'Pomodoro',category:'Foco',time:'25 min',symbol:'25′',intro:'Divida uma tarefa em blocos de concentração com pausas planejadas.',steps:['Escolha uma tarefa pequena e retire as distrações.','Estude por 25 minutos, ou adapte o intervalo ao seu contexto.','Faça uma pausa de 5 minutos e avalie se precisa de outro bloco.']},
  {id:'recuperacao',title:'Recordação ativa',category:'Memória',time:'15 min',symbol:'Aa',intro:'Tente recuperar o conteúdo antes de consultar suas anotações.',steps:['Leia um trecho e feche o material.','Escreva o que consegue lembrar ou responda a uma pergunta.','Compare com a fonte e revise as lacunas.']},
  {id:'semana',title:'Planejamento semanal',category:'Organização',time:'10 min',symbol:'07',intro:'Transforme entregas grandes em passos que cabem na sua semana.',steps:['Liste as entregas e os prazos reais.','Divida cada entrega em tarefas pequenas.','Reserve horários possíveis e revise o plano ao final da semana.']},
  {id:'feynman',title:'Explique com simplicidade',category:'Memória',time:'20 min',symbol:'“ ”',intro:'Explique um conceito com suas palavras para identificar dúvidas.',steps:['Escolha um conceito e explique como se fosse para um iniciante.','Marque os pontos em que precisou usar termos que não entende.','Pesquise esses pontos e refaça a explicação com exemplos.']},
  {id:'prioridade',title:'Uma prioridade por vez',category:'Foco',time:'5 min',symbol:'01',intro:'Escolha uma ação importante e saiba exatamente por onde começar.',steps:['Liste o que precisa fazer hoje.','Escolha uma tarefa pelo prazo e pela importância.','Defina o primeiro passo e concentre-se nele antes de trocar de atividade.']},
  {id:'revisao',title:'Revisão espaçada',category:'Organização',time:'15 min',symbol:'↻',intro:'Distribua as revisões ao longo dos dias e ajuste os intervalos.',steps:['Separe perguntas sobre o conteúdo estudado.','Agende revisões em dias diferentes em vez de concentrar tudo na véspera.','Revise mais cedo o que esqueceu e aumente o intervalo do que já domina.']}
];

// Etapa 2: persistência local. Falhas de armazenamento não bloqueiam o site.
function read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Preferências continuam válidas nesta sessão. */ } }
const validIds = new Set(methods.map(m => m.id));
function storedIds(key) { const value = read(key, []); return new Set(Array.isArray(value) ? value.filter(id => validIds.has(id)) : []); }
const saved = storedIds('trilha-saved');
const done = storedIds('trilha-done');
let filter = 'Todos';
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const cards = document.querySelector('#cards');

// Etapa 3: apresentação dos cartões e busca combinada com categoria.
function renderCards() {
  const query = normalize(document.querySelector('#busca').value.trim());
  const visible = methods.filter(m => (filter === 'Todos' || (filter === 'Salvos' ? saved.has(m.id) : m.category === filter)) && normalize(`${m.title} ${m.category} ${m.intro}`).includes(query));
  cards.innerHTML = visible.map(m => `<article class="card"><div class="card-top"><span class="card-symbol" aria-hidden="true">${m.symbol}</span><span>${m.category} · ${m.time}</span></div><div class="card-body"><h3>${m.title}</h3><p>${m.intro}</p><div class="card-actions"><button data-details="${m.id}" aria-label="Como usar ${m.title}">Como usar</button><button data-save="${m.id}" aria-label="Salvar ${m.title}" aria-pressed="${saved.has(m.id)}">${saved.has(m.id) ? 'Salvo' : 'Salvar'}</button></div><label class="check-label"><input type="checkbox" data-done="${m.id}" ${done.has(m.id) ? 'checked' : ''}>Já experimentei</label></div></article>`).join('');
  // O conteúdo interpolado acima é fixo no código; a busca nunca vira HTML.
  document.querySelector('#resultados').textContent = visible.length ? `${visible.length} método(s) encontrado(s).` : 'Nenhum método encontrado. Tente outra palavra ou categoria.';
}
function updateProgress() { document.querySelector('#progresso').textContent = `${done.size} de ${methods.length}`; document.querySelector('#barra').value = done.size; }
if (cards) {
  renderCards(); updateProgress();
  document.querySelector('#busca').addEventListener('input', renderCards);
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    renderCards();
  }));
  // Delegação: o contêiner trata os cliques dos cartões recriados pela busca.
  cards.addEventListener('click', event => {
    const saveButton = event.target.closest('[data-save]');
    if (saveButton) {
      const id = saveButton.dataset.save;
      saved.has(id) ? saved.delete(id) : saved.add(id);
      write('trilha-saved', [...saved]);
      if (filter === 'Salvos') { renderCards(); document.querySelector('[data-filter="Salvos"]').focus(); }
      else { saveButton.setAttribute('aria-pressed', String(saved.has(id))); saveButton.textContent = saved.has(id) ? 'Salvo' : 'Salvar'; }
    }
    const detailsButton = event.target.closest('[data-details]');
    if (detailsButton) {
      const m = methods.find(item => item.id === detailsButton.dataset.details);
      document.querySelector('#detail-title').textContent = m.title;
      document.querySelector('#detail-category').textContent = m.category;
      document.querySelector('#detail-intro').textContent = m.intro;
      document.querySelector('#detail-steps').replaceChildren(...m.steps.map(step => { const li = document.createElement('li'); li.textContent = step; return li; }));
      document.querySelector('#details').showModal();
    }
  });
  cards.addEventListener('change', event => {
    const checkbox = event.target.closest('[data-done]');
    if (!checkbox) return;
    checkbox.checked ? done.add(checkbox.dataset.done) : done.delete(checkbox.dataset.done);
    write('trilha-done', [...done]); updateProgress();
  });
  document.querySelector('#details').setAttribute('aria-labelledby','detail-title');
  document.querySelector('#close-dialog').addEventListener('click', () => document.querySelector('#details').close());
}

// Etapa 4: preferências, compartilhadas pelas duas páginas.
let dark = read('trilha-dark', window.matchMedia('(prefers-color-scheme: dark)').matches) === true;
let large = read('trilha-large', false) === true;
function applyPreferences() {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.documentElement.classList.toggle('large', large);
  const theme = document.querySelector('#theme');
  if (theme) { theme.setAttribute('aria-pressed', String(dark)); theme.textContent = dark ? 'Modo claro' : 'Modo escuro'; }
  document.querySelector('#font')?.setAttribute('aria-pressed', String(large));
}
applyPreferences();
document.querySelector('#theme')?.addEventListener('click', () => { dark = !dark; write('trilha-dark', dark); applyPreferences(); });
document.querySelector('#font')?.addEventListener('click', () => { large = !large; write('trilha-large', large); applyPreferences(); });

// Etapa 5: carrossel manual, sem avanço automático ou animação obrigatória.
const slides = [
  {title:'Prepare o espaço. Abra possibilidades.',text:'Deixe por perto apenas o material necessário para o próximo bloco de estudo.',image:'estudo.svg',alt:'Mesa com livros, planta e caderno'},
  {title:'Uma ideia de cada vez.',text:'Transforme um assunto grande em perguntas pequenas que você consegue responder.',image:'ideias.svg',alt:'Cartões organizados em torno de uma lâmpada'},
  {title:'Faça espaço para uma pausa.',text:'Planeje um intervalo entre as atividades e ajuste sua rotina ao que você precisa.',image:'pausa.svg',alt:'Xícara e planta ao lado de uma janela'}
];
let slide = 0;
function showSlide() { const s = slides[slide]; document.querySelector('#slide-title').textContent = s.title; document.querySelector('#slide-text').textContent = s.text; document.querySelector('#slide-count').textContent = `DICA ${slide + 1} DE ${slides.length}`; document.querySelector('#slide-img').src = `${s.image}`; document.querySelector('#slide-img').alt = s.alt; }
if (document.querySelector('#proximo')) { showSlide(); document.querySelector('#proximo').addEventListener('click', () => { slide = (slide + 1) % slides.length; showSlide(); }); document.querySelector('#anterior').addEventListener('click', () => { slide = (slide + slides.length - 1) % slides.length; showSlide(); }); }

// Etapa 6: formulários demonstrativos. Não há rede nem armazenamento dos campos.
document.querySelector('#contact-form')?.addEventListener('submit', event => { event.preventDefault(); const form = event.currentTarget; if (!form.nome.value.trim() || !form.mensagem.value.trim()) { document.querySelector('#contact-status').textContent = 'Preencha nome e mensagem com texto, não apenas espaços.'; return; } document.querySelector('#contact-status').textContent = 'Campos validados. Esta demonstração não envia mensagens.'; });
document.querySelector('#login-form')?.addEventListener('submit', event => { event.preventDefault(); document.querySelector('#login-status').textContent = 'Validação concluída. Esta versão não autentica usuários. Volte para explorar os métodos.'; event.currentTarget.reset(); });
