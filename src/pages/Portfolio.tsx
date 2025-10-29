import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { products } from "@/data/products";

const Portfolio = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nosso Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção de peças artesanais em crochê. Cada item é único e feito com dedicação.
          </p>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-secondary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Não encontrou o que procurava?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Criamos peças personalizadas sob encomenda. Entre em contato!
          </p>
          <a
            href="https://wa.me/5517991483104?text=Olá! Gostaria de encomendar uma peça personalizada."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Fale Conosco no WhatsApp
          </a>
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

export default Portfolio;
