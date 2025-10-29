import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Award, Clock } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";
import heroPattern from "@/assets/hero-pattern.jpg";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProducts = products.slice(0, 6);

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "5517991483104";
    const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre as peças artesanais da Delicatta.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPattern})`, backgroundBlendMode: 'overlay', backgroundColor: 'rgba(255, 251, 245, 0.85)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 animate-fade-up">
            Delicatta
          </h1>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up">
            Crochê com Carinho
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up">
            Peças artesanais únicas em crochê, feitas com amor e dedicação
          </p>
          <Link to="/portfolio">
            <Button variant="rose" size="lg" className="animate-fade-up">
              Conheça Nosso Portfolio
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Trabalhos em Destaque</h2>
          <p className="text-muted-foreground">Conheça algumas de nossas peças artesanais</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/portfolio">
            <Button variant="outline" size="lg">
              Ver Portfolio Completo
            </Button>
          </Link>
        </div>
      </section>

      {/* About Summary */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Artesanato com Amor</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Delicatta nasceu da paixão pelo artesanato em crochê e do desejo de criar peças que contam histórias. 
                Cada trabalho é desenvolvido com dedicação, transformando novelos coloridos em arte feita à mão.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-rose mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Feito com Amor</h3>
                    <p className="text-sm text-muted-foreground">Dedicação em cada detalhe</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-rose mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Peças Únicas</h3>
                    <p className="text-sm text-muted-foreground">Cada item é exclusivo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-rose mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">100% Manual</h3>
                    <p className="text-sm text-muted-foreground">Artesanato autêntico</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-rose mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Qualidade</h3>
                    <p className="text-sm text-muted-foreground">Materiais premium</p>
                  </div>
                </div>
              </div>
              <Link to="/sobre">
                <Button variant="outline">Saiba Mais</Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={featuredProducts[0]?.image}
                alt="Processo artesanal"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Acompanhe Nosso Trabalho</h2>
          <a
            href="https://instagram.com/delicatta.crochett"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose hover:underline"
          >
            @delicatta.crochett
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => window.open("https://instagram.com/delicatta.crochett", "_blank")}
            variant="outline"
          >
            Seguir no Instagram
          </Button>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-secondary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Pronto para ter uma peça exclusiva?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato e transforme sua ideia em realidade
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
          >
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default Home;
