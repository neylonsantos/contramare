<div>
  <h1><img src="assets/base/contramare-icon.png" alt="Contramaré" width="35"> Contramaré</h1>
</div>

> *"Fácil é seguir o fluxo, difícil é ir contra a maré."*

Um blog de reflexões provocativas desenvolvido com Jekyll, focado em desafiar o senso comum e promover o pensamento crítico através de textos que funcionam como espelhos e confrontos internos.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características Técnicas](#-características-técnicas)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Sistema Modular](#-sistema-modular)
- [Otimizações de Performance](#-otimizações-de-performance)
- [SEO e Analytics](#-seo-e-analytics)
- [Conteúdo](#-conteúdo)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 📖 Sobre o Projeto

O **Contramaré** é mais que um blog — é um ponto de resistência intelectual. Nasce da inquietação com comportamentos normalizados que revelam imaturidade, falta de autorresponsabilidade e comodismo.

### 🎯 Missão
- Provocar reflexões
- Desafiar a preguiça intelectual
- Combater a transferência covarde da culpa
- Promover o autocontrole como força, não fraqueza

### 🎯 Não somos para todos
- Não oferecemos respostas fáceis nem caminhos suaves
- Não escrevemos para agradar, mas para transformar
- Buscamos o desconforto que liberta e o incômodo que eleva

---

## ⚡ Características Técnicas

### 🏗️ Arquitetura Avançada
- **Sistema modular** com ativação/desativação de funcionalidades
- **Carregamento condicional de CSS** baseado em layout
- **Filtragem automática de conteúdo** por categoria
- **Otimizações de performance** para carregamento rápido

### 🎨 Design e UX
- **Design responsivo** adaptado para todos os dispositivos
- **Tipografia elegante** com Google Fonts (Comfortaa)
- **Interface limpa** focada na leitura
- **Navegação intuitiva** com sistema de categorias

### 🔍 SEO e Performance
- **SEO otimizado** com meta tags estruturadas
- **Schema.org markup** para rich snippets
- **Sitemap automático** e feed RSS
- **Compressão de imagens** automática
- **Google Analytics** integrado

---

## 🛠️ Tecnologias

### Core
- **Jekyll 4.4.1** - Gerador de sites estáticos
- **Ruby** - Linguagem base
- **Liquid** - Template engine

### Frontend
- **Bootstrap 5.3.6** - Framework CSS responsivo
- **Bootstrap Icons 1.11.3** - Biblioteca de ícones
- **CSS customizado** com carregamento condicional
- **JavaScript vanilla** para interações

### Plugins e Otimizações
- **jekyll-seo-tag** - SEO automático
- **jekyll-sitemap** - Geração de sitemap
- **jekyll-feed** - Feed RSS
- **jekyll-redirect-from** - Redirecionamentos
- **jekyll-postfiles** - Gerenciamento de arquivos de posts
- **jekyll-compress-images** - Otimização de imagens

### Plugins Customizados
- **feature_filter.rb** - Filtro de funcionalidades modulares otimizado
- **latin_slugify.rb** - Geração de URLs amigáveis

---

## 🚀 Instalação

### Pré-requisitos
```bash
# Ruby (versão 2.7 ou superior)
ruby --version

# Bundler
gem install bundler

# Git
git --version
```

### Configuração Local

1. **Clone o repositório**
```bash
git clone https://github.com/neylonsantos/contramare.git
cd contramare
```

2. **Instale as dependências**
```bash
bundle install
```

3. **Execute o servidor de desenvolvimento**
```bash
bundle exec jekyll serve
```

4. **Acesse o site**
```
http://localhost:4000
```

### Comandos Úteis

```bash
# Desenvolvimento com drafts
bundle exec jekyll serve --drafts

# Build para produção
bundle exec jekyll build

# Build com perfil de performance
bundle exec jekyll build --profile

# Limpeza de cache
bundle exec jekyll clean
```

---

## 📁 Estrutura do Projeto

```
contramare/
├── 📄 Configuração
│   ├── _config.yml              # Configurações principais
│   ├── Gemfile                  # Dependências Ruby
│   └── robots.txt               # Diretivas para crawlers
│
├── 🏗️ Estrutura Jekyll
│   ├── _includes/               # Componentes reutilizáveis
│   │   ├── head.html           # Meta tags e SEO
│   │   ├── header.html         # Navegação principal
│   │   ├── footer.html         # Rodapé
│   │   ├── apresentation.html  # Apresentação da home
│   │   ├── last_publications.html  # Posts recentes
│   │   ├── post_details.html   # Detalhes do post
│   │   └── content_unavailable.html # Página de indisponível
│   │
│   ├── _layouts/                # Templates de página
│   │   ├── default.html        # Layout base
│   │   ├── page.html           # Páginas estáticas
│   │   └── post.html           # Posts individuais
│   │
│   ├── _posts/                  # Conteúdo do blog
│   │   └── _template-post-seo.md  # Template para novos posts
│   │
│   ├── _data/                   # Dados estruturados
│   │   └── seo.yml             # Configurações de SEO
│   │
│   └── _plugins/                # Plugins customizados
│       ├── feature_filter.rb   # Sistema de funcionalidades modulares
│       ├── latin_slugify.rb    # URLs amigáveis
│       └── README_FEATURE_FILTER.md # Documentação do plugin
│
├── 🎨 Assets
│   ├── assets/css/              # Estilos CSS modulares
│   │   ├── header.css          # Navegação
│   │   ├── main.css            # Estilos base
│   │   ├── footer.css          # Rodapé
│   │   ├── index.css           # Página inicial
│   │   ├── post.css            # Posts individuais
│   │   ├── blog.css            # Página do blog
│   │   ├── about.css           # Página sobre
│   │   └── contact.css         # Página de contato
│   │
│   ├── assets/js/               # JavaScript customizado
│   │   ├── addons.js           # Funcionalidades gerais
│   │   ├── contact.js          # Página de contato
│   │   └── post-enhancements.js # Melhorias para posts
│   │
│   ├── assets/base/             # Logos e imagens base
│   └── assets/uploads/          # Upload de conteúdo
│
├── 📄 Páginas
│   ├── pages/                   # Páginas estáticas
│   │   ├── about.html          # Sobre/Manifesto
│   │   ├── blog.html           # Lista de posts
│   │   └── contact.html        # Contato
│   ├── index.html              # Página inicial
│   └── 404.html                # Página de erro
│
└── 📚 Documentação
    └── README.md               # Este arquivo
```

---

## ⚙️ Sistema Modular

O Contramaré possui um **sistema modular otimizado** que permite ativar/desativar funcionalidades inteiras do site com alta performance.

### Configuração em `_config.yml`

```yaml
# Controle de funcionalidades
features:
  blog_page: true       # Página do blog
  contact_page: true    # Página de contato
  about_page: true      # Página sobre

# Mapeamento categoria → funcionalidade
category_feature_map:
  "Blog": "blog_page"
  "Sobre": "about_page"
```

### Como Funciona

O sistema utiliza **Jekyll Hooks** para máxima performance:

1. **Durante o build**, o plugin processa todos os posts
2. **Pre-computa** quais categorias estão ativas
3. **Filtra posts** baseado nas features ativas
4. **Disponibiliza dados** pre-computados para templates

### O que acontece quando uma funcionalidade está INATIVA:

- ❌ **Link removido** do menu de navegação
- ❌ **Posts da categoria ocultos** em todas as listas
- ❌ **Páginas mostram** "conteúdo indisponível"
- ❌ **Posts individuais** exibem mensagem de indisponibilidade

### Vantagens do Sistema

✅ **Performance otimizada** - processamento apenas no build
✅ **Controle granular** de conteúdo
✅ **Desenvolvimento incremental** de funcionalidades
✅ **Manutenção simplificada**
✅ **Deploy seletivo** de features

---

## ⚡ Otimizações de Performance

### CSS Condicional Inteligente

O site carrega CSS de forma **inteligente e condicional**:

#### CSS Global (sempre carregado)
```css
header.css    # Navegação
main.css      # Estilos base
footer.css    # Rodapé
```

#### CSS por Layout
```css
index.css     # Layout: default (página inicial)
post.css      # Layout: post (posts individuais)
```

#### CSS Customizado por Página
```yaml
---
layout: page
custom_css:
  - "/assets/css/animations.css"
  - "/assets/css/special-layout.css"
custom_js:
  - "/assets/js/special-functions.js"
---
```

### Outras Otimizações

- 🚀 **Compressão SASS** automática (`style: compressed`)
- 🖼️ **Otimização de imagens** via plugin
- 📱 **Preload de recursos** críticos
- 🔒 **Headers de segurança** configurados
- 📊 **Google Analytics 4** otimizado
- ⚡ **CDN Bootstrap** para performance

---

## 🔍 SEO e Analytics

### SEO Técnico Implementado

✅ **Meta tags estruturadas** com jekyll-seo-tag
✅ **Schema.org markup** (JSON-LD) automático
✅ **Sitemap.xml** automático
✅ **Feed RSS** otimizado
✅ **Canonical URLs** para evitar duplicação
✅ **Rich snippets** para posts
✅ **Open Graph** e Twitter Cards
✅ **Dados estruturados** em `_data/seo.yml`

### Configurações SEO Avançadas

O arquivo `_data/seo.yml` contém:

```yaml
# Imagem padrão para compartilhamento social
default_image: "/assets/base/contramare-social-image.jpg"

# Informações da organização
organization:
  name: "Contramaré"
  url: "https://contramare.com.br"
  logo: "/assets/base/contramare-icon.png"

# Informações do autor
author:
  name: "Neylon Santos"
  bio: "I'm a christian, software engineer, writer, and creator."

# Configurações de categorias
categories:
  Reflexões:
    description: "Artigos provocativos que desafiam o senso comum."
    color: "#2c3e50"
```

### Analytics e Monitoramento

- **Google Analytics 4** (G-XXXXXXXXXX)
- **Google Search Console** preparado
- **Performance tracking** implementado
- **Structured data** para rich results

### Template SEO para Posts

```yaml
---
layout: post
title: "Título otimizado (máx 60 chars)"
description: "Meta descrição atrativa (150-160 chars)"
image: '/assets/uploads/feature_image.jpg'
categories: Reflexões
tags: [reflexão, crescimento, autocontrole]
date: 2025-01-15 07:00:00 -0300
---
```

---

## ✍️ Conteúdo

### Tipos de Conteúdo

#### 📝 **Posts de Reflexão**
Artigos provocativos que desafiam comportamentos normalizados:
- Mediocridade emocional
- Transferência de responsabilidade
- Preguiça intelectual
- Crescimento pessoal através do desconforto

### Estrutura de Posts

Os posts seguem uma estrutura organizada:
```
_posts/
└── YYYY-MM-DD-titulo-do-post/
    ├── YYYY-MM-DD-titulo-do-post.markdown
    └── feature_image.jpg
```

### Adicionando Novo Conteúdo

#### Novo Post
```bash
# 1. Crie o diretório do post
mkdir _posts/$(date +%Y-%m-%d)-titulo-do-post

# 2. Use o template SEO
cp _posts/_template-post-seo.md _posts/$(date +%Y-%m-%d)-titulo-do-post/$(date +%Y-%m-%d)-titulo-do-post.markdown

# 3. Adicione imagem destacada
# Coloque a imagem em: _posts/$(date +%Y-%m-%d)-titulo-do-post/feature_image.jpg

# 4. Teste localmente
bundle exec jekyll serve --drafts
```

---

## 🚀 Deploy

### Configurações de Produção

```yaml
# _config.yml
url: "https://contramare.com.br"
baseurl: ""
domain: contramare.com.br
google_analytics: G-XXXXXXXXXX
```

### Deploy Automático
O site é **automaticamente publicado** a cada push:

```bash
git add .
git commit -m "Novo post: Título do Post"
git push origin feat/ctmr/refactor-and-improve-project
```

### Deploy Manual
```bash
# Build para produção
bundle exec jekyll build

# Upload da pasta _site para seu servidor
rsync -avz _site/ user@server:/path/to/site/
```

---

## 🤝 Contribuição

### Como Contribuir

1. **Fork** o repositório
2. **Crie** uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. **Abra** um Pull Request

### Diretrizes

- ✅ **Mantenha** o padrão de código existente
- ✅ **Teste** localmente antes de submeter
- ✅ **Documente** novas funcionalidades
- ✅ **Siga** as convenções de nomenclatura
- ✅ **Otimize** para performance e SEO

### Reportar Problemas

Use as [Issues do GitHub](https://github.com/neylonsantos/contramare/issues) para:
- 🐛 Reportar bugs
- 💡 Sugerir melhorias
- ❓ Fazer perguntas
- 🚀 Propor novas funcionalidades

---

## 📄 Licença

Este projeto está sob a **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Neylon Santos**

- 🌐 **Site:** [contramare.com.br](https://contramare.com.br)
- 📧 **Email:** contato@contramare.com.br
- 💼 **GitHub:** [@neylonsantos](https://github.com/neylonsantos)
- 🔗 **Pessoal:** [neylon.xyz](https://neylon.xyz)

---

## 🌊 Filosofia

> *"Não tenho todas as respostas. Mas tenho muitas perguntas. E acredito que, quando bem feitas, elas têm o poder de transformar."*

**Ser Contramaré** é ter coragem de olhar para si com sinceridade. É entender que crescer dói — e que isso é bom. É saber que maturidade não se alcança com likes, mas com confronto interno.

**Questionar é o primeiro passo. Mudar é a jornada.**

---

<div align="center">
  <img src="assets/base/contramare-line.png" alt="Contramaré" width="200">

  **🌊 Junte-se a nós nesta travessia. Aqui, não se navega em águas rasas.**
</div>
