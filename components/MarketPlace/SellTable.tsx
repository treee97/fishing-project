import React from "react";
import ItemBox from "../Inventory/ItemBox";
import mockItems from "../mockItems";
//my components
import SellItemDetail from "./SellItemDetail";
// import InventoryContainer from "../Inventory/InventoryContainer";
const SellTable = () => {
  const renderGrid = () => {
    const grid = [];
    for (let row = 0; row < 4; row++) {
      const rowItems = [];
      for (let col = 0; col < 4; col++) {
        const index = row * 4 + col;
        const itemData = mockItems[index] || null;
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
    <>
      <div className="flex border justify-between items-center">
        {/* componente inventory inventory / container */}
        <div className="grid grid-cols-4 gap-4">{renderGrid()}</div>
        {/* <InventoryContainer />    de momento no podemos trabajar con este porque tiene items[index] => esta utilizando el array de mongodb*/}
        <SellItemDetail />
      </div>
    </>
  );
  // div con inventoryContainer/>  y  sellContainer flex
};

export default SellTable;
