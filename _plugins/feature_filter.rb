require 'set'

# Plugin otimizado usando Jekyll Hooks
# Processa posts durante a build para máxima performance
module FeatureFilterOptimized
  # Hook executado após carregar todos os posts
  Jekyll::Hooks.register :site, :post_read do |site|
    Jekyll.logger.info "FeatureFilter:", "Processando posts por features ativas..."
    process_posts_by_features(site)
  end

  def self.process_posts_by_features(site)
    features = site.config['features'] || {}
    category_map = site.config['category_feature_map'] || {}

    # Pre-computa quais categorias estão ativas
    active_categories = Set.new
    category_map.each do |category, feature_key|
      active_categories << category if features[feature_key] == true
    end

    # Filtra posts baseado nas features ativas
    active_posts = site.posts.docs.select do |post|
      post_categories = extract_categories(post)

      # Posts sem categoria são sempre incluídos
      next true if post_categories.empty?

      # Inclui post se:
      # 1. Tem categoria não mapeada (sempre ativa), OU
      # 2. Tem pelo menos uma categoria ativa
      post_categories.any? do |category|
        !category_map.key?(category) || active_categories.include?(category)
      end
    end

    # Disponibiliza dados pre-computados para templates
    site.data['filtered_posts'] = active_posts
    site.data['active_categories'] = active_categories.to_a
    site.data['feature_stats'] = {
      'total_posts' => site.posts.docs.length,
      'active_posts' => active_posts.length,
      'filtered_count' => site.posts.docs.length - active_posts.length
    }

    Jekyll.logger.info "FeatureFilter:", "✓ #{active_posts.length}/#{site.posts.docs.length} posts ativos"
  end

  def self.extract_categories(post)
    categories = post.data['categories']
    return [] if categories.nil?

    [categories].flatten.compact.map(&:to_s)
  end
end

# Filtros Liquid otimizados - apenas acessam dados pre-computados
module FeatureFilterLiquid
  def posts_by_active_features(posts = nil)
    site = @context.registers[:site]

    # Se não passou posts específicos, retorna os pre-computados
    return site.data['filtered_posts'] || [] if posts.nil?

    # Filtra posts específicos usando dados pre-computados
    active_categories = Set.new(site.data['active_categories'] || [])
    category_map = site.config['category_feature_map'] || {}

    posts.select do |post|
      post_categories = FeatureFilterOptimized.extract_categories(post)
      next true if post_categories.empty?

      post_categories.any? do |category|
        !category_map.key?(category) || active_categories.include?(category)
      end
    end
  end

  def category_is_active(category)
    return true if category.nil? || category.empty?

    site = @context.registers[:site]
    active_categories = site.data['active_categories'] || []
    category_map = site.config['category_feature_map'] || {}

    # Categoria ativa se não está mapeada OU está na lista de ativas
    !category_map.key?(category.to_s) || active_categories.include?(category.to_s)
  end

  def feature_stats
    @context.registers[:site].data['feature_stats'] || {}
  end
end

Liquid::Template.register_filter(FeatureFilterLiquid)