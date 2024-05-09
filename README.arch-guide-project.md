
# Archtect Mindset

## Design Responsivo

## Código escalável e com alta manuteinibilidade

- Limpo
- Modular
- Reusável
- Pronto para Crescer

### Pense -> construa -> arquitete 

#### Pense

Pense como o layout da página ou do aplicação antes de escrever um código.

##### Aplicação de Component-Driven Design no CSS

- blocos de construção modular para criar interfaces. Juntos criam o layout da página.
- caracteristica principal é ser reutilizavel em todo o projeto e entre diferentes projetos.
- Não menos importante os componêntes devem ser independentes entre si.

#### Construa

Vonstrua o layout em HTML e CSS com uma estrutura consistente para nomear classes.

- Block Element Modifier BEM

O padrão BEM (Block Element Modifier) é uma metodologia de nomenclatura para classes CSS que ajuda a organizar e estruturar o código CSS de forma mais modular e escalável. Aqui está uma breve explicação de cada parte do padrão:

```cs
.block {}
.block__element {}
.block__element--modifier {}
```

#### Arquitete

Crie uma arquitetura lógica para seu CSS com arquivos e pastas.

##### 7-1 pattern

7 pastas diferentes para  sass e um arquivo sass principal para importar todos os outros arquivos e compilá-los para um css stylesheet

As 7 pastas

- base/
- components/
- layout/
- pages/
- themes/
- abstracts/
- vendors/
