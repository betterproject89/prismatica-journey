
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { articles } from "@/data/articles";

const ArticleView = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  
  useEffect(() => {
    // In a real app, this would fetch from an API
    const foundArticle = articles.find(a => a.slug === slug);
    setArticle(foundArticle || articles[0]); // Default to first article if not found
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-pulse frost-panel rounded-lg p-12">
          Caricamento articolo...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="pb-12">
          {/* Article Header */}
          <div className="w-full h-[40vh] relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
            <img 
              src={article.coverImage} 
              alt={article.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-4 left-4 z-20">
              <Button 
                variant="ghost" 
                size="sm" 
                className="frost-panel hover:bg-white/10"
                asChild
              >
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Torna alla home
                </Link>
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>Pubblicato il {article.date}</span>
              <span>•</span>
              <span>{article.category}</span>
              <span>•</span>
              <span>{article.readTime} min di lettura</span>
            </div>

            <div className="prose prose-invert max-w-none">
              {article.content.map((block: any, index: number) => (
                <div key={index} className="mb-8">
                  {block.type === 'paragraph' && <p className="text-lg leading-relaxed">{block.content}</p>}
                  {block.type === 'heading' && <h2 className="text-2xl font-bold mt-10 mb-6">{block.content}</h2>}
                  {block.type === 'image' && (
                    <figure className="my-8">
                      <img 
                        src={block.url} 
                        alt={block.caption || ''} 
                        className="w-full h-auto rounded-lg frost-panel p-1"
                      />
                      {block.caption && (
                        <figcaption className="text-center text-muted-foreground mt-2 text-sm">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                  {block.type === 'quote' && (
                    <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-xl">
                      {block.content}
                    </blockquote>
                  )}
                  {block.type === 'list' && (
                    <ul className="list-disc pl-6 space-y-2 my-6">
                      {block.items.map((item: string, i: number) => (
                        <li key={i} className="text-lg">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-background to-muted/20 py-16">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <div className="frost-panel p-8 rounded-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ti è piaciuto questo articolo?</h2>
                <p className="text-muted-foreground">Condividi l'articolo o scarica l'app per accedere a molto altro contenuto esclusivo</p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Button 
                  className="relative overflow-hidden group frost-panel"
                  size="lg"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <Share2 className="mr-2 h-4 w-4" />
                  Condividi
                </Button>
                
                <Button 
                  className="relative overflow-hidden group frost-panel"
                  size="lg"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <Download className="mr-2 h-4 w-4" />
                  Scarica l'app
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleView;
