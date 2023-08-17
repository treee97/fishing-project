// InventoryContainer.js
import ItemBox from "./ItemBox";
// import mockItems from "@/components/mockItems";

const InventoryContainer = ({ items }: any) => {
  const renderGrid = () => {
    const grid = [];
    for (let row = 0; row < 4; row++) {
      const rowItems = [];
      for (let col = 0; col < 4; col++) {
        const index = row * 4 + col;
        const itemData = items[index] || null;
        rowItems.push(<ItemBox key={index} itemData={itemData} />);
      }
      grid.push(
        <div key={row} className="mb-2">
          {rowItems}
        </div>
      );
    }
    return grid;
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {renderGrid()}
      {/* Render player's inventory rows similarly 
      crear la barra de 2 filas de 4 el inventario principal
      */}
    </div>
  );
};

export default InventoryContainer;
