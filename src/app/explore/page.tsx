import React from "react";
import ItemCard from "../../components/Item related components/itemCard";
import initData from "../../../public/init/initData.json";

// Define the TypeScript interface for the items
interface ItemData {
  itemName: string;
  itemNumber: number;
  itemPrice: number;
  category: string;
  description: string;
}

interface ExploreProps {
  data?: ItemData[];  // `data` is optional because you provide a default value
}

// Assuming initData is correctly typed as ItemData[]
const typedData: ItemData[] = initData;

const Explore: React.FC<ExploreProps> = ({ data = typedData }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="dark:text-gray-400 mt-8 flex-wrap dark:bg-blackaf body-font flex container px-5 py-5 mx-auto">
        {data.map((item) => (
          <ItemCard key={item.itemNumber} data={item} />
        ))}
      </div>
    </main>
  );
}

export default Explore;
