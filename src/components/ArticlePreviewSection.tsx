
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const ArticlePreviewSection = () => {
  // Display the first article as a sample
  const featuredArticle = articles[0];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-background z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">I nostri articoli</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Approfondiamo i temi della crescita personale con analisi dettagliate e consigli pratici
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto frost-panel rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-64 md:h-80">
            <img 
              src={featuredArticle.coverImage} 
              alt={featuredArticle.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-left">
              <div className="inline-block px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white mb-2">
                {featuredArticle.category}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{featuredArticle.title}</h3>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span>Pubblicato il {featuredArticle.date}</span>
              <span>•</span>
              <span>{featuredArticle.readTime} min di lettura</span>
            </div>
            
            <p className="mb-6 leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            
            <Button asChild>
              <Link to={`/article/${featuredArticle.slug}`} className="group">
                Leggi l'articolo completo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {articles.slice(1).map((article) => (
            <div key={article.id} className="frost-panel rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <img 
                  src={article.coverImage} 
                  alt={article.title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                  <div className="inline-block px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white mb-2">
                    {article.category}
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{article.readTime} min di lettura</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/article/${article.slug}`} className="group">
                      Leggi
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlePreviewSection;
