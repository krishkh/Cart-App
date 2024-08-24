
import React from "react";
import ItemCard from "../../components/Item related components/itemCard";
import initData from "../../../public/init/initData.json";
const typedData = initData;
const Explore = ({data = typedData}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="dark:text-gray-400 mt-8 flex-wrap dark:bg-blackaf body-font flex container px-5 py-5 mx-auto">
        <ItemCard key={data[0].itemNumber} data={data[0]} />
      </div>
    </main>
  );
};

export default Explore;
