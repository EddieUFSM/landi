# CSS

Nessa seção vou abordar alguns conceitos de design utilizados e automaticamente falar um pouco sobre como o CSS funciona. É uma boa revisão para iniciantes e um bom material para quem quer consolidar alguns conceitos.

## O Que Acontece Com o CSS Quando Carregamos Uma Página da Web?

```
    Passo 1. [HTML] Carregar HTML
    Passo 2. [HTML] Analisar HTML
    Passo 3. [CSS] Carregar CSS
    Passo 3.1 [CSS] Analisar CSS
    Passo 3.1.1 [CSS] Resolver declarações CSS conflitantes
    Passo 3.1.2 [CSS] Processar valores CSS finais
    Passo 4.1 [HTML] Modelo de Objeto de Documento (DOM)
    Passo 4.2 [CSS] Modelo de Objeto de CSS (CSSOM)
    Passo 5. Árvore de Renderização
    Passo 6. renderização da web: o modelo de formatação visual
    Passo 7. Site final renderizado.
```

## Seletores CSS

| seletor  |    representa   |
|----------|-----------------|
| . | class |
| # | id |
| * | todos os elementos |
| h1, div, p e etc...| palavras chaves de elementos html |

## C do CSS - significa Cascade

Cascade é o processo que combina diferentes stylesheets e resolve os conflitos entre diverentes regras css e declarações, quanto mais de uma regra é aplicada para certo elemento.

Ele leva em conta Importancia Especificidade e ordem do recurso.

- **Importância**
    - User: important declations
    - Author: important declarections
    - Author declarations
    - User declarations
    - Default Browser declartions
- **Especificidade**
    - inline styles
    - IDs
    - Classes, pseudo-classes, attribute
    - Elements, pseudo-elements
- **Ordem**
    - qualquer elemento declarado duas vezes, o último declarado terá mais importância.

## Regras Para Configurar o CSS

- Declarações do CSS marcadas com !important tem que tem prioridade máxima, mas só utilize como último recurso. Utilizar a tag !importante limita o reuso do código

- inline styles sempre tem prioridade sobre styles externos.

- Um Seletor que contem um id é mais especifico que um que contêm 1000 classes

- um seletor que contem uma classe é mais específico que um com 1000 elementos

- O seletor universão * tem 0 prioridade e será subscrito por qualquer outro seletor.

- Apoie-se mais na especificidade do que na ordem dos seletores. Mas, confie na ordem ao lidar com folhas de estilo de terceiros - sempre coloque sua folha de estilo do autor por último.

## Utilização do rem

rem é uma medida do css que se baseia com com o tamanho da fonte padrão no navegador que por defaul é 16px. Ou seja, 1rem é naverdade 16px e 2 rem é na verdade 32px. A partir desse conceito, para que, tenhamos a possibildiade de alterar o tamanho da fonte proporcifont-size no elemento html possamos alterar o tamanho da fonte em todo o documento, configurei 

## Box Model

Por padrão o tamanho da altura e largura de um elemento é calculado da seguinte forma:

**total width** = right border + right padding + **specified width** + left padding + left border

**total height** = top border + top padding + **specified height** + bottom padding + bottom border

como pode perceber, controlar a largura e altura total dessa forma pode ser desafiador. Quando utilizamos o border box o cálculo muda e fica dessa forma, que temos mais controle:

**total width** = **specified width**

**total height** =  **specified height**

- **content:** text, images e etc..
- **padding:** área transparente entorno do box
- **border:** está entorno do padding e o content
- **margin:** espaço entre boxes
- **fill area:** area que está preenchida com o background

### Existem três tipos de blocks: inline, Block-level and inline-block.

#### Inline:

- Fluxo de Texto: Elementos inline fluem com o texto na página.
- Não Inicia Nova Linha: Os elementos inline não iniciam uma nova linha no layout.
- Tamanho Automático: O tamanho do elemento inline é determinado pelo conteúdo dentro dele.
- Não Aceita Largura ou Altura: Normalmente, não aceita propriedades de largura ou altura.
- Aceita Margens Horizontais: Aceita margens horizontais (esquerda e direita), mas não verticais (topo e fundo).
- Não Pode Conter Blocos: Não pode conter outros blocos, apenas texto e outros elementos inline.

Exemplos: ```<span>, <a>, <strong>, <em>.```

#### Block-level:

- Inicia Nova Linha: Elementos de nível de bloco iniciam uma nova linha no layout.
- Ocupa Toda a Largura Disponível: Normalmente, eles se estendem horizontalmente para ocupar toda a largura disponível.
- Aceita Largura e Altura: Aceita propriedades de largura e altura para definir suas dimensões.
- Pode Conter Outros Blocos: Pode conter outros blocos e elementos inline.
- Aceita Margens Verticais e Horizontais: Aceita margens verticais e horizontais.

Exemplos: ```<div>, <p>, <h1> - <h6>, <section>, <footer>.```

#### Inline-block:

- Combinação de Ambos: Combina as características dos elementos inline e dos elementos de nível de bloco.
- Não Inicia Nova Linha: Como elementos inline, não iniciam uma nova linha.
- Aceita Largura e Altura: Assim como elementos de nível de bloco, aceita propriedades de largura e altura.
- Pode Conter Outros Blocos: Também pode conter outros blocos e elementos inline.
- Aceita Margens Verticais e Horizontais: Aceita tanto margens verticais quanto horizontais.

Exemplos: ```<button>, <input>, <label>.```

### Três tipos de positioning schemes: Normal Flow, Absolute Positioning e floats.

#### Normal Flow:

- Fluxo Padrão: Os elementos são posicionados de acordo com o fluxo normal do documento.
- Empilhamento Vertical: Os elementos são empilhados verticalmente na ordem em que aparecem no HTML, a menos que sejam modificados por outras propriedades de posicionamento.
- Posicionamento Relativo ao Pai: A posição dos elementos é determinada em relação aos elementos pais.
- Fluxo Natural: Os elementos fluem naturalmente conforme o conteúdo, sem ajustes especiais.

Exemplos: Todos os elementos HTML, a menos que sejam modificados por outras técnicas de posicionamento.

```css
    position: relative;
```

#### Absolute Positioning:

- Posicionamento Absoluto: Os elementos são posicionados em relação ao seu primeiro ancestral posicionado, ou seja, um ancestral cuja posição não é static.
- Remove do Fluxo Normal: Elementos posicionados absolutamente são removidos do fluxo normal do documento, não afetando o layout dos elementos circundantes.
- Coordenadas Absolutas: São especificadas com propriedades como top, right, bottom e left.

Exemplo de Uso: Criação de elementos flutuantes sobre outros elementos ou posicionamento preciso em relação a um elemento específico.

```css
    float: left;
    float: right;
```

#### Floats:

- Flutuação: Os elementos são removidos do fluxo normal do documento e movidos para a esquerda ou para a direita até que eles não estejam mais tocando a borda do seu contêiner pai ou de outro elemento flutuante.
- Largura Automática: Por padrão, os elementos flutuantes têm largura automática, ocupando todo o espaço disponível no contêiner.
- Alinhamento ao Redor: Os elementos dentro do contêiner flutuante se alinham ao redor do elemento flutuante.
- Pode Causar Problemas de Layout: Se não for usado com cuidado, pode causar problemas de layout, como colisões ou sobreposições indesejadas.
- Clearing: Às vezes, é necessário usar a propriedade clear para evitar que elementos subsequentes flutuem ao lado dos elementos flutuantes.

Exemplos de Uso: Layouts de colunas, criação de menus de navegação horizontais.

```css
    position: absolute;
    position: fixed;
```

### Stacking contexts

Stacking contexts no CSS, com a propriedade z-index, determinam a ordem de empilhamento de elementos sobrepostos em uma página web.