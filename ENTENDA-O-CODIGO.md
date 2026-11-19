# Entenda o código antes de apresentar

## Como uma interação percorre o projeto

O HTML cria o campo `#busca`. O JavaScript registra nele um evento `input`. Quando você digita, o evento chama `renderCards()`. A função lê o texto, normaliza acentos, filtra a lista `methods` e atualiza o contêiner `#cards`. O CSS aplica a mesma aparência a cada novo cartão. Não existe consulta a servidor.

## HTML

`lang="pt-BR"` informa o idioma. `meta viewport` permite dimensionamento adequado no celular. O script tem `defer`, então é executado depois que o HTML foi analisado. Os títulos organizam a hierarquia e os rótulos `label` associam nome e campo por `for` e `id`.

O diálogo usa `showModal()` e `close()`: o navegador gerencia sua modalidade e o fechamento com Escape. `aria-labelledby` o associa ao título. O carrossel usa botões nativos e anuncia a nova dica com `aria-live="polite"`. Os botões de filtro informam a seleção com `aria-pressed`.

## CSS

As variáveis em `:root` definem fundo, texto, destaque e bordas. O seletor `[data-theme=dark]` substitui os valores; os componentes continuam usando `var(--text)`, por exemplo. A classe `large` muda o tamanho raiz de 16 para 20 pixels, aumentando medidas em `rem`.

Grid organiza colunas. As consultas `@media` reduzem as colunas em telas menores. `:focus-visible` mostra onde está o foco do teclado. A rolagem suave e o movimento no hover só são aplicados quando o usuário não pede redução de movimento.

## JavaScript por blocos

1. `methods`: lista de objetos. Cada objeto tem identificador, título, categoria, duração, resumo e passos.
2. `read` e `write`: convertem dados entre texto JSON e valores JavaScript. O `try/catch` evita travar o site se o armazenamento estiver indisponível.
3. `storedIds`: aceita apenas uma lista e remove identificadores desconhecidos. `Set` impede salvar o mesmo método duas vezes.
4. `normalize`: remove marcas de acento e converte letras para minúsculas. Assim, "memoria" encontra "Memória".
5. `filter`: guarda a categoria atual. `renderCards` usa `filter` da lista para combinar categoria e palavra pesquisada. `map` transforma os métodos encontrados em cartões.
6. `cards.addEventListener`: usa delegação de eventos. O clique sobe do botão até o contêiner; `closest` identifica qual ação foi solicitada. Isso continua funcionando depois que os cartões são recriados.
7. `saved` e `done`: são estados diferentes. Salvar não significa concluir. Ao mudar um checkbox, o código atualiza o conjunto, o armazenamento e a barra de progresso.
8. `applyPreferences`: aplica tema e tamanho ao documento. O operador `?.` permite compartilhar o script com o login, que não tem os mesmos botões.
9. `slides` e `showSlide`: a posição aumenta ou diminui; o operador `%` faz o carrossel voltar ao começo ou ao fim.
10. `preventDefault`: impede que o formulário navegue ou recarregue a página. A validação nativa ocorre antes do evento `submit`; o contato também rejeita campos compostos apenas por espaços.

## Segurança e honestidade da interface

`innerHTML` é usado apenas com conteúdo estático definido no código. A palavra digitada não é interpolada no HTML; textos dinâmicos de status usam `textContent`. Se o conteúdo vier de usuários ou de uma API no futuro, a renderização deve ser revista para impedir injeção de HTML. Login real exigiria servidor e uma solução de autenticação adequada; conferir uma senha no JavaScript público não protege uma conta.

## Exercícios para fazer pessoalmente

- Troque um resumo em `methods` e explique por que não precisou alterar o HTML.
- Acrescente um método e ajuste o máximo da barra no HTML, hoje fixado em 6.
- Explique a diferença entre `filter` (variável) e `.filter()` (método de array).
- Mostre onde acontece a conversão para JSON e por que ela é necessária.
- Teste uma pesquisa sem resultados e uma pesquisa sem acento.
- Explique por que limpar o navegador perde os favoritos.

Você está pronto para apresentar quando consegue explicar esse fluxo e realizar uma pequena alteração sem copiar uma resposta que não entende.
