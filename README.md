# Contramaré

Um site estático desenvolvido com Jekyll dedicado à reflexão, literatura e pensamentos que inspiram.

## 📖 Sobre o Projeto

Contramaré é um espaço digital onde você pode encontrar:
- Frases marcantes e inspiradoras
- Artigos reflexivos
- Conteúdos que tocam a alma
- Pensamentos sobre literatura e vida

## 🚀 Funcionalidades

- **Carregamento otimizado de CSS**: O CSS é carregado condicionalmente baseado no layout e necessidades da página
- **Design responsivo**: Adaptado para diferentes tamanhos de tela
- **SEO otimizado**: Meta tags e estrutura otimizada para mecanismos de busca
- **Performance otimizada**: Carregamento inteligente de recursos

## 🚀 Tecnologias Utilizadas

- **Jekyll** - Gerador de sites estáticos
- **Bootstrap 5** - Framework CSS
- **Bootstrap Icons** - Ícones
- **Google Fonts** - Tipografia (Comfortaa)

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Ruby (versão 2.7 ou superior)
- Bundler
- Git

### Configuração Local

1. Clone o repositório:
```bash
git clone https://github.com/neylonsantos/contramare.git
cd contramare
```

2. Instale as dependências:
```bash
bundle install
```

3. Execute o servidor local:
```bash
bundle exec jekyll serve
```

4. Acesse o site em: `http://localhost:4000/contramare`

## 📁 Estrutura do Projeto

```
contramare/
├── _includes/          # Componentes reutilizáveis
├── _layouts/           # Templates de página
├── _posts/             # Posts do blog
├── _category/          # Páginas de categoria
├── assets/             # CSS, JS, imagens
├── pages/              # Páginas estáticas
├── _config.yml         # Configuração do Jekyll
└── index.html          # Página inicial
```

## 🎨 Carregamento Condicional de CSS

Para otimizar a performance, implementamos um sistema de carregamento condicional de CSS:

### CSS Global (sempre carregado)
- `header.css` - Estilos do cabeçalho
- `main.css` - Estilos principais
- `footer.css` - Estilos do rodapé

### CSS Condicional

**Por Layout:**
- `post.css` - Carregado apenas em páginas com `layout: post`
- `quote.css` - Carregado apenas em páginas com `layout: quotes`
- `categories.css` - Carregado apenas em páginas com `layout: category_page`

**Por URL ou Variável:**
- `blog.css` - Carregado em:
  - Páginas com `show_blog_css: true` no front matter
  - URLs que contenham `/blog` ou `/category`

**CSS Customizado:**
Você pode adicionar CSS específico para qualquer página usando o front matter:

```yaml
---
layout: page
title: "Minha Página"
custom_css:
  - "/assets/css/custom-page.css"
  - "/assets/css/special-components.css"
---
```

### Exemplos de Uso

**Para uma página de blog:**
```yaml
---
layout: page
permalink: /blog/
show_blog_css: true
---
```

**Para um post:**
```yaml
---
layout: post
title: "Meu Post"
# post.css será carregado automaticamente
---
```

**Para uma página com CSS customizado:**
```yaml
---
layout: page
title: "Página Especial"
custom_css:
  - "/assets/css/animations.css"
  - "/assets/css/special-layout.css"
---
```

## 📝 Como Adicionar Conteúdo

### Novo Post
Crie um arquivo em `_posts/` seguindo o padrão:
```
YYYY-MM-DD-titulo-do-post.markdown
```

### Nova Frase
Use o layout `quotes` no front matter:
```yaml
---
layout: quotes
title: "Título da frase"
quote: "Texto da frase"
quote_author: "Autor"
categories: Frases
---
```

## 🌐 Deploy

O site é automaticamente publicado no GitHub Pages quando há push na branch `main`.

URL: https://contramare.com.br

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Neylon Santos**
- GitHub: [@neylonsantos](https://github.com/neylonsantos)
- Email: contato@contramare.com.br
- Twitter: [@contramare_page](https://twitter.com/contramare_page)