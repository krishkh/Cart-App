import ItemCard from "../../components/Item related components/itemCard";
import initData from "../../../public/init/initData.json"

interface ItemData {
  itemNumber: number;
  itemName: string;
  itemPrice: number;
  category: string;
  description: string;
}

interface ExploreProps {
  data: ItemData[];
};

const typedData: ItemData[] = initData; 

const Explore: React.FC<ExploreProps> = ( {data = typedData} ) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="dark:text-gray-400 mt-8 flex-wrap dark:bg-blackaf body-font flex container px-5 py-5 mx-auto">
        {data.map((item,index) => (
          <ItemCard key={index} data={item} />
        ))}
      </div>
    </main>
  );
}
export default Explore