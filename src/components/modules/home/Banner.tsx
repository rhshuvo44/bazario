import catBanner from "@/assets/images/catbanner-01.jpg";
import catBanner1 from "@/assets/images/catbanner-02.jpg";
import catBanner2 from "@/assets/images/catbanner-03.jpg";
import catBanner3 from "@/assets/images/catbanner-04.jpg";
import banner from "@/assets/images/main-banner-1.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="py-5 md:flex z-9">
      <div className="w-full md:w-1/2">
        <div className="main-banner relative p-3">
          <Image src={banner} className="img-fluid rounded-3 z-1" alt="" />
          <div className="main-banner-content absolute">
            <h4 className="text-uppercase">Supercharged for pros.</h4>
            <h5>ipad s13+ pro.</h5>
            <small>From $999.00 or $41.62/mo.</small>
            <div className="mt-5">
              <Link href="/" className="button">
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="main-banner relative p-3">
          <Image src={banner} className="img-fluid rounded-3" alt="" />
          <div className="main-banner-content absolute">
            <h4 className="text-uppercase">Supercharged for pros.</h4>
            <h5>ipad s13+ pro.</h5>
            <small>From $999.00 or $41.62/mo.</small>
            <div className="mt-10">
              <Link href="/" className="button mt-4">
                Buy Now
              </Link>
            </div>
          </div>
        </div> */}
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-wrap justify-between items-center">
          <div className="small-banner relative p-3">
            <Image src={catBanner} className="img-fluid rounded-3" alt="" />
            <div className="small-banner-content absolute">
              <h4 className="text-uppercase">Supercharged for pros.</h4>
              <h5>ipad s13+ pro.</h5>
              <small>
                From $999.00 or
                <br /> $41.62/mo.
              </small>
            </div>
          </div>
          <div className="small-banner relative  p-3">
            <Image src={catBanner1} className="img-fluid rounded-3" alt="" />
            <div className="small-banner-content absolute ">
              <h4 className="text-uppercase">Supercharged for pros.</h4>
              <h5>ipad s13+ pro.</h5>
              <small>
                From $999.00 or
                <br /> $41.62/mo.
              </small>
            </div>
          </div>
          <div className="small-banner relative  p-3">
            <Image src={catBanner2} className="img-fluid rounded-3" alt="" />
            <div className="small-banner-content absolute">
              <h4 className="text-uppercase">Supercharged for pros.</h4>
              <h5>ipad s13+ pro.</h5>
              <small>
                From $999.00 or
                <br /> $41.62/mo.
              </small>
            </div>
          </div>
          <div className="small-banner relative p-3">
            <Image src={catBanner3} className="img-fluid rounded-3" alt="" />
            <div className="small-banner-content absolute">
              <h4 className="text-uppercase">Supercharged for pros.</h4>
              <h5>ipad s13+ pro.</h5>
              <small>
                From $999.00 or
                <br /> $41.62/mo.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
