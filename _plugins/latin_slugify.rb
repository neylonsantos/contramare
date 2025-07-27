module Jekyll
  module Drops
    class UrlDrop
      def latin_slugified_categories
        Array(@obj.data["categories"]).each_with_object(Set.new) do |category, set|
          set << Jekyll::Utils.slugify(category.to_s, mode: 'latin')
        end.to_a.join("/")
      end
    end
  end
end
