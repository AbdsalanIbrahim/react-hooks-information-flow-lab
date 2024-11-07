import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const [category, setCategory] = useState("All");
  const [items, setItems] = useState([
    { name: "Yogurt", category: "Dairy" },
    { name: "Pomegranate", category: "Produce" },
    // Add more items as needed
  ]);

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  const filteredItems = items.filter((item) =>
    category === "All" || item.category === category
  );

  return (
    <div>
      <Filter onCategoryChange={handleCategoryChange} />
      {filteredItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

export default ShoppingList;



