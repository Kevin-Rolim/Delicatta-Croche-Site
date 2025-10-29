import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const ProductCard = ({ name, image, onClick }: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg bg-card cursor-pointer transition-all duration-300 hover:shadow-xl"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <Badge className="absolute top-3 right-3 bg-rose text-rose-foreground">
        100% Artesanal
      </Badge>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
