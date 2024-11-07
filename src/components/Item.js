import React from "react";

function Item({ item }) {
  return (
    <div className="item">
      <span>{item.name}</span>
      <span>{item.category}</span>
      <button>Add to Cart</button>
    </div>
  );
}

export default Item;
