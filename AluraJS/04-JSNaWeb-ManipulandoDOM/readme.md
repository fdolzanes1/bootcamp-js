## Funcionamento da estrutura do  **DOM**
Utilizamos o método  `querySelector`  para percorrer a árvore do  **DOM**  e encontrar o elemento que queremos utilizando  **JavaScript**. Porém existem outros métodos que podem ser utilizados para o mesmo fim.

-   `document.getElementById(‘id’)`  seleciona o elemento pelo  `id`  passado.
-   `document.getElementsByClassName(‘classe’)`  **retorna um array dos elementos**  pelo nome da classe passada.
-   `document.getElementsByTagName(‘tag’)`  **retorna um array dos elementos**  pelo nome da tag passada
-   `document.querySelectorAll(seletor)`  devolve todos os seletores com o mesmo nome

## Comportamento

Utilizamos `data-attributes` no html da nossa aplicação para separar responsabilidades entre **Javascript e CSS**.
`addEventListener()` registra uma única espera de evento em um único alvo. 
`event.preventDefault()` cancela o evento se for cancelável, sem parar a propagação do mesmo.