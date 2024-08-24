import React from "react";
import Link from "next/link";


interface ItemData {
  itemNumber: number;
  itemName: string;
  itemPrice: number;
  category: string;
  description: string;
}

interface Data {
  key: number;
  data: ItemData;
}

function ItemCard({ data }: Data) {
  // console.log(data);
  return (
    <Link
      href={`/cart/item?itemNumber=${data.itemNumber}`}
      className="lg:w-1/3 md:w-1/2 p-8 w-full card-shadow"
    >
      hello
      {/* <div className="block relative h-48 rounded overflow-hidden ">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </div>
      <div className="mt-4">
        <h3 className="dark:text-gray-100 text-xs tracking-widest title-font mb-1">
          {data.category}
        </h3>
        <h2 className="dark:text-white title-font text-lg font-medium">
          {data.itemName}
        </h2>
        <p className="mt-1 dark:text-gray-100">{data.itemPrice}</p>
      </div> */}
    </Link>
  );
}

export default ItemCard;
