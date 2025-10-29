import mantaImage from "@/assets/products/manta-aconchego.jpg";
import almofadaImage from "@/assets/products/almofada-flores.jpg";
import amigurumiImage from "@/assets/products/amigurumi-coelho.jpg";
import jogoAmericanoImage from "@/assets/products/jogo-americano.jpg";
import cestaImage from "@/assets/products/cesta-organizadora.jpg";
import guirlandaImage from "@/assets/products/guirlanda-decorativa.jpg";
import portaCoposImage from "@/assets/products/porta-copos.jpg";

export interface Product {
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

export const products: Product[] = [
  {
    id: 1,
    name: "Manta Aconchego",
    description: "Manta aconchegante em crochê, perfeita para decorar o sofá ou aquecer nas noites frias. Confeccionada com linha 100% algodão, macia ao toque e resistente.",
    material: "Linha 100% algodão premium",
    dimensions: "Aproximadamente 1,40m x 1,80m",
    colors: "Rosa, creme, lilás, azul bebê, bege",
    productionTime: "15 a 20 dias úteis",
    care: "Lavar à mão com sabão neutro, não torcer, secar à sombra",
    image: mantaImage,
  },
  {
    id: 2,
    name: "Almofada Flores",
    description: "Almofada decorativa em crochê com delicado padrão de flores. Ideal para dar charme ao sofá, cama ou poltrona. Cada peça é única.",
    material: "Linha de algodão com enchimento antialérgico",
    dimensions: "40cm x 40cm",
    colors: "Rosa claro, branco, pêssego, lilás",
    productionTime: "7 a 10 dias úteis",
    care: "Lavar à mão com água fria, não usar alvejante",
    image: almofadaImage,
  },
  {
    id: 3,
    name: "Amigurumi Coelhinho",
    description: "Adorável coelhinho amigurumi feito à mão. Perfeito como presente ou decoração. Seguro para crianças, confeccionado com materiais antialérgicos.",
    material: "Linha de algodão, enchimento siliconado, olhos de segurança",
    dimensions: "Aproximadamente 25cm de altura",
    colors: "Rosa, branco, bege, cinza, marrom",
    productionTime: "5 a 7 dias úteis",
    care: "Lavar à mão com sabão neutro, não deixar de molho",
    image: amigurumiImage,
  },
  {
    id: 4,
    name: "Jogo Americano",
    description: "Conjunto de jogos americanos em crochê para valorizar sua mesa. Design sofisticado e artesanal que combina com diversos estilos de decoração.",
    material: "Linha de algodão resistente",
    dimensions: "35cm de diâmetro (cada peça)",
    colors: "Natural, verde água, bege, rosa antigo",
    productionTime: "10 a 12 dias úteis (conjunto com 4 peças)",
    care: "Lavar à mão, secar na horizontal",
    image: jogoAmericanoImage,
  },
  {
    id: 5,
    name: "Cesta Organizadora",
    description: "Cesta organizadora versátil em crochê. Perfeita para guardar brinquedos, roupas, mantas ou itens de decoração. Funcional e decorativa.",
    material: "Fio de malha ou linha grossa de algodão",
    dimensions: "30cm de diâmetro x 25cm de altura",
    colors: "Natural com detalhes em branco, rosa, cinza",
    productionTime: "7 a 10 dias úteis",
    care: "Limpar com pano úmido, não lavar em máquina",
    image: cestaImage,
  },
  {
    id: 6,
    name: "Guirlanda Decorativa",
    description: "Guirlanda artesanal em crochê com flores delicadas. Ideal para decorar portas, paredes ou festas. Traz charme e aconchego para qualquer ambiente.",
    material: "Linha de algodão, estrutura em aramado forrado",
    dimensions: "35cm de diâmetro",
    colors: "Rosa, pêssego, branco, lilás, verde",
    productionTime: "10 a 15 dias úteis",
    care: "Manter em local seco, limpar com pano macio",
    image: guirlandaImage,
  },
  {
    id: 7,
    name: "Porta-Copos",
    description: "Conjunto de porta-copos em crochê com acabamento delicado. Protege suas superfícies com estilo e elegância artesanal.",
    material: "Linha 100% algodão",
    dimensions: "10cm de diâmetro (cada peça)",
    colors: "Rosa, verde água, creme, pêssego",
    productionTime: "5 a 7 dias úteis (conjunto com 6 peças)",
    care: "Lavar à mão com sabão neutro",
    image: portaCoposImage,
  },
];
