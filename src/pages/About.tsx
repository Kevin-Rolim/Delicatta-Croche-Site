import { Heart, Sparkles, Award, ShieldCheck, Droplets, Wind, Sun } from "lucide-react";
import aboutImage from "@/assets/about-process.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero interno */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Sobre a Delicatta</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça a história, valores e o processo artesanal por trás de cada peça
          </p>
        </div>
      </section>

      {/* História */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
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
            <img
              src={aboutImage}
              alt="Processo artesanal"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Nosso Processo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada peça passa por um cuidadoso processo artesanal
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-center mb-12">
              Selecionamos fios de alta qualidade, escolhemos os pontos ideais e trabalhamos cada detalhe 
              com atenção. O resultado são produtos únicos feitos para durar, com acabamento impecável e 
              todo o carinho que o artesanato manual proporciona.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-rose">1</span>
                </div>
                <h3 className="font-semibold mb-2">Seleção de Materiais</h3>
                <p className="text-sm text-muted-foreground">
                  Escolhemos fios premium de algodão e materiais de qualidade
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-rose">2</span>
                </div>
                <h3 className="font-semibold mb-2">Criação Manual</h3>
                <p className="text-sm text-muted-foreground">
                  Cada ponto é feito à mão com técnicas tradicionais de crochê
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-rose">3</span>
                </div>
                <h3 className="font-semibold mb-2">Acabamento</h3>
                <p className="text-sm text-muted-foreground">
                  Finalização cuidadosa garantindo durabilidade e beleza
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
          <p className="text-muted-foreground">O que nos guia em cada criação</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
            <Award className="h-10 w-10 text-rose mx-auto mb-4" />
            <h3 className="font-semibold mb-2">100% Artesanal</h3>
            <p className="text-sm text-muted-foreground">
              Cada peça é feita manualmente, sem uso de máquinas
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
            <Heart className="h-10 w-10 text-rose mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Feito com Amor</h3>
            <p className="text-sm text-muted-foreground">
              Dedicação e carinho em cada detalhe
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
            <Sparkles className="h-10 w-10 text-rose mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Peças Únicas</h3>
            <p className="text-sm text-muted-foreground">
              Cada item é exclusivo e especial
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
            <ShieldCheck className="h-10 w-10 text-rose mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Qualidade Garantida</h3>
            <p className="text-sm text-muted-foreground">
              Materiais premium e acabamento impecável
            </p>
          </div>
        </div>
      </section>

      {/* Cuidados */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Cuidados com suas Peças</h2>
            <p className="text-muted-foreground">Como manter suas peças artesanais sempre bonitas</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-background p-6 rounded-lg">
              <Droplets className="h-6 w-6 text-rose flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Lavagem</h3>
                <p className="text-sm text-muted-foreground">
                  Lavar à mão com água fria e sabão de coco ou neutro
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-background p-6 rounded-lg">
              <Wind className="h-6 w-6 text-rose flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Secagem</h3>
                <p className="text-sm text-muted-foreground">
                  Secar à sombra, não usar secadora ou torcer a peça
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-background p-6 rounded-lg">
              <Sun className="h-6 w-6 text-rose flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Conservação</h3>
                <p className="text-sm text-muted-foreground">
                  Não usar alvejante, ferro quente ou produtos químicos fortes
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-8 p-6 bg-background rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Dica:</strong> Peças de crochê são delicadas e exigem cuidados especiais. 
              Seguindo essas orientações, sua peça artesanal durará por muitos anos mantendo sua beleza original.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
