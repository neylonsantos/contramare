# Sistema de Funcionalidades Modulares - Contramaré

Este documento explica como ativar e desativar funcionalidades do site de forma modular.

## Como funciona

O sistema utiliza variáveis de configuração no arquivo `_config.yml` para controlar quais páginas e funcionalidades estão ativas no site. **Agora também filtra automaticamente os posts** baseado nas funcionalidades ativas.

## Configuração

No arquivo `_config.yml`, você encontrará as seções:

```yaml
# Modular Features Configuration
features:
  quotes_page: false  # true para ativar, false para desativar
  blog_page: true
  contact_page: true
  about_page: true

# Mapeamento de categorias para funcionalidades
category_feature_map:
  "Frases": "quotes_page"
  "Blog": "blog_page"
  # Adicione outras categorias conforme necessário
```

## Funcionalidades disponíveis

### 1. Página de Frases (`quotes_page`)
- **Ativa**:
  - Mostra a página de frases completa
  - Posts da categoria "Frases" aparecem em listas
  - Posts individuais de frases são acessíveis
- **Inativa**:
  - Mostra página de "em desenvolvimento"
  - Remove o link do menu
  - **Posts de frases ficam ocultos** em todas as listas
  - **Posts individuais mostram mensagem de indisponível**

### 2. Página do Blog (`blog_page`)
- **Ativa**: Página do blog acessível normalmente
- **Inativa**: Remove o link do menu de navegação

### 3. Página de Contato (`contact_page`)
- **Ativa**: Página de contato acessível normalmente
- **Inativa**: Remove o link do menu de navegação

### 4. Página Sobre (`about_page`)
- **Ativa**: Página sobre acessível normalmente
- **Inativa**: Remove o link do menu de navegação

## ✨ **Nova Funcionalidade: Filtragem Automática de Posts**

O sistema agora filtra automaticamente os posts baseado nas funcionalidades ativas:

- **Listas de posts**: Apenas posts de categorias ativas aparecem
- **Posts individuais**: Posts de categorias inativas mostram mensagem de indisponível
- **Página inicial**: "Últimos posts" só mostra posts de funcionalidades ativas
- **Página de blog**: Só lista posts de funcionalidades ativas

## Como ativar/desativar uma funcionalidade

1. Abra o arquivo `_config.yml`
2. Localize a seção `features:`
3. Altere o valor da funcionalidade desejada:
   - `true` = ativada
   - `false` = desativada
4. Salve o arquivo
5. Reinicie o servidor Jekyll (`bundle exec jekyll serve`)

### Exemplo: Ativando a página de frases

```yaml
features:
  quotes_page: true  # ← Mude de false para true
```

**Resultado:**
- ✅ Link "FRASES" aparece no menu
- ✅ Página `/quotes/` fica acessível
- ✅ Posts da categoria "Frases" aparecem em listas
- ✅ Posts individuais de frases ficam acessíveis

## Vantagens do sistema

- **Modular**: Cada funcionalidade pode ser controlada independentemente
- **Simples**: Apenas uma alteração no `_config.yml`
- **Completo**: Filtra páginas, menu, listas E posts individuais
- **Profissional**: Páginas e posts inativos mostram mensagem adequada
- **Limpo**: Conteúdo inativo fica completamente oculto
- **Flexível**: Fácil de adicionar novas funcionalidades no futuro

## Adicionando novas categorias

Para adicionar uma nova categoria que pode ser controlada:

1. Adicione a funcionalidade em `_config.yml`:
```yaml
features:
  nova_categoria_page: false
```

2. Adicione o mapeamento da categoria:
```yaml
category_feature_map:
  "NovaCategoria": "nova_categoria_page"
```

3. Posts com `categories: NovaCategoria` serão automaticamente filtrados!

## Estrutura técnica

O sistema utiliza:
- **Filtros Liquid personalizados** (`_plugins/feature_filter.rb`)
- **Condicionais em layouts** (proteção de posts individuais)
- **Filtragem em includes** (listas de posts)
- **Configuração centralizada** (`_config.yml`)

## Estado atual

- ✅ **Página de frases**: DESATIVADA
  - ❌ Link não aparece no menu
  - ❌ Posts de frases não aparecem em listas
  - ❌ Posts individuais de frases mostram mensagem de indisponível
- ✅ **Outras funcionalidades**: ATIVAS

## Resolução de problemas

Se posts não estão sendo filtrados corretamente:

1. Verifique se a categoria do post está no `category_feature_map`
2. Certifique-se de reiniciar o Jekyll após mudanças no `_config.yml`
3. Verifique se a pasta `_plugins` existe e contém `feature_filter.rb`

## Adicionando novas funcionalidades

Para adicionar uma nova funcionalidade modular:

1. Adicione a configuração em `_config.yml`:
```yaml
features:
  nova_funcionalidade: false
```

2. Adicione condicionais nas páginas:
```html
{% if site.features.nova_funcionalidade %}
  <!-- conteúdo da funcionalidade -->
{% else %}
  <!-- mensagem de funcionalidade inativa -->
{% endif %}
```

3. Adicione condicionais no menu (se aplicável):
```html
{% if site.features.nova_funcionalidade %}
<li class="nav-item">
  <a class="nav-link" href="/nova-pagina">NOVA PÁGINA</a>
</li>
{% endif %}