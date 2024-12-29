import subBanner from "@/assets/images/subbanner-01.jpg";
import subBanner1 from "@/assets/images/subbanner-02.jpg";
import subBanner2 from "@/assets/images/subbanner-03.jpg";
import subBanner3 from "@/assets/images/subbanner-04.jpg";
import Container from "@/components/UI/Container";
import Image from "next/image";
const Famous = () => {
  return (
    <Container class1=" home-wrapper-2 py-5 px-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="famous-card relative text-white">
          <Image src={subBanner} className="img-fluid rounded-xl" alt="" />
          <div className="famous-card-content absolute">
            <h5>Big Screen</h5>
            <h6>Smart Watch Series 7</h6>
            <p>From $999 or $16.62/mo. for 24 mo.</p>
          </div>
        </div>

        <div className="famous-card relative ">
          <Image src={subBanner1} className="img-fluid rounded-xl" alt="" />
          <div className="famous-card-content absolute">
            <h5 className="text-dark">Big Screen</h5>
            <h6 className="text-dark">Smart Watch Series 7</h6>
            <p className="text-dark">From $999 or $16.62/mo. for 24 mo.</p>
          </div>
        </div>
        <div className="famous-card relative">
          <Image src={subBanner2} className="img-fluid rounded-xl" alt="" />
          <div className="famous-card-content absolute">
            <h5 className="text-dark">Big Screen</h5>
            <h6 className="text-dark">Smart Watch Series 7</h6>
            <p className="text-dark">From $999 or $16.62/mo. for 24 mo.</p>
          </div>
        </div>

        <div className="famous-card relative">
          <Image src={subBanner3} className="img-fluid rounded-xl" alt="" />
          <div className="famous-card-content absolute">
            <h5 className="text-dark">Big Screen</h5>
            <h6 className="text-dark">Smart Watch Series 7</h6>
            <p className="text-dark">From $999 or $16.62/mo. for 24 mo.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Famous;
