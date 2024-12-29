import brand1 from "@/assets/images/brand-01.png";
import brand2 from "@/assets/images/brand-02.png";
import brand3 from "@/assets/images/brand-03.png";
import brand4 from "@/assets/images/brand-04.png";
import brand5 from "@/assets/images/brand-05.png";
import brand6 from "@/assets/images/brand-06.png";
import brand7 from "@/assets/images/brand-07.png";
import brand8 from "@/assets/images/brand-08.png";
import Container from "@/components/UI/Container";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const HomeMarquee = () => {
  const brandItem = [
    { title: "Home", image: brand1 },
    { title: "Home", image: brand2 },
    { title: "Home", image: brand3 },
    { title: "Home", image: brand4 },
    { title: "Home", image: brand5 },
    { title: "Home", image: brand6 },
    { title: "Home", image: brand7 },
    { title: "Home", image: brand8 },
  ];
  return (
    <Container class1="marquee home-wrapper-2 p-5">
      <div className="marquee-inner-wrapper card-wrapper">
        <Marquee className="flex">
          {brandItem.map((brand, index) => (
            <div key={index} className="mx-4 w-25">
              <Image src={brand.image} alt="brand" />
            </div>
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default HomeMarquee;
