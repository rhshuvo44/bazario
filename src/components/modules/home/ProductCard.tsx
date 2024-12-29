"use client";
import addCart from "@/assets/images/add-cart.svg";
import prodCompare from "@/assets/images/prodcompare.svg";
import view from "@/assets/images/view.svg";
import wish from "@/assets/images/wish.svg";
import { TProducts } from "@/types";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const StarRatings = dynamic(() => import("react-star-ratings"), { ssr: false });
const ProductCard = ({ product }: { product: TProducts }) => {
  const {
    title,
    _id,
    // slug,
    description,
    price,
    // category,
    brand,
    // quantity,
    // sold,
    // color,
    // tags,
    totalRating,
    images,
    // ratings,
  } = product;

  return (
    <div
    //   className={`${location?.pathname === "/store" ? `col-${grid}` : "col-3"}`}
    >
      <div className="product-card relative">
        <div className="wishlist-icon absolute">
          <button
            className="border-0 bg-transparent"
            // onClick={() => addToWish(_id)}
          >
            <Image src={wish} alt="" width={20} height={20} />
          </button>
        </div>
        <div className="product-img cursor-pointer">
          {images?.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={200}
              height={200}
              alt=""
              className="img-fluid"
            />
          ))}
        </div>
        <div className="product-details">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title">{title}</h5>
          <StarRatings
            rating={Number(totalRating)}
            starRatedColor="#ffd700"
            numberOfStars={5}
            name="rating"
            starSpacing="2px"
            starDimension="15px"
          />
          <p
            className="disc"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <p className="price">${price}</p>
        </div>
        <div className="action-bar absolute">
          <div className="flex flex-col gap-1">
            <button className="border-0 bg-transparent">
              <Image src={prodCompare} alt="" width={20} height={20} />
            </button>
            <Link href={`/product/${_id}`} className="border-0 bg-transparent">
              <Image src={view} alt="" width={20} height={20} />
            </Link>
            <button className="border-0 bg-transparent">
              <Image src={addCart} alt="" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
