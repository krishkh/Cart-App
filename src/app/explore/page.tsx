import React from 'react';

interface Item {
  itemName: string;
  itemNumber: number;
  itemPrice: number;
  category: string;
  description: string;
}

interface ItemListProps {
  items: Item[];
}

const itemsList: Item[] = [
  {
    itemName: "T-Shirt",
    itemNumber: 1,
    itemPrice: 19.99,
    category: "Clothing",
    description: "A comfortable and stylish T-shirt for everyday wear."
  },
  {
    itemName: "Jeans",
    itemNumber: 2,
    itemPrice: 34.5,
    category: "Clothing",
    description: "Durable and fashionable jeans for any occasion."
  }
];

const ItemList: React.FC<ItemListProps> = ({ items = itemsList }) => {
  return (
    <div>
      {items.map(item => (
        <div key={item.itemNumber} className='m-40 border'>
          <h2>{item.itemName}</h2>
          <p><strong>Price:</strong> ${item.itemPrice.toFixed(2)}</p>
          <p><strong>Category:</strong> {item.category}</p>
          <p><strong>Description:</strong> {item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
