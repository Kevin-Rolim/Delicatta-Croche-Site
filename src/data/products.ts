// src/data/products.ts

import biquiniImage from "@/assets/products/biquine_tons_marrons.jpg";
import bolsaAzulImage from "@/assets/products/bolsa_azul.jpg";
import bolsaBegeImage from "@/assets/products/bolsa_bege.jpg";
import bolsaChiqueImage from "@/assets/products/bolsa_chique.jpg";
import estrelasImage from "@/assets/products/estrelas.jpg";
import bolsaRosaImage from "@/assets/products/bolsa_rosa.jpg";
import pingenteImage from "@/assets/products/pingente.jpg";
import bolsaSimplesImage from "@/assets/products/bolsa_simples.jpg";

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
    name: "Biquíni Terracota Listrado",
    description: "Conjunto de biquíni em crochê, perfeito para o verão. O top faixa com listras e amarração frontal oferece um charme único, enquanto a calcinha de amarrar lateral garante o ajuste perfeito.",
    material: "Linha 100% algodão mercerizado (própria para moda praia, secagem rápida).",
    dimensions: "Tamanhos P, M e G (sob encomenda). Ajustável nas amarrações.",
    colors: "Tons terrosos (marrom e bege). Outras combinações sob consulta.",
    productionTime: "7 a 10 dias úteis",
    care: "Lavar à mão com sabão neutro, não deixar de molho, secar à sombra. Não guardar úmido.",
    image: biquiniImage,
  },
  {
    id: 2,
    name: "Ecobag 'Flores do Campo'",
    description: "Bolsa estilo 'tote' (ecobag) em crochê azul-bebê, com delicadas margaridas bordadas à mão. Perfeita para saídas rápidas, levar livros ou um passeio no parque. Leve, prática e charmosa.",
    material: "Linha 100% algodão.",
    dimensions: "Aprox. 30cm (largura) x 35cm (altura) (sem contar a alça).",
    colors: "Azul-bebê com bordado branco/amarelo. Disponível em outras cores pastel.",
    productionTime: "5 a 7 dias úteis",
    care: "Lavar à mão com cuidado, secar à sombra para não desbotar.",
    image: bolsaAzulImage,
  },
  {
    id: 3,
    name: "Bolsa Rede 'Estrela do Mar'",
    description: "Uma bolsa leve e versátil com trama de rede, ideal para a praia ou um passeio casual. O fundo fechado garante que seus itens menores fiquem seguros. Acompanha um charmoso pingente de estrela do mar.",
    material: "Linha de algodão ou barbante ecológico.",
    dimensions: "Aprox. 35cm (largura) x 40cm (altura). É expansível devido à trama.",
    colors: "Bege natural. Outras cores sob consulta.",
    productionTime: "7 dias úteis",
    care: "Lavar à mão, secar na horizontal para não deformar a trama.",
    image: bolsaBegeImage,
  },
  {
    id: 4,
    name: "Clutch 'Noite Elegante'",
    description: "Bolsa de mão (clutch) estilo envelope, perfeita para festas e ocasiões especiais. O design em V com borda em cor contrastante e o tassel dão um toque de sofisticação. Alça de corrente dourada removível.",
    material: "Fio de malha ou barbante premium, alça de corrente de metal, fecho imantado interno.",
    dimensions: "Aprox. 25cm (largura) x 15cm (altura).",
    colors: "Branco-gelo com borda vinho/marsala. (Outras combinações sob encomenda).",
    productionTime: "5 dias úteis",
    care: "Não lavar. Limpar com pano levemente úmido. Guardar em local seco para não oxidar o metal.",
    image: bolsaChiqueImage,
  },
  {
    id: 5,
    name: "Bolsa Transversal 'Verano'",
    description: "Uma bolsinha leve e despojada, ideal para carregar o essencial (celular, chaves, cartão). Feita com linha mesclada em tons de rosa, é a companhia perfeita para festivais ou passeios rápidos.",
    material: "Linha de algodão mesclada, argolas de metal.",
    dimensions: "Aprox. 20cm (largura) x 18cm (altura).",
    colors: "Mesclado em tons de rosa, pink e lilás.",
    productionTime: "3 a 5 dias úteis",
    care: "Lavar à mão com cuidado, secar à sombra.",
    image: bolsaRosaImage,
  },
  {
    id: 6,
    name: "Pingente Decorativo 'Doce Lar'",
    description: "Pingente decorativo feito à mão, com dois corações de crochê, contas de madeira e um tassel. Perfeito para pendurar em portas, espelhos, ou no retrovisor do carro (como 'car charm').",
    material: "Linha de algodão, contas de madeira.",
    dimensions: "Aprox. 25cm de comprimento total.",
    colors: "Vermelho. (Disponível em rosa, bege, azul, verde).",
    productionTime: "3 dias úteis",
    care: "Não molhar as contas de madeira. Limpar o pó com espanador ou pano seco.",
    image: pingenteImage,
  },
  {
    id: 7,
    name: "Chaveiro Estrela (Amigurumi)",
    description: "Chaveiro fofo em formato de estrela, feito na técnica amigurumi. É macio, leve e perfeito para decorar sua bolsa, mochila ou chaves. Um ótimo presente!",
    material: "Linha de algodão, enchimento siliconado antialérgico, argola de metal.",
    dimensions: "Aprox. 7cm x 7cm (sem a argola).",
    colors: "Amarelo pastel, Azul bebê. (Grande variedade de cores disponíveis).",
    productionTime: "3 dias úteis",
    care: "Lavar à mão com muito cuidado, apertando levemente. Não torcer.",
    image: estrelasImage,
  },
  {
    id: 8,
    name: "Porta-Celular 'Piquenique'",
    description: "Uma bolsinha charmosa e prática, ideal para levar seu celular e documentos em um passeio. O design em rede (ponto vazado) é leve e combina com um look casual, como um piquenique no parque.",
    material: "Linha de algodão ou barbante ecológico.",
    dimensions: "Aprox. 12cm (largura) x 18cm (altura). Perfeito para smartphones.",
    colors: "Bege natural. (Outras cores sob consulta).",
    productionTime: "3 a 5 dias úteis",
    care: "Lavar à mão com cuidado, secar na horizontal.",
    image: bolsaSimplesImage,
  },
];