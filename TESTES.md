# Verificação da primeira versão

Data: 19/11/2026. Verificação realizada pelo assistente no navegador integrado, com servidor local. Estes resultados não substituem testes pessoais do aluno.

| Caso | Resultado observado |
| --- | --- |
| Pesquisa por `memoria` | 2 resultados, sem exigir acento |
| Pesquisa inexistente | Aviso de nenhum resultado |
| Filtro Foco | Pomodoro e Uma prioridade por vez |
| Salvar e abrir Meus salvos | Exibiu o cartão salvo |
| Marcar método e recarregar | Progresso permaneceu em 1 de 6 |
| Abrir instruções e pressionar Escape | Diálogo abriu e fechou |
| Próxima dica | Avançou para dica 2 de 3 |
| Contato preenchido | Aviso de validação sem envio |
| Login com dados fictícios | Aviso de validação sem autenticação e campos limpos |
| Tema e fonte | Estados dos controles alterados e aparência inspecionada |
| Tela de 390 × 844 | Largura útil de 375 px e conteúdo de 375 px, sem transbordamento horizontal |
| `node --check app.js` | Nenhum erro de sintaxe |

Contrastes calculados por luminância relativa sRGB: texto claro #172C29 sobre branco 14,70:1; texto secundário #4B635D sobre branco 6,48:1; botão verde #17634C e texto branco 7,18:1; texto claro #F0F6F2 sobre fundo escuro #12231F 14,91:1. Foram avaliados 11 pares, incluindo bordas e foco, todos acima dos limites selecionados.

Referências: [contraste de texto](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) e [contraste não textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), W3C.

Pendente: auditoria com leitor de tela, navegação completa por teclado, zoom de 200% e 400%, teste em outros navegadores e avaliação com colegas. Não há certificação de conformidade WCAG completa.
