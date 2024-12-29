import Container from "@/components/UI/Container";
import { products } from "@/utils/data";
import SpecialProduct from "./SpecialProduct";

const Special = () => {
  return (
    <Container class1="special-wrapper home-wrapper-2 py-5 px-5">
      <h2 className="section-heading">Special Products</h2>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        {products
          ?.filter((product) => product?.tags === "special")
          ?.slice(-4)
          ?.map((product) => (
            <SpecialProduct key={product._id} product={product} />
          ))}
      </div>
    </Container>
  );
};

export default Special;
