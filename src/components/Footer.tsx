import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Delicatta</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Peças artesanais únicas em crochê, feitas à mão com amor e dedicação. Transformamos novelos coloridos em arte.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-rose transition-colors">
                Home
              </Link>
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-rose transition-colors">
                Sobre
              </Link>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-rose transition-colors">
                Portfolio
              </Link>
              <Link to="/contato" className="text-sm text-muted-foreground hover:text-rose transition-colors">
                Contato
              </Link>
            </div>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/delicatta.crochett"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-rose transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @delicatta.crochett
              </a>
              <a
                href="https://wa.me/5517991483104"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-rose transition-colors"
              >
                <Phone className="h-4 w-4" />
                (17) 99148-3104
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                São José do Rio Preto - SP
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          © {currentYear} Delicatta Crochê. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
