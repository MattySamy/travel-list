import { useState } from "react";

import Logo from "./Logo";

import Form from "./Form";

import PackingList from "./PackingList";

import Stats from "./Stats";
export default function App() {
  // Lift State Up from Form Component to (Sibling like Packing List Component)
  const [items, setItems] = useState([]);

  // Derived State
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed === true).length;
  let percentPackedItems = (numPackedItems * 100) / numItems;

  function handleDeleteItem(id) {
    setItems((items) => items.filter((i) => i.id !== id));
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function clearList() {
    const notification = window.confirm("Are u sure to clear the list ?");
    if (notification) {
      setItems([]);
    }
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => {
        return item.id !== id
          ? { ...item, packed: item.packed }
          : { ...item, packed: !item.packed };
      })
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />{" "}
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        clearList={clearList}
      />{" "}
      <Stats
        numItems={numItems}
        numPackedItems={numPackedItems}
        percentPackedItems={percentPackedItems}
      />{" "}
    </div>
  );
}
