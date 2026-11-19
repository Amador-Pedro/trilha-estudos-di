# Roteiro para a apresentação parcial

Duração sugerida: cinco a sete minutos. Use este roteiro como apoio de estudo e adapte a fala ao que você realmente compreendeu.

## 1 — Tema e problema — 40 segundos

Apresente a Trilha como um site de organização de estudos. O público são estudantes que querem conhecer métodos e acompanhar experiências. Explique que o objetivo desta primeira versão é demonstrar a interface e as interações locais.

## 2 — Demonstração — dois minutos

1. Abra a página inicial e apresente a proposta.
2. Pesquise "memoria" e mostre a busca sem acentos.
3. Limpe a busca, selecione Foco e abra Como usar.
4. Feche o diálogo com Escape, salve um cartão e abra Meus salvos.
5. Marque Já experimentei, mostre o progresso e recarregue para conferir persistência.
6. Navegue no carrossel com Anterior e Próxima.
7. Alterne o tema e amplie a fonte. Mostre a navegação por Tab.
8. Abra Entrar e explique o caráter demonstrativo. No contato, deixe claro que nada é enviado.

## 3 — Decisões de interface — um minuto

Explique a escolha do verde para a identidade, dos fundos neutros para leitura e da diferença de contraste entre texto e fundo. Não atribua efeitos universais às cores. Mostre que o estado de um botão também é informado por texto, além de cor. A análise usa WCAG como referência; a versão ainda não passou por auditoria completa.

## 4 — Código — um minuto

Abra `app.js`. Mostre um objeto em `methods`, a função `renderCards` e o evento de busca. Explique o caminho: entrada → filtro → renderização. Em seguida, mostre `write` e explique que o `localStorage` guarda preferências e identificadores apenas neste navegador.

## 5 — Uso de IA e próximas versões — 40 segundos

Informe que a IA ajudou a criar esta base, o roteiro e a documentação. Descreva apenas as revisões e testes que você tiver feito pessoalmente. As próximas etapas são testar com colegas, fazer auditoria por teclado e leitor de tela, revisar a experiência mobile e decidir se haverá backend. A redação da Parte C será escrita pessoalmente.

## Perguntas prováveis

- Por que não usar framework? O escopo cabe em tecnologias nativas, com menos conceitos e dependências para estudar.
- Por que o login não autentica? Esta entrega demonstra a interface; autenticação real precisa de infraestrutura adicional.
- O que persiste? IDs de favoritos e concluídos, tema e tamanho de fonte. Nenhuma senha.
- O que acontece sem JavaScript? A estrutura e os links permanecem; cartões e interações exigem JavaScript, e isso é informado na tela.
- O site é WCAG AA? Foram aplicados recursos e medidas de contraste, mas isso não equivale a conformidade completa.

Antes da aula, preencha nome e RA no relatório, execute a demonstração inteira e escreva uma pequena modificação com suas próprias palavras no histórico do repositório.
