import Container from "@/components/UI/Container";
import { categories } from "@/utils/data";
import Image from "next/image";

const Categories = () => {
  return (
    <Container class1="home-wrapper-2 py-10 px-5">
      <div className="categories flex flex-wrap justify-between items-center card-wrapper">
        {categories.map((category, index) => (
          <div className="flex items-center" key={index}>
            <div>
              <h6>{category.title}</h6>
              <p>{category.tagline}</p>
            </div>
            <Image src={category.image} alt="" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
