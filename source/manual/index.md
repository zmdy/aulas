---
title: Manual
date: 2020-03-17 10:00:00
---

Todo o conteúdo disponibilizado é **livre** (free/libre), o que significa que você está **automaticamente autorizado** a baixar, estudar e modificar todo o conteúdo do projeto.

Para acessar os conteúdos finais já processados, em **.pdf ou outros formatos**, acesse a página [Materiais](../materiais)

Os textos, imagens, fontes, ícones e eventuais bibliotecas, módulos ou softwares utilizados no site podem ser acessados pelo repositório do projeto no [GitHub](zmdy.github.io/aulas.txt).

Ao acessar o repositório de aulas.txt, você verá uma tela como a mostrada a seguir:


![Print da tela inicial do projeto no GitHub](../assets/media/img/github/github-inicial.png)

Nesta página estão todos os conteúdos de texto, imagens e fontes utilizados no site e nos slides. Caso deseje baixar apenas este **conteúdo bruto** basta clicar no botão `Clone or Download` e em seguida clicar sobre `Download ZIP`.

![Destaque da Área de Download no GitHub](../assets/media/img/github/github-download.png)

Ao baixar e extrair o conteúdo, você terá acesso à seguinte estrutura de pastas e arquivos:

```
ESTRUTURA DO BRANCH MASTER
  .
  ├── assets                   
  │   ├── content             # Arquivos de texto usados para criar os slides
  │   └── media               # Arquvos de mídia
  │       ├── fonts         	# Fontes utilizadas nos slides
  │       ├── icons           # Ícones diversos
  │       ├── img           	# Todas as imagesn utilizadas
  │       └── logo            # Logo do projeto aulas.txt
  |
  ├── .gitignore
  ├── LICENSE.txt
  └── README.md
```

Caso queira utilizar alguma imagem, pdf, fonte, ou modificar algum conteúdo de texto **fique a vontade**! Só **não se esqueça** de manter o arquivo LICENSE.txt na pasta ;)

---

## Branches do projeto

Todos os slides utilizados no projeto (e o próprio site) são construídos utilizando os recursos mostrados acima. No entanto, para **renderizar** este conteúdo em um [site](https://zmdy.github.io/aulas.txt/), é necessário utilizar alguns frameworks especiais.

O site deste projeto é hospedado via [GitHub Pages](https://pages.github.com/) utilizando temas disponibilizados pelo framework [Hexo](https://hexo.io/themes/).

Para acessar os arquivos (e frameworks) utilizados para criar o site e os slides, clique sobre `Branch: master` e em seguida clique na opção `hexo-pages`.

![Destaque da Área de Branches no GitHub](../assets/media/img/github/github-branches.png)


Cada um dos itens mostrados na imagem acima (master, gh-pages e hexo-pages) é chamado de *branch*.

Um *branch* nada mais é do que a ramificação de um projeto de software. No caso do [aulas.txt](zmdy.github.io/aulas.txt), há 3 diferentes ramos:

- `master`: branch responsável pelo armazenamento de todos os conteúdos de texto, imagens e fontes (mostrado e explicado acima);
- `gh-pages`: branch responsável pelo armazenamento deste [site](zmdy.github.io/aulas.txt);
- `hexo-pages`: branch responsável pelo armazenamento dos arquivos do framework [Hexo](https://hexo.io/themes/) e das bibliotecas usadas para produzir os [slides](https://github.com/zmdy/bonisa).

Por questões de praticidade, o branch `gh-pages` é automaticamente atualizado no processo de *deployment* do [Hexo](https://hexo.io/docs/github-pages). Por esta razão o mesmo **não é modificado manualmente**.

Se desejar, você poderá [baixar](https://github.com/zmdy/aulas.txt/tree/gh-pages) este branch e rodar em sua máquina. O site será corretamente mostrado, mas os slides não!

---

## hexo-pages

Como vimos, o `hexo-pages` é o branch responsável por armazenar e gerar todas as páginas do site e todos os slides.

Para converter os arquivos do `master` no site acessado no `gh-pages` é utilizado um *framework* chamado [Hexo](https://hexo.io/themes/). 

Caso você queira instalar o site, localmente, com **todas** as suas funcionalidades (incluindo os slides), siga o passo a passo a seguir:

Primeiramente, você precisará instalar o [Node.js](https://nodejs.org/en/) em seu computador para garantir que tudo funcione corretamente.

| #     | Software | O que é?  |
| :---: | :---:    | :---:            |
| 01    | [Java Script](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript) | Linguagem de programação utilizada para implementar conteúdos dinâmicos- como mapas interativos, animações gráficas em 2D/3D e vídeos - em sites. |
| 02    | [Node.js](https://nodejs.org/en/) | Interpretador de JavaScript repleto de funcionalidades *server-side*. |
| 03    | [Hexo](https://hexo.io/) | Poderoso, simples e rápido framework escrito em [Node.js](https://nodejs.org/en/) para criação de blogs com arquivos de texto [Markdown](https://daringfireball.net/projects/markdown/). |
| 04    | [Markdown](https://daringfireball.net/projects/markdown/)| Linguagem textual capaz de implementar esruturas HTML/XHTML em textos planos. |

Após instalar todos os programas necessários, você deverá baixar o site [aulas.txt](https://zmdy.github.io/aulas.txt) para o seu computador, por meio do  branch `hexo-pages`.

1. [Download](https://github.com/zmdy/aulas.txt/tree/hexo-pages) direto do site: `https://github.com/zmdy/aulas.txt/tree/hexo-pages`

Quando o download finalizar, você deverá extrair os arquivos baixados. Em seguida, acesse a pasta com os arquivos extraídos. A partir dese momento você **deverá utilizar** um terminal (Prompt de Comando) para executar os passos.

2. Acessa a pasta extraída: `cd aulas.txt`

Agora basta instalar os módulos [Node.js](https://nodejs.org/en/) necessários para o funcionamento do [Hexo](https://hexo.io/).

3. Instalar as dependências Node.js: `npm install`

Com o download finalizado, basta iniciar o servidor [Hexo](https://hexo.io/).

4. Inicia o servidor: `hexo server`

Para acessar o site, vá até o navegador de sua preferência e abra o endereço a seguir:

5. Abrir o site com o navegador: `127.0.0.1:4000`