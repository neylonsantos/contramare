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
- [Sistema Modular Avançado](#-sistema-modular-avançado)
- [Otimizações de Performance](#-otimizações-de-performance)
- [SEO e Analytics Avançados](#-seo-e-analytics-avançados)
- [Sistema de Conteúdo](#-sistema-de-conteúdo)
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
- **Sistema modular otimizado** com Jekyll Hooks para máxima performance
- **Carregamento condicional de CSS/JS** baseado em layout e front matter
- **Filtragem automática de conteúdo** com pre-computação durante build
- **URLs amigáveis** com Latin Slugify customizado
- **Estrutura de permalinks** baseada em categorias

### 🎨 Design e UX
- **Design responsivo** com Bootstrap 5.3.6
- **Tipografia elegante** com Google Fonts (Comfortaa)
- **Interface limpa** focada na experiência de leitura
- **Navegação intuitiva** com sistema de categorias ativas
- **Preload de recursos críticos** para performance visual

### 🔍 SEO e Performance Avançados
- **SEO técnico completo** com jekyll-seo-tag + meta tags customizadas
- **Schema.org markup avançado** (Organization, WebSite, SearchAction, Article)
- **Meta tags geográficas** para targeting brasileiro
- **Rich snippets otimizados** para redes sociais
- **Sitemap automático**, feed RSS e redirects
- **Compressão SASS** e otimização de imagens automática

---

## 🛠️ Tecnologias

### Core
- **Jekyll 4.4.1** - Gerador de sites estáticos
- **Ruby** - Linguagem base
- **Liquid** - Template engine
- **Kramdown** - Processador Markdown com GFM
- **Rouge** - Syntax highlighting

### Frontend
- **Bootstrap 5.3.6** - Framework CSS responsivo
- **Bootstrap Icons 1.11.3** - Biblioteca de ícones
- **Google Fonts (Comfortaa)** - Tipografia principal
- **Material Icons** - Ícones complementares
- **CSS customizado modular** com carregamento condicional
- **JavaScript vanilla** otimizado para interações

### Plugins Jekyll
- **jekyll-seo-tag** - SEO automático avançado
- **jekyll-sitemap** - Geração automática de sitemap
- **jekyll-feed** - Feed RSS otimizado
- **jekyll-redirect-from** - Sistema de redirecionamentos
- **jekyll-compress-images** - Otimização automática de imagens (fork customizado)

### Plugins Customizados
- **feature_filter.rb** - Sistema modular com Jekyll Hooks (10-20x mais rápido)
- **latin_slugify.rb** - URLs amigáveis com caracteres latinos

### Analytics e Monitoramento
- **Google Analytics 4** (G-RQ21K77JYG) - Análise de tráfego
- **Microsoft Clarity** - Heatmaps e gravações de sessão
- **Google Search Console** - Monitoramento SEO

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
│   │   ├── style.scss          # Arquivo SASS principal (gera style.css)
│   │   ├── index.css           # Página inicial
│   │   ├── post.css            # Posts individuais
│   │   ├── blog.css            # Página do blog
│   │   ├── about.css           # Página sobre
│   │   ├── contact.css         # Página de contato
│   │   └── tags.css            # Página de tags
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

## ⚙️ Sistema Modular Avançado

O Contramaré possui um **sistema modular revolucionário** que utiliza **Jekyll Hooks** para ativar/desativar funcionalidades inteiras com performance 10-20x superior ao sistema convencional.

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
  "Reflexões": "blog_page"
```

### Arquitetura Otimizada com Jekyll Hooks

O sistema utiliza **Jekyll Hooks** no evento `site:post_read` para máxima performance:

1. **Durante o build** (1x apenas): Plugin processa todos os posts
2. **Pre-computa** categorias ativas usando `Set` para O(1) lookup
3. **Filtra posts** uma única vez baseado nas features
4. **Armazena dados** pre-computados em `site.data`
5. **Templates acessam** dados sem processamento adicional

### Dados Pre-computados Disponíveis

```liquid
<!-- Posts já filtrados (recomendado) -->
{% for post in site.data.filtered_posts %}
  <h2>{{ post.title }}</h2>
{% endfor %}

<!-- Categorias ativas -->
{{ site.data.active_categories | join: ", " }}

<!-- Estatísticas -->
{% assign stats = feature_stats %}
Posts ativos: {{ stats.active_posts }}/{{ stats.total_posts }}
```

### Comportamento por Estado de Feature

#### ✅ Feature ATIVA:
- ✅ **Link aparece** no menu de navegação
- ✅ **Posts visíveis** em todas as listas
- ✅ **Páginas funcionam** normalmente
- ✅ **Posts acessíveis** individualmente

#### ❌ Feature INATIVA:
- ❌ **Link removido** do menu
- ❌ **Posts ocultos** em listas e filtros
- ❌ **Páginas mostram** "conteúdo indisponível"
- ❌ **Posts individuais** com mensagem de indisponibilidade

### Vantagens da Arquitetura

✅ **Performance 10-20x superior** - zero overhead de runtime
✅ **Escalabilidade constante** - O(1) para qualquer número de posts
✅ **Logs informativos** durante build com estatísticas
✅ **Retrocompatibilidade total** com código existente
✅ **Desenvolvimento incremental** de funcionalidades
✅ **Deploy seletivo** de features sem impacto

---

## ⚡ Otimizações de Performance

### Sistema de Carregamento Inteligente

#### 🎯 CSS Condicional Avançado

O site implementa carregamento de CSS **ultra-otimizado** baseado em contexto:

```scss
// CSS Global (sempre carregado)
style.css     # Compilado via SASS com compressão
```

```liquid
<!-- CSS por Layout (carregamento automático) -->
{% if page.layout == 'post' %}
  <link rel="stylesheet" href="/assets/css/post.css">
  <link rel="stylesheet" href="/assets/css/tags.css">
{% endif %}
```

```yaml
# CSS Customizado por Página (front matter)
---
layout: default
custom_css:
  - "/assets/css/animations.css"
  - "/assets/css/special-features.css"
custom_js:
  - "/assets/js/interactive-elements.js"
---
```

#### ⚡ Preload de Recursos Críticos

```html
<!-- Preload estratégico implementado -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Comfortaa" as="style">
<link rel="preload" href="/assets/base/contramare-icon.png" as="image">
<link rel="preload" href="/assets/css/style.css" as="style">

<!-- Preconnect para CDNs -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://cdn.jsdelivr.net">
```

### 🛡️ Otimizações de Segurança e Performance

- 🚀 **Compressão SASS** automática (`style: compressed`)
- 🖼️ **Otimização de imagens** automática via plugin customizado
- 📱 **Recursos críticos preloadados** para LCP otimizado
- 🔒 **Headers de segurança** (X-Frame-Options, X-XSS-Protection, etc.)
- ⚡ **CDN Bootstrap 5.3.6** com integridade verificada
- 🎯 **JavaScript com defer** para non-blocking loading
- 📊 **Analytics otimizados** (GA4 + Clarity) com carregamento assíncrono

### 🔧 Configurações de Build Otimizadas

```yaml
# _config.yml - Configurações de performance
sass:
  style: compressed

# Headers de segurança
webrick:
  headers:
    X-Frame-Options: SAMEORIGIN
    X-Content-Type-Options: nosniff
    X-XSS-Protection: 1; mode=block

# Otimização de imagens
compress_images:
  images_path: "assets/**/*.{gif,png,jpg,jpeg,svg}"
```

---

## 🔍 SEO e Analytics Avançados

### 🎯 SEO Técnico Completo

#### Estrutura Base
✅ **jekyll-seo-tag** + meta tags customizadas avançadas
✅ **Schema.org markup completo** (Organization, WebSite, SearchAction, Article)
✅ **Meta tags geográficas** para targeting brasileiro (geo.region, geo.country)
✅ **Robots e Googlebot** com diretrizes específicas
✅ **Canonical URLs** automáticos
✅ **Sitemap.xml** e **Feed RSS** otimizados

#### Rich Snippets e Social Media
✅ **Open Graph** e **Twitter Cards** otimizados
✅ **Article markup** com author, published_time, section e tags
✅ **Structured data** para SearchAction (busca no site)
✅ **Publisher information** completa

### 📊 Dados Estruturados Avançados

#### Configuração em `_data/seo.yml`:

```yaml
# SEO Configuration Data
default_image: "/assets/base/contramare-icon.png"

organization:
  name: "Contramaré"
  url: "https://contramare.com.br"
  logo: "/assets/base/contramare-icon.png"
  same_as:
    - "https://x.com/contramare_blog"
    - "https://instagram.com/contramare_blog"

author:
  name: "Neylon Santos"
  bio: "I'm a christian, software engineer, writer, and creator."
  social:
    x: "https://x.com/neylonxyz"
    github: "https://github.com/neylonssantos"

# Configurações por categoria
categories:
  Reflexões:
    description: "Artigos provocativos que desafiam o senso comum."
    color: "#2c3e50"
```

#### Schema.org Automático implementado:

```javascript
// WebSite + SearchAction
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://contramare.com.br",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://contramare.com.br/search?q={search_term_string}"
  }
}
```

### 📈 Analytics Duplo

#### Google Analytics 4
```javascript
// Implementação otimizada GA4
gtag('config', 'G-RQ21K77JYG');
```

#### Microsoft Clarity
```javascript
// Heatmaps e gravações de sessão
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    // ID: spvfnlcybw
```

### 📝 Template SEO Completo para Posts

```yaml
---
layout: post
title: "Título otimizado para SEO (máximo 60 caracteres)"
description: "Meta descrição atrativa de 150-160 caracteres"
date: 2025-01-15 07:00:00 -0300
image: '/assets/uploads/posts/slug-do-post/featured.jpg'
categories: [Reflexões]
tags: [tag1, tag2, tag3, tag4]  # máximo 5 tags
author: Neylon Santos
keywords: "palavra-chave-principal, secundária"
reading_time: 5  # tempo estimado em minutos
featured: true  # destaque
---
```

### 🎯 URLs Amigáveis Avançadas

```yaml
# _config.yml
permalink: /:latin_slugified_categories/:slug/

# Exemplo de URL gerada:
# https://contramare.com.br/reflexoes/voce-ainda-nao-me-viu-com-raiva/
```

### ✅ Checklist SEO Automático

O template inclui checklist completo para posts:
- 📏 **Título**: máx 60 chars com palavra-chave
- 📄 **Descrição**: 150-160 chars persuasiva
- 🖼️ **Imagem**: 1200x630px otimizada
- 🏷️ **Tags**: máx 5 relevantes
- 📊 **Estrutura**: H2/H3, parágrafos curtos, listas
- 🔗 **Links internos**: mínimo 2 por post
- 📈 **Call-to-action**: engajamento natural

---

## ✍️ Sistema de Conteúdo

### 🎯 Filosofia Editorial

#### 📝 **Posts de Reflexão (Categoria Principal)**
Artigos provocativos que funcionam como espelhos e confrontos internos:
- **Mediocridade emocional** - questionar padrões de comportamento
- **Transferência de responsabilidade** - combater vitimismo
- **Preguiça intelectual** - estimular pensamento crítico
- **Crescimento através do desconforto** - abraçar o que incomoda

### 📁 Estrutura Organizada de Posts

```
_posts/
├── _template-post-seo.md           # Template com checklist SEO completo
├── YYYY-MM-DD-titulo-do-post.markdown
└── ...

assets/uploads/posts/
├── YYYY-MM-DD-titulo-do-post/
│   ├── featured.jpg               # Imagem destacada (1200x630px)
│   └── [outras-imagens.jpg]       # Imagens do conteúdo
└── ...
```

### 🚀 Workflow de Criação de Conteúdo

#### 1. Criar Novo Post (Método Recomendado)
```bash
# Use o template SEO otimizado
cp _posts/_template-post-seo.md _posts/$(date +%Y-%m-%d)-titulo-do-post.markdown

# Crie pasta para assets do post
mkdir -p assets/uploads/posts/$(date +%Y-%m-%d)-titulo-do-post/
```

#### 2. Configurar Front Matter
```yaml
---
layout: post
title: "Título Otimizado (máx 60 chars)"
description: "Meta descrição atrativa (150-160 chars)"
date: 2025-01-15 07:00:00 -0300
image: '/assets/uploads/posts/slug-do-post/featured.jpg'
categories: [Reflexões]
tags: [comportamento, disciplina, atemporal]
author: Neylon Santos
keywords: "palavra-chave-principal, secundária"
reading_time: 5
featured: true
---
```

#### 3. Desenvolvimento Local
```bash
# Teste com drafts
bundle exec jekyll serve --drafts

# Build com profiling
bundle exec jekyll build --profile

# Limpeza de cache
bundle exec jekyll clean
```

### 📊 Organização por Funcionalidades

O sistema modular permite controle granular do conteúdo:

```yaml
# _config.yml
features:
  blog_page: true        # Posts da categoria "Blog"
  about_page: true       # Conteúdo sobre o projeto

category_feature_map:
  "Reflexões": "blog_page"  # Posts de reflexão
  "Blog": "blog_page"       # Posts gerais
  "Sobre": "about_page"     # Páginas institucionais
```

### ✅ Padrões de Qualidade

#### Template com Checklist Automático:
- ✅ **SEO otimizado** - título, descrição, tags
- ✅ **Estrutura clara** - H2/H3, parágrafos curtos
- ✅ **Imagens otimizadas** - 1200x630px para social
- ✅ **Links internos** - conexões entre posts
- ✅ **Call-to-action** - engajamento natural
- ✅ **Revisão completa** - ortografia e fluidez

---

## 🚀 Deploy

### Configurações de Produção

```yaml
# _config.yml
url: "https://contramare.com.br"
baseurl: ""
domain: contramare.com.br
google_analytics: G-RQ21K77JYG
```

### Deploy Automático
O site é **automaticamente publicado** a cada push:

```bash
git add .
git commit -m "Novo post: Título do Post"
git push origin master
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
*"I'm a christian, software engineer, writer, and creator."*

- 🌐 **Site:** [contramare.com.br](https://contramare.com.br)
- 📧 **Email:** contato@contramare.com.br
- 💼 **GitHub:** [@neylonssantos](https://github.com/neylonssantos)
- 🐦 **X (Twitter):** [@neylonxyz](https://x.com/neylonxyz)
- 📘 **Instagram:** [@contramare_blog](https://instagram.com/contramare_blog)

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
