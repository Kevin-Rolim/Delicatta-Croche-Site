import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Award, ShieldCheck, Droplets, Wind, Sun, Instagram, MapPin, Phone, Clock, CheckCircle2, Package, Truck, HelpCircle } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState, FormEvent } from "react";
import ProductModal from "@/components/ProductModal";
import heroPattern from "@/assets/hero-pattern.jpg";
import aboutImage from "@/assets/about-process.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const handleWhatsApp = () => {
    const phoneNumber = "5517991483104";
    const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre as peças artesanais da Delicatta.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.subject || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    const whatsappMessage = encodeURIComponent(`*Contato via Site*\n\n` + `*Nome:* ${formData.name}\n` + `*WhatsApp:* ${formData.whatsapp}\n` + `${formData.email ? `*Email:* ${formData.email}\n` : ''}` + `*Assunto:* ${formData.subject}\n\n` + `*Mensagem:*\n${formData.message}`);
    window.open(`https://wa.me/5517991483104?text=${whatsappMessage}`, "_blank");
    setFormData({
      name: "",
      whatsapp: "",
      email: "",
      subject: "",
      message: ""
    });
    toast.success("Redirecionando para o WhatsApp...");
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 bg-cover bg-center" style={{
      backgroundImage: `url(${heroPattern})`,
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(255, 251, 245, 0.85)'
    }}>
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
          <Button variant="rose" size="lg" className="animate-fade-up" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Conheça Nosso Portfolio
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Nosso Portfolio</h2>
          <p className="text-muted-foreground">Explore nossa coleção de peças artesanais em crochê</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => <ProductCard key={product.id} name={product.name} image={product.image} onClick={() => handleProductClick(product)} />)}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-secondary to-accent p-8 rounded-lg">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
              Não encontrou o que procurava?
            </h3>
            <p className="text-muted-foreground mb-6">
              Criamos peças personalizadas sob encomenda. Entre em contato!
            </p>
            <Button onClick={handleWhatsApp} size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Sobre a Delicatta</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça a história e o processo artesanal por trás de cada peça
            </p>
          </div>

          {/* História */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">Nossa História</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Delicatta nasceu da paixão pelo artesanato em crochê e do desejo de criar peças que contam histórias. 
                Cada trabalho é desenvolvido com dedicação, transformando novelos coloridos em arte feita à mão.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O que começou como um hobby se transformou em uma forma de compartilhar amor e dedicação através 
                de peças únicas e especiais. Cada criação carrega consigo o cuidado e a atenção aos detalhes que 
                fazem do artesanato em crochê uma verdadeira arte.
              </p>
            </div>
            <div className="relative">
              <img src={aboutImage} alt="Processo artesanal" className="rounded-lg shadow-xl" />
            </div>
          </div>

          {/* Processo */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Nosso Processo</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada peça passa por um cuidadoso processo artesanal
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              Selecionamos fios de alta qualidade, escolhemos os pontos ideais e trabalhamos cada detalhe 
              com atenção. O resultado são produtos únicos feitos para durar, com acabamento impecável e 
              todo o carinho que o artesanato manual proporciona.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-rose">1</span>
                </div>
                <h4 className="font-semibold mb-2">Seleção de Materiais</h4>
                <p className="text-sm text-muted-foreground">Escolhemos fios de algodão e materiais de qualidade</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-rose">2</span>
                </div>
                <h4 className="font-semibold mb-2">Criação Manual</h4>
                <p className="text-sm text-muted-foreground">
                  Cada ponto é feito à mão com técnicas tradicionais de crochê
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-rose">3</span>
                </div>
                <h4 className="font-semibold mb-2">Acabamento</h4>
                <p className="text-sm text-muted-foreground">
                  Finalização cuidadosa garantindo durabilidade e beleza
                </p>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Nossos Valores</h3>
              <p className="text-muted-foreground">O que nos guia em cada criação</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <Award className="h-10 w-10 text-rose mx-auto mb-4" />
                <h4 className="font-semibold mb-2">100% Artesanal</h4>
                <p className="text-sm text-muted-foreground">
                  Cada peça é feita manualmente, sem uso de máquinas
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <Heart className="h-10 w-10 text-rose mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Feito com Amor</h4>
                <p className="text-sm text-muted-foreground">
                  Dedicação e carinho em cada detalhe
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <Sparkles className="h-10 w-10 text-rose mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Peças Únicas</h4>
                <p className="text-sm text-muted-foreground">
                  Cada item é exclusivo e especial
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <ShieldCheck className="h-10 w-10 text-rose mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Qualidade Garantida</h4>
                <p className="text-sm text-muted-foreground">
                  Materiais premium e acabamento impecável
                </p>
              </div>
            </div>
          </div>

          {/* Cuidados */}
          <div>
            <div className="text-center mb-12">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Cuidados com suas Peças</h3>
              <p className="text-muted-foreground">Como manter suas peças artesanais sempre bonitas</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="flex items-start gap-4 bg-background p-6 rounded-lg">
                <Droplets className="h-6 w-6 text-rose flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Lavagem</h4>
                  <p className="text-sm text-muted-foreground">
                    Lavar à mão com água fria e sabão de coco ou neutro
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background p-6 rounded-lg">
                <Wind className="h-6 w-6 text-rose flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Secagem</h4>
                  <p className="text-sm text-muted-foreground">
                    Secar à sombra, não usar secadora ou torcer a peça
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background p-6 rounded-lg">
                <Sun className="h-6 w-6 text-rose flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Conservação</h4>
                  <p className="text-sm text-muted-foreground">
                    Não usar alvejante, ferro quente ou produtos químicos fortes
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto p-6 bg-background rounded-lg border border-border">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Dica:</strong> Peças de crochê são delicadas e exigem cuidados especiais. 
                Seguindo essas orientações, sua peça artesanal durará por muitos anos mantendo sua beleza original.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section id="instagram" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Acompanhe Nosso Trabalho</h2>
          <a href="https://instagram.com/delicatta.crochett" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline text-lg">
            @delicatta.crochett
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.slice(0, 6).map(product => <div key={product.id} className="aspect-square overflow-hidden rounded-lg">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>)}
        </div>

        <div className="text-center mt-8">
          <Button onClick={() => window.open("https://instagram.com/delicatta.crochett", "_blank")} variant="outline" size="lg">
            Seguir no Instagram
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para transformar suas ideias em realidade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Coluna Esquerda - Informações */}
            <div className="space-y-8">
              {/* Contato Direto */}
              <div>
                <h3 className="font-serif text-xl font-bold mb-6">Contato Direto</h3>
                <div className="space-y-4">
                  <a href="https://wa.me/5517991483104" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                    <Phone className="h-5 w-5 text-rose flex-shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">(17) 99148-3104</p>
                    </div>
                  </a>

                  <a href="https://instagram.com/delicatta.crochett" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                    <Instagram className="h-5 w-5 text-rose flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <p className="text-sm text-muted-foreground">@delicatta.crochett</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                    <MapPin className="h-5 w-5 text-rose flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Localização</p>
                      <p className="text-sm text-muted-foreground">São José do Rio Preto - SP e região</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                    <Clock className="h-5 w-5 text-rose flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Horário de Atendimento</p>
                      <p className="text-sm text-muted-foreground">Seg-Sex, 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Como Funciona */}
              <div>
                <h3 className="font-serif text-xl font-bold mb-6">Como Funciona</h3>
                <div className="space-y-4">
                  {[{
                  step: "1",
                  title: "Entre em contato",
                  desc: "Via WhatsApp, Instagram ou formulário"
                }, {
                  step: "2",
                  title: "Conte sua ideia",
                  desc: "Escolha uma peça do portfolio ou descreva sua ideia personalizada"
                }, {
                  step: "3",
                  title: "Receba orçamento",
                  desc: "Você receberá um orçamento personalizado e prazo de entrega"
                }, {
                  step: "4",
                  title: "Acompanhe a produção",
                  desc: "Você poderá acompanhar o desenvolvimento da sua peça"
                }, {
                  step: "5",
                  title: "Receba sua peça",
                  desc: "Entrega ou retirada conforme combinado"
                }].map(item => <div key={item.step} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-rose/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-rose">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>)}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="font-serif text-xl font-bold mb-6">Perguntas Frequentes</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-rose" />
                      Fazem peças personalizadas?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sim! Adoramos criar peças exclusivas baseadas nas suas ideias e necessidades.
                    </p>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Package className="h-4 w-4 text-rose" />
                      Qual o prazo de produção?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Varia de 5 a 20 dias úteis dependendo da complexidade da peça. Informamos o prazo no orçamento.
                    </p>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Truck className="h-4 w-4 text-rose" />
                      Enviam para outras cidades?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sim! Trabalhamos com envios para todo o Brasil via Correios ou transportadora.
                    </p>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-rose" />
                      Aceitam sugestões de cores e tamanhos?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Claro! Todas as nossas peças podem ser adaptadas em cores, tamanhos e detalhes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Formulário */}
            <div>
              <div className="bg-background p-8 rounded-lg border border-border sticky top-24">
                <h3 className="font-serif text-xl font-bold mb-6">Envie sua Mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input id="name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} placeholder="Seu nome completo" required />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input id="whatsapp" value={formData.whatsapp} onChange={e => setFormData({
                    ...formData,
                    whatsapp: e.target.value
                  })} placeholder="(00) 00000-0000" required />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} placeholder="seu@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input id="subject" value={formData.subject} onChange={e => setFormData({
                    ...formData,
                    subject: e.target.value
                  })} placeholder="Sobre o que você quer falar?" required />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea id="message" value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} placeholder="Conte-nos mais sobre sua ideia ou dúvida..." rows={5} required />
                  </div>

                  <Button type="submit" variant="rose" className="w-full" size="lg">
                    Enviar Mensagem via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-formatada.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>;
};
export default Home;