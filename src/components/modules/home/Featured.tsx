import Container from "@/components/UI/Container";
import { products } from "@/utils/data";
import ProductCard from "./ProductCard";

const Featured = () => {
 
  return (
    <Container class1="featured-wrapper home-wrapper-2 py-5 px-5">
      <h2 className="section-heading">Featured Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  gap-2">
        {products
          ?.filter((product) => product?.tags === "featured")
          ?.slice(-5)
          ?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </Container>
  );
};

export default Featured;
