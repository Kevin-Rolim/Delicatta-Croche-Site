### ✨ Delicatta Crafts - Catálogo e Showcase de Artesanato

Esta aplicação é um catálogo digital de produtos artesanais, focada na exibição de itens exclusivos (como bolsas, biquínis e acessórios, inferido pelas imagens), com uma experiência de usuário rica e moderna. O projeto prioriza a comunicação direta com o cliente através do WhatsApp para consultas e pedidos, agilizando o processo de compra de itens feitos à mão.

### 🚀 Tecnologias Essenciais

O projeto é uma aplicação *frontend* moderna, construída com as seguintes ferramentas de ponta:

| Categoria | Tecnologia | Uso no Projeto |
| :--- | :--- | :--- |
| **Framework** | React | Criação de uma interface de usuário dinâmica e responsiva. |
| **Linguagem** | TypeScript | Garante tipagem segura e maior robustez ao código. |
| **Build Tool** | Vite | Servidor de desenvolvimento rápido e otimização de build para produção. |
| **Estilização** | Tailwind CSS & PostCSS | Abordagem *utility-first* para um design customizável e eficiente. |
| **Componentes** | Shadcn UI (e Radix-UI) | Biblioteca de componentes acessíveis e estilizados com Tailwind (por `src/components/ui/`). |
| **Gerenciador** | Bun | Ferramenta moderna e rápida para gerenciamento de pacotes e *runtime* (principalmente para desenvolvimento). |

-----

### 📂 Estrutura e Arquitetura

Este projeto segue a arquitetura de uma Single Page Application (SPA), onde a lógica de dados e a interface estão concentradas no cliente.

  * **`src/data/`**: Esta é uma pasta crucial. Ela armazena os dados dos produtos de forma estática (`products.ts`). Ideal para um catálogo onde a listagem de produtos não muda constantemente ou onde não se deseja manter um banco de dados complexo (Headless CMS ou API).
  * **`src/assets/products/`**: Contém as imagens de alta qualidade dos itens artesanais (bolsas, biquínis, pingentes), que são o coração do catálogo.
  * **`src/components/`**: Módulos específicos para a loja, como:
      * `ProductCard.tsx`: Exibição compacta de cada produto na listagem.
      * `ProductModal.tsx`: Visualização detalhada do produto, provavelmente ativada ao clicar no `Card`.
      * `WhatsAppButton.tsx`: Componente chave para a conversão, permitindo contato direto.
  * **`src/pages/`**: Gerencia as rotas da aplicação (`Home.tsx`, `NotFound.tsx`).
  * **`src/lib/utils.ts`**: Utilitários para classes de CSS (como `clsx`) e outras funções auxiliares.

> **💡 Profundidade:** A escolha de manter os dados em `src/data/products.ts` simplifica a implantação (pois é um site estático ou com renderização no lado do cliente), mas exige que o código seja atualizado e re-implantado a cada novo produto. Para escalar, uma futura melhoria poderia ser a integração com um **Headless CMS** (como Strapi, Contentful ou Sanity) ou uma **API/Backend simples**.
