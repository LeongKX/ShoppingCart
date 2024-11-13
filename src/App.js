import "./App.css";
import { useState } from "react";

const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true },
];

function App() {
  // Your code here
  const [filteredOnSale, setFilteredOnSale] = useState(items);
  const [showAllItems, setShowAllItems] = useState(true);

  const handleFilter = () => {
    if (showAllItems) {
      const filtered = items.filter((item) => item.onSale === true);
      setFilteredOnSale(filtered);
    } else {
      setFilteredOnSale(items);
    }
    setShowAllItems(!showAllItems);
  };

  return (
    <div className="p-5">
      <h1>Shopping Cart</h1>
      <button className="btn btn-primary my-3" onClick={handleFilter}>
        {showAllItems ? "Show Sale Items Only" : "Show All Items Only"}
      </button>
      {filteredOnSale.map((item) => (
        <div
          className="d-flex  justify-content-between border border-2 rounded my-3"
          key={item.id}
        >
          <div className="d-flex align-items-center ">
            <h3>{item.name}</h3>
            {item.onSale && (
              <h4 className="badge bg-danger py-2  ms-2">On Sale!</h4>
            )}
          </div>
          <h3>${item.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
