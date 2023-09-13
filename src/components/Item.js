export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />{" "}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        <span
          style={
            item.quantity <= 5
              ? {
                  color: "aquamarine",
                  textShadow: "0px 1px 8px rgb(90, 247, 197)",
                }
              : {
                  color: "violet",
                  textShadow: "0px 1px 8px rgb(199, 81, 250)",
                }
          }
          id="quantity"
        >
          {" "}
          {item.quantity}{" "}
        </span>{" "}
        {item.description}{" "}
      </span>{" "}
      <button className="delete" onClick={() => onDeleteItem(item.id)}>
        {" "}
        ❌{" "}
      </button>{" "}
    </li>
  );
}
