import Container from "@/components/UI/Container";
import { services } from "@/utils/data";
import Image from "next/image";

const Service = () => {
  return (
    <Container class1="home-wrapper-2 py-10 px-5">
      <div className="service grid grid-cols-1 md:grid-cols-5 items-center justify-between ">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-4">
            <Image
              src={service.image}
              width={65}
              height={50}
              alt=""
              className="image-full object-cover p-4"
            />
            <div>
              <h6>{service.title}</h6>
              <p className="mb-0">{service.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Service;
