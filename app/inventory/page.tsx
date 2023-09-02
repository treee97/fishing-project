//my components
import Title from "@/components/Title";
import InventoryContainer from "@/components/Inventory/InventoryContainer";
//next-auth

const Inventory = ({ user }: any) => {
  const userInventory = user?.inventoryId?.items || [];
  return (
    <div className="relative section custom-padding">
      <Title text="Inventory" />
      <InventoryContainer items={userInventory} />
      {/* div flex 
        <invCont />
        <StorageContainer />
      */}
    </div>
  );
};

export default Inventory;
