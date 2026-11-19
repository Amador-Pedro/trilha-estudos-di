# Trilha — organização de estudos

Primeira versão do projeto de Desenvolvimento de Interfaces, 2º semestre de 2026. O site permite explorar métodos de estudo, salvar favoritos e marcar os métodos experimentados. É um protótipo acadêmico desenvolvido com apoio de IA; não oferece autenticação real ou envio de mensagens.

**[Abrir o site publicado](https://amador-pedro.github.io/trilha-estudos-di/)** · [Código no GitHub](https://github.com/Amador-Pedro/trilha-estudos-di)

O repositório inclui o relatório parcial em PDF e Word, `APRESENTACAO.md`, `ENTENDA-O-CODIGO.md`, `TESTES.md` e `USO-DE-IA.md`. O PDF foi renderizado e inspecionado. A versão Word é editável; sua paginação não pôde ser conferida neste ambiente. Preencha nome e RA antes de entregar o relatório. A Parte C precisa ser escrita pessoalmente.

## Executar

Abra `index.html` no navegador. Não é necessário instalar pacotes. Para uma origem local estável e persistência previsível, execute `python -m http.server 8000` nesta pasta (se tiver Python instalado) e abra `http://localhost:8000`. O armazenamento ao abrir arquivos diretamente pode variar entre navegadores.

## Arquivos e responsabilidades

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura semântica, seções, busca, formulário, acessibilidade e diálogo |
| `login.html` | Interface de login demonstrativa, sem autenticação |
| `style.css` | Paletas, tipografia, componentes, foco e adaptação a telas menores |
| `app.js` | Conteúdo, busca, filtros, favoritos, progresso, carrossel e eventos |
| `*.svg` | Três ilustrações locais criadas para este projeto |
| `*.md` | Explicação do código, apresentação, testes e registro de IA |

## Construção passo a passo

1. Ler o enunciado e separar requisitos da versão parcial e do relatório final.
2. Escolher o tema de organização de estudos e o público de estudantes que precisam planejar a rotina.
3. Definir a tarefa principal: encontrar um método, entender como usar e experimentar.
4. Estruturar o HTML com `header`, `nav`, `main`, `section`, `article` e `footer`; associar rótulos aos campos.
5. Definir cores em propriedades CSS para trocar o tema sem duplicar componentes.
6. Montar o layout responsivo com Grid, Flexbox e consultas de mídia.
7. Representar os métodos em uma lista de objetos JavaScript.
8. Renderizar os cartões e combinar busca textual com filtros de categoria.
9. Usar conjuntos (`Set`) para favoritos e concluídos, evitando duplicatas; salvar apenas identificadores e preferências no `localStorage`.
10. Implementar diálogo nativo com instruções, carrossel manual e validação dos formulários.
11. Conferir sintaxe, cálculos de contraste e interação no navegador; registrar as limitações em vez de declarar conformidade total.
12. Publicar no GitHub e manter novos commits a cada mudança entendida e validada.

As etapas descrevem a organização do desenvolvimento com IA. Não representam sessões de estudo já realizadas pelo aluno nem versões históricas inventadas.

## Recursos da versão 0.1

- Seis cartões explicativos com instruções em diálogo.
- Campo de pesquisa com normalização de acentos e categorias selecionáveis.
- Favoritos e métodos experimentados com persistência local.
- Barra de progresso, imagens locais em carrossel manual e rodapé.
- Tema claro/escuro e fonte ampliada com preferências persistidas.
- Contato com validação e página de login demonstrativa.
- Link para pular conteúdo, foco visível, operação por teclado e respeito à preferência de movimento reduzido.

As categorias são botões de filtro com `aria-pressed`. Não se usa `role=tab`, pois não há painéis de abas independentes. Elas atendem à navegação por categorias da busca; se o professor exigir abas ARIA literais, esse refinamento deve ser confirmado para a próxima versão.

## Limitações reais

Não há backend, banco de dados, sessão, recuperação de senha, envio de e-mail ou sincronização entre dispositivos. O login apenas valida formato e tamanho dos campos. O contato confirma validação, sem simular envio. As informações dos formulários não são armazenadas. Limpar os dados do navegador apaga favoritos e progresso. A persistência pode ser bloqueada pelo navegador; nesse caso, o estado funciona apenas durante o uso atual. Os métodos são sugestões introdutórias, sem promessa de resultado acadêmico.

## Publicação pelo GitHub Pages

Depois que os arquivos estiverem na raiz do repositório, abra **Settings → Pages → Build and deployment**, escolha **Deploy from a branch**, selecione **main** e **/(root)** e salve. Aguarde o deploy e use o endereço informado pelo GitHub. Um repositório de código e um site publicado são entregas diferentes: só considere o site no ar após verificar o endereço.

## Continuidade incremental com IA

Leia `ENTENDA-O-CODIGO.md`. Antes de pedir uma alteração, explique o comportamento atual com suas palavras. Peça uma mudança pequena, leia o diff e teste um caso de sucesso e um de falha. Faça commit apenas depois de compreender o resultado. Não declare que escreveu sozinho ou que entende código que ainda não estudou.

## Referências

- [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C — contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Nielsen Norman Group — dez heurísticas](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Elliot (2015) — revisão sobre cor e funcionamento psicológico](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2015.00368/full)
- [MDN — documentação de HTML, CSS e JavaScript](https://developer.mozilla.org/pt-BR/docs/Web)
- [GitHub — configuração do Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

Pesquisa realizada em 19/11/2026. IA utilizada: assistente Codex, da OpenAI, para planejamento, geração de código, documentação e apoio à verificação. O aluno deve revisar o material e escrever pessoalmente a redação da Parte C, conforme o enunciado.
