import newsLetter from "@/assets/images/newsletter.png";
import Image from "next/image";
import Link from "next/link";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 px-5">
          <div className="w-full md:w-1/3">
            <div className="footer-top-data flex gap-1 items-center">
              <Image src={newsLetter} alt="" />
              <h2 className="mb-0 text-white text-2xl">
                Sign Up for Newsletter
              </h2>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="sm:w-2/4 h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow"
              />

              <button
                type="submit"
                className="sm:w-1/4 h-12 text-white bg-purple-600 rounded-lg shadow transition-all duration-300 ease-in-out hover:bg-purple-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="p-5">
        {/* <div className="container-xxl"> */}
        <div className="flex">
          <div className="w-1/4">
            <h4 className="text-white mb-4">Contact us</h4>
            <div>
              <address className="text-white">
                Hno : 277 Near Vill chopal, <br />
                Sonipat
                <br /> PinCode : 131214
              </address>
              <a
                href="tel:+880123456987"
                className="mt-4 block mb-1 text-white"
              >
                +880123456987
              </a>
              <a href="mailto:demo@demo.com" className="block mb-4 text-white">
                demo@demo.com
              </a>
              <div className="social-icons flex items-center gap-2">
                <a
                  href="http://ddddd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="http://ddddd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube />
                </a>
                <a
                  href="http://ddddd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
                <a
                  href="http://ddddd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                </a>
                <a
                  href="http://ddddd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <h4 className="text-white mb-4">Information</h4>
            <div className="footer-links flex flex-col">
              <Link className=" py-1 mb-1" href="/privacy-policy">
                Privacy policy
              </Link>
              <Link className=" py-1 mb-1" href="/refund-policy">
                Refund policy
              </Link>
              <Link className=" py-1 mb-1" href="/shipping-policy">
                Shipping policy
              </Link>
              <Link className=" py-1 mb-1" href="/terms">
                Terms of service
              </Link>
              <Link className=" py-1 mb-1" href="/blog">
                Blogs
              </Link>
            </div>
          </div>
          <div className="w-1/4">
            <h4 className="text-white mb-4">Account</h4>
            <div className="footer-links flex flex-col">
              <Link className=" py-1 mb-1" href="/search">
                Search
              </Link>
              <Link className=" py-1 mb-1" href="/about">
                About us
              </Link>
              <Link className=" py-1 mb-1" href="/faq">
                Faq
              </Link>
              <Link className=" py-1 mb-1" href="/contact">
                Contact
              </Link>
              <Link className=" py-1 mb-1" href="/size">
                Size chart
              </Link>
            </div>
          </div>
          <div className="w-1/4">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-links flex flex-col">
              <Link className=" py-1 mb-1" href="/accessories">
                Accessories
              </Link>
              <Link className=" py-1 mb-1" href="/laptop">
                Laptops
              </Link>
              <Link className=" py-1 mb-1" href="/headphones">
                headphones
              </Link>
              <Link className=" py-1 mb-1" href="/smart-watches">
                smart watches
              </Link>
              <Link className="py-1 mb-1" href="/tablets">
                tablets
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </footer>
      <footer className="py-4">
        <p className="text-center mb-0 text-white">
          &copy; {new Date().getFullYear()} Powered by EvoEdge Agency
        </p>
      </footer>
    </>
  );
};

export default Footer;
