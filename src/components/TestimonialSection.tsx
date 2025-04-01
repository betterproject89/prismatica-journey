
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Da quando ho iniziato a usare Prisma, la mia produttività è migliorata notevolmente. Gli articoli sono pratici e mi hanno aiutato a stabilire nuove abitudini.",
    author: "Marco B.",
    role: "Manager",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3"
  },
  {
    quote: "Adoro la sezione sul benessere mentale. I podcast sono di alta qualità e posso ascoltarli durante i miei spostamenti quotidiani.",
    author: "Laura T.",
    role: "Insegnante",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=5"
  },
  {
    quote: "Finalmente ho trovato un'app che integra diversi aspetti della crescita personale. I contenuti sulla gestione finanziaria mi hanno aiutato a risparmiare di più.",
    author: "Stefano M.",
    role: "Freelancer",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=7"
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm frost-panel mb-4">
            <span className="text-gradient font-medium">Testimonianze</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Le opinioni di chi usa Prisma</h2>
          <p className="text-white/70 md:text-lg max-w-[600px] mx-auto">
            Scopri come Prisma sta aiutando le persone nel loro percorso di crescita personale
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 relative">
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-30 blur-3xl -z-10"></div>
          
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="animate-fade-in frost-panel border-none bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${1.2 + index * 0.2}s` }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-conic from-primary/20 via-secondary/20 to-accent/20 blur-2xl opacity-60"></div>
                
                <div className="mb-6 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border border-white/10">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-4 flex">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className={`text-lg ${i < testimonial.rating ? "text-yellow-400" : "text-gray-500"}`}>★</span>
                  ))}
                </div>
                
                <p className="italic text-white/80 relative">
                  <span className="absolute -top-2 -left-1 text-4xl text-primary/40">"</span>
                  <span className="relative">{testimonial.quote}</span>
                  <span className="absolute -bottom-5 -right-1 text-4xl text-primary/40">"</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm font-medium border-b border-dashed border-white/30 hover:border-white/70 py-1">
            Leggi altre testimonianze
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
