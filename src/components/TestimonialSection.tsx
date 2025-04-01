
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Da quando ho iniziato a usare Prisma, la mia produttività è migliorata notevolmente. Gli articoli sono pratici e mi hanno aiutato a stabilire nuove abitudini.",
    author: "Marco B.",
    role: "Manager",
    rating: 5
  },
  {
    quote: "Adoro la sezione sul benessere mentale. I podcast sono di alta qualità e posso ascoltarli durante i miei spostamenti quotidiani.",
    author: "Laura T.",
    role: "Insegnante",
    rating: 5
  },
  {
    quote: "Finalmente ho trovato un'app che integra diversi aspetti della crescita personale. I contenuti sulla gestione finanziaria mi hanno aiutato a risparmiare di più.",
    author: "Stefano M.",
    role: "Freelancer",
    rating: 4
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-muted/20 relative">
      <div className="absolute inset-0 opacity-20 z-0">
        <img 
          src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
          alt="Background Texture" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <h2 className="text-3xl font-bold tracking-tight">Le opinioni di chi usa Prisma</h2>
          <p className="text-muted-foreground mt-2">
            Scopri come Prisma sta aiutando le persone nel loro percorso di crescita
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fade-in glass-morphism border-white/10 hover:bg-white/5 transition-all" style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
