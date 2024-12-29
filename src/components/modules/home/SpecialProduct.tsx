"use client";
import { TProducts } from "@/types";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const StarRatings = dynamic(() => import("react-star-ratings"), { ssr: false });

const SpecialProduct = ({ product }: { product: TProducts }) => {
  const {
    title,
    // _id,
    // slug,
    // description,
    price,
    // category,
    brand,
    quantity,
    sold,
    // color,
    // tags,
    totalRating,
    images,
    // ratings,
    // createdAt,
    // updatedAt,
  } = product;
  return (
    <div className="special-product-card">
      <div className="flex justify-between flex-wrap">
        <div>
          <Image src={images[0]} className="" alt={title} />
        </div>
        <div className="special-product-content">
          <h5 className="brand">{brand}</h5>
          <h6 className="title">{title}</h6>
          <StarRatings
            rating={Number(totalRating)}
            starRatedColor="#ffd700"
            numberOfStars={5}
            name="rating"
            starSpacing="2px"
            starDimension="15px"
          />
          <p className="price">
            <span className="red-p">${price}</span> &nbsp;{" "}
          </p>
          <div className="discount-till flex items-center gap-6">
            <p className="mb-0">
              <b>5 days</b>
            </p>
            <div className="flex gap-6 items-center">
              <span className="badge rounded-circle p-3 bg-warning">1</span>:
              <span className="badge rounded-circle p-3 bg-warning">1</span>:
              <span className="badge rounded-circle p-3 bg-warning">1</span>
            </div>
          </div>
          <div className="prod-count my-3">
            <p>Products: {quantity}</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={quantity / quantity + sold * 100}
                aria-valuemin={quantity}
                style={{ width: quantity / quantity + sold * 100 + "%" }}
                aria-valuemax={sold + quantity}
              ></div>
            </div>
          </div>
          <Link href="/cart" className="button">
            add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
