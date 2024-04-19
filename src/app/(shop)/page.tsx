import { Title } from "@/components/title/Title";
import { ProductGrid } from "@/products/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

const HomePage = () => {
  return (
    <div>
      <Title title="Mariscos" subtitle="Frescura y calidad" />
      <ProductGrid products={products} />
    </div>
  );
};

export default HomePage;
