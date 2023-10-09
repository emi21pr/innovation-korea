import React from "react";

function ProductCard(props) {
  return (
    <div className="flex-col inline-flex gap-2.5 w-full">
      <div className=" h-72 relative overflow-hidden bg-white custom-shadow items-center justify-center flex">
        <img
          className="w-36 object-contain"
          src={props.item.photo_product}
          loading="lazy"
          alt="Products"
        />
      </div>
      <div className="inline-flex gap-1 flex-col">
        <div className="flex justify-between border-b">
          <span className="text-lg first-letter:lg:text-xl font-semibold">
            {props.item.brand}
          </span>
          <span>{props.item.price}</span>
        </div>
        <span className=" text-xs line-clamp-1">{props.item.name_product}</span>
      </div>
    </div>
  );
}

export default ProductCard;
