import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  description: string;
  material: string;
  dimensions: string;
  colors: string;
  productionTime: string;
  care: string;
  image: string;
}

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal = ({ product, open, onOpenChange }: ProductModalProps) => {
  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const phoneNumber = "5517991483104";
    const message = encodeURIComponent(
      `Olá! Gostaria de encomendar: ${product.name}\n\nPoderia me fornecer mais informações?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg"
            />
            <Badge className="absolute top-3 right-3 bg-rose text-rose-foreground">
              100% Artesanal
            </Badge>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Descrição</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Material</h3>
              <p className="text-sm text-muted-foreground">{product.material}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Dimensões</h3>
              <p className="text-sm text-muted-foreground">{product.dimensions}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Cores Disponíveis</h3>
              <p className="text-sm text-muted-foreground">{product.colors}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Tempo de Produção</h3>
              <p className="text-sm text-muted-foreground">{product.productionTime}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Cuidados</h3>
              <p className="text-sm text-muted-foreground">{product.care}</p>
            </div>

            <Button 
              onClick={handleWhatsAppOrder}
              variant="rose" 
              size="lg" 
              className="w-full"
            >
              Encomendar via WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
