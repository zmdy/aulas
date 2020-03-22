![aulas.txt](./source/assets/media/logo/logo-aulas-txt-github.svg)

Este é um repositório de apresentações, anotações, livros, apostilas, imagens, vídeos e recursos utilizados em diversas aulas de Administração e TI.

Todo o conteúdo disponibilizado, incluindo (mas não se limitado a) textos, imagens, vídeos, fontes, ícones e/ou eventuais bibliotecas, módulos ou softwares utilizados para a criação de interações ou animaçãoes, é **conteúdo livre** (free/libre), **ao menos que explicitamente informado o contrário.**

O projeto em si é livre e está distribuídas sob Licença MIT. Verifique a sessão "LICENÇA" ao final deste documento e das apresentações para maiores detalhes.

> [O termo] Software Livre *(Free Software)* se refere à liberdade, não ao preço. Portanto, pense em *liberdade de expressão*, e não em *cerveja grátis*. As liberdades da qual me refiro são aquelas de realizar mudanças caso você queira, ou mesmo contratar alguém para realizá-las. Se você está usando um software para os seus negócios, [me refiro] à liberdade de redistribuir cópias, compartilhar com outras pessoas, realizar aprimoramentos e publicá-los para que outros também obtenham esses benefícios. **STALLMAN, Richard *em* Revolutin OS, 2001**

### Conteúdo

O conteúdo disponibilizado pode ser facilmente acessado pelo site do projeto, acessível em [aulas.txt](zmdy.github.io/aulas.txt)!

Ao baixar e extrair o conteúdo, você terá acesso à seguinte estrutura de pastas e arquivos:

```
ESTRUTURA DO BRANCH MASTER
  .
  ├── sources                 
  │  ├── _posts               # Posts do site em formato Markdown
  │  ├── pages                # Páginas do site em formato Markdown  
  │  ├── src                  # Scripts e arquivos personalizados
  │  ├── assets                   
  │   ├── content             # Arquivos de texto usados para criar os slides
  │   └── media               # Arquvos de mídia
  │       ├── fonts         	# Fontes utilizadas nos slides
  │       ├── icons           # Ícones diversos
  │       ├── img           	# Todas as imagesn utilizadas
  │       └── logo            # Logo do projeto aulas.txt
  |
  ├── _config.yml_            # Arquivo de configurações do Hexo
  ├── .gitignore
  ├── LICENSE.txt
  ├── package.json            # Arquivo de configurações do Node
  └── README.md
```

Caso queira utilizar alguma imagem, pdf, fonte, ou modificar algum conteúdo de texto **fique a vontade**! Só **não se esqueça** de manter o arquivo LICENSE.txt na pasta ;)

Este projeto é hospedado via [GitHub Pages](https://pages.github.com/) utilizando temas disponibilizados pelo framework [Hexo](https://hexo.io/themes/).

Você pode baixar e rodar este site (e seus recursos) localmente, se desejar. Para isto basta seguir o passo a passo a seguir:

#### Passo a passo

Primeiramente, você precisará instalar o [Node.js](https://nodejs.org/en/) em seu computador para garantir que tudo funcione corretamente.

| #     | Software | O que é?  |
| :---: | :---:    | :---:            |
| 01    | [Java Script](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript) | Linguagem de programação utilizada para implementar conteúdos dinâmicos- como mapas interativos, animações gráficas em 2D/3D e vídeos - em sites. |
| 02    | [Node.js](https://nodejs.org/en/) | Interpretador de JavaScript repleto de funcionalidades *server-side*. |
| 03    | [Hexo](https://hexo.io/) | Poderoso, simples e rápido framework escrito em [Node.js](https://nodejs.org/en/) para criação de blogs com arquivos de texto [Markdown](https://daringfireball.net/projects/markdown/). |
| 04    | [Markdown](https://daringfireball.net/projects/markdown/)| Linguagem textual capaz de implementar esruturas HTML/XHTML em textos planos. |

Após instalar todos os programas necessários, você deverá baixar o site [aulas.txt](zmdy.github.io/aulas.txt) para o seu computador, por meio do  branch `hexo-pages`.

1. [Download](https://github.com/zmdy/aulas.txt/tree/hexo-pages) direto do site: `https://github.com/zmdy/aulas.txt/tree/hexo-pages`

Quando o download finalizar, você deverá extrair os arquivos baixados. Em seguida, acesse a pasta com os arquivos extraídos. A partir dese momento você **deverá utilizar** um terminal (Prompt de Comando) para executar os passos.

2. Acessa a pasta extraída: `cd aulas.txt`

Agora basta instalar os módulos [Node.js](https://nodejs.org/en/) necessários para o funcionamento do [Hexo](https://hexo.io/).

3. Instalar as dependências Node.js: `npm install`

Com o download finalizado, basta iniciar o servidor [Hexo](https://hexo.io/).

4. Inicia o servidor: `hexo server`

Para acessar o site, vá até o navegador de sua preferência e abra o endereço a seguir:

5. Abrir o site com o navegador: `127.0.0.1:4000/aulas.txt`

## Licenças
### aulas.txt
Este projeto como um todo está distribuído com a [Licença MIT](https://opensource.org/licenses/MIT): *a short and simple permissive license with conditions only requiring preservation of copyright and license notices.* ([Choose a License](choosealicense.com))

<ul>
  <li> Sinta-se livre para:
    <ul>
      <li class='item-ok'>Distribuir</li>
      <li class='item-ok'>Copiar</li>
      <li class='item-ok'>Modificar</li>
      <li class='item-ok'>Publicar</li>
      <li class='item-ok'>Fazer uso comercial</li>
      <li class='item-ok'>Fazer uso privado</li>
      <li class='item-ok'>Criar conteúdo derivado, utilizando outra licença</li>
      <li class='item-ok'>Fazer o que você quiser (literalmente)</li>
    </ul>
  </li>

  <li> Mas não se esqueça de:
    <ul>
      <li class='item-warning'>Manter uma cópia do arquivo LICENSE e atribuir o devido crédito a <em>nóis</em>, porque <em>"dá trabalho pra fazer!"</em></li>
    </ul>
  </li>
</ul>

Guarde no fundo do seu coração que este projeto e todos os seus constituites vêm com *absolutamente nenhuma garantia*. O autor e a licença não são responsáveis por quaisquer danos ou problemas causados pelo uso dos recursos aqui distribuídos.

### Apresentações e Anotações
Todas as apresentações (slides e anotações) também estão distribuídos com a [Licença MIT](https://opensource.org/licenses/MIT), pois são renderizadas com a biblioteca [Bonisa.js](https://github.com/zmdy/bonisa). No entanto, os conteúdos usados nas aparesentações são individualmente distribuídos sob diferentes licenças, explicitamente descritas na sessão "LICENÇA" de cada apresentação.

### Conteúdos de Mídia
Todo e qualquer conteúdo midiático, incluindo, mas não se limitando a imagens, textos, fontes, músicas, vídeos e ícones, produzidos ou incluídos em uma uma mais apresentações, são distribuídos sob a [Licença Creative Commons](https://creativecommons.org/), explicitamente descrita em cada apresentação ou anotação.

### Softwares
Todos os softwares apresentados ou referenciados nos recursos supracitados, incluindo, mas não se limitando a softwares, scripts, funções, classes, módulos, bibliotecas e/ou pacotes são de responsabilidade de seus criadores.

Demais códigos, produzidos explicitamente para uso nos materiais aqui apresentados, são também distribuídos com a [Licença MIT](https://opensource.org/licenses/MIT) ou [GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0.txt), conforme apresentado em cada recurso.
