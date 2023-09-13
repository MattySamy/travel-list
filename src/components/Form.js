import { useState } from "react";
export default function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // controlled elements by state are for handling events more
  function handleSubmit(e) {
    e.preventDefault(); // prevent default reloading of submit
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    };
    console.log(newItem);
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>
        {" "}
        What do you need for your {"😍 "}
        trip ?{" "}
      </h3>{" "}
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {" "}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {" "}
            {num}{" "}
          </option>
        ))}{" "}
      </select>{" "}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item..."
      />
      <button> Add </button>{" "}
    </form>
  );
}
