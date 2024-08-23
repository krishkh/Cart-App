import React from "react";
import ItemCard from "../../components/itemCard";
function ItemSection({ data }) {
  // console.log(data.data);
  return (
    <div className="darK:text-gray-400 mt-8 flex-wrap dark:bg-gray-200 body-font flex container px-5 py-5 mx-auto">
      {data.data.map((item) => (
        <ItemCard key={item.itemNumber} data={item} /> // Use item.id for unique key
      ))}
    </div>
  );
}

export default ItemSection;
