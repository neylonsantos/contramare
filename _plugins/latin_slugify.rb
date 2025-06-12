Jekyll::Hooks.register :posts, :pre_render do |post|
  # Aplica slugify com mode latin para remover acentos das categorias nas URLs
  if post.data['categories']
    categories = [post.data['categories']].flatten
    slug_categories = categories.map { |cat| Jekyll::Utils.slugify(cat, mode: 'latin') }

    # Define o permalink usando categorias sem acentos
    if post.data['permalink'].nil?
      category_slug = slug_categories.first || 'blog'
      title_slug = Jekyll::Utils.slugify(post.data['title'], mode: 'latin')
      post.data['permalink'] = "/#{category_slug}/#{title_slug}/"
    end
  end
end