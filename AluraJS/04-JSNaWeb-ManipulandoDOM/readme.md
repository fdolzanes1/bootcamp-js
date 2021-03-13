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

## Adicionando Item na Lista

Todos os elementos na nossa árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método  `appendChild`  que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai

Existem outros métodos que podemos utilizar para manipular nós:

-   insertBefore(pai, filho): Coloca um nó antes do outro.
-   replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
-   removeChild(elemento): Remove um nó da árvore.

Existe `Element.classList` é uma propriedade somente leitura que retorna uma coleção *DOMTokenList* ativa dos atributos de classe do elemento.
Usar **classList** é uma alternativa conveniente para acessar a lista de classes de um elemento como uma seqüência delimitada por espaço através de `element.className`. Abaixo alguns métodos: 

 - **add( String [, String] )** Adicione valores de classe especificados. Se essas classes já existem no atributo do elemento, elas são ignoradas.
 - **remove( String [,String] )** Remover valores de classe específicos.
 - **item ( Number )** Retorna o valor da classe por índice na coleção.
 - **contains ( String )** Verifica se o valor da classe especificado existe no atributo de classe do elemento.


## Concluir Tarefa