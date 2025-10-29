import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, MapPin, Phone, Clock, CheckCircle2, Package, Truck, HelpCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!formData.name || !formData.whatsapp || !formData.subject || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Montar mensagem para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*Contato via Site*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `${formData.email ? `*Email:* ${formData.email}\n` : ''}` +
      `*Assunto:* ${formData.subject}\n\n` +
      `*Mensagem:*\n${formData.message}`
    );

    // Abrir WhatsApp
    window.open(`https://wa.me/5517991483104?text=${whatsappMessage}`, "_blank");

    // Limpar formulário
    setFormData({
      name: "",
      whatsapp: "",
      email: "",
      subject: "",
      message: "",
    });

    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para transformar suas ideias em realidade
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna Esquerda - Informações */}
          <div className="space-y-8">
            {/* Contato Direto */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Contato Direto</h2>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5517991483104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <Phone className="h-5 w-5 text-rose flex-shrink-0" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">(17) 99148-3104</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/delicatta.crochett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <Instagram className="h-5 w-5 text-rose flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-sm text-muted-foreground">@delicatta.crochett</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <MapPin className="h-5 w-5 text-rose flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Localização</p>
                    <p className="text-sm text-muted-foreground">São José do Rio Preto - SP e região</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
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
              <h2 className="font-serif text-2xl font-bold mb-6">Como Funciona</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-rose">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Entre em contato</h3>
                    <p className="text-sm text-muted-foreground">Via WhatsApp, Instagram ou formulário</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-rose">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Conte sua ideia</h3>
                    <p className="text-sm text-muted-foreground">Escolha uma peça do portfolio ou descreva sua ideia personalizada</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-rose">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Receba orçamento</h3>
                    <p className="text-sm text-muted-foreground">Você receberá um orçamento personalizado e prazo de entrega</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-rose">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Acompanhe a produção</h3>
                    <p className="text-sm text-muted-foreground">Você poderá acompanhar o desenvolvimento da sua peça</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-rose">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Receba sua peça</h3>
                    <p className="text-sm text-muted-foreground">Entrega ou retirada conforme combinado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Perguntas Frequentes</h2>
              <div className="space-y-4">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-rose" />
                    Fazem peças personalizadas?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sim! Adoramos criar peças exclusivas baseadas nas suas ideias e necessidades.
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Package className="h-4 w-4 text-rose" />
                    Qual o prazo de produção?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Varia de 5 a 20 dias úteis dependendo da complexidade da peça. Informamos o prazo no orçamento.
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Truck className="h-4 w-4 text-rose" />
                    Enviam para outras cidades?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sim! Trabalhamos com envios para todo o Brasil via Correios ou transportadora.
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-rose" />
                    Aceitam sugestões de cores e tamanhos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Claro! Todas as nossas peças podem ser adaptadas em cores, tamanhos e detalhes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Formulário */}
          <div>
            <div className="bg-card p-8 rounded-lg border border-border sticky top-24">
              <h2 className="font-serif text-2xl font-bold mb-6">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Sobre o que você quer falar?"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos mais sobre sua ideia ou dúvida..."
                    rows={5}
                    required
                  />
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
      </section>
    </div>
  );
};

export default Contact;
