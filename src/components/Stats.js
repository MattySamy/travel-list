export default function Stats({
  numItems,
  numPackedItems,
  percentPackedItems,
}) {
  if (!numItems) {
    return (
      <p className="stats">
        <em> Start adding some items to your packing list {"🚀"} </em>{" "}
      </p>
    );
  }
  return (
    <footer className="stats">
      {" "}
      {percentPackedItems === 100 ? (
        <em> You got everything ready to go {"✈️"} </em>
      ) : (
        <em>
          {" "}
          🧳 You have {numItems + " "}
          items on your list, and you already packed {numPackedItems + " "}(
          {Math.round(percentPackedItems) + "%"}){" "}
        </em>
      )}{" "}
    </footer>
  );
}
