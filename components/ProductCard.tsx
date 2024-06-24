import { PriceHistoryItem, Product, User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
  _id: string;
  title: string;
  category: string;
  currency: string;
  currentPrice: number;
  originalPrice: number;
  image: string;
  discountRate: number;
  description: string;
  reviewsCount: number;
  stars: number;
  isOutOfStock: Boolean;
  lowestPrice: number;
  highestPrice: number;
  averagePrice: number;
  priceHistory: PriceHistoryItem[] | [];
  users?: User[];
}

const ProductCard = ({ product }: { product: Props }) => {
  return (
    <Link href={`/products/${product._id}`} className="product-card">
      <div className="product-card_img-container">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="product-card_img"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="product-title">{product.title}</h3>
        <div className="flex justify-between">
          <p className="text-black opacity-50 text-lg capitalize">
            {product.category}
          </p>
          <p className="text-black text-lg font-semibold">
            <span>{product?.currency}</span>
            <span>{product?.currentPrice}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
