//react-hooks

//my components
import Title from "@/components/Title";
import InventoryContainer from "@/components/Inventory/InventoryContainer";
//next-auth
import { getSession } from "next-auth/react";
//db and Models
import { connectToDB } from "@/utils/database";
import UserModel from "@/models/user";
//en next auth lo hemos importado como User???

//
export async function getServerSideProps(context: any) {
  // Connect to the database
  connectToDB();

  // Retrieve the user's session
  const session = await getSession(context);

  if (!session?.user?.id) {
    // Handle unauthenticated user
    return {
      redirect: {
        destination: "/", // Redirect to login page
        permanent: false,
      },
    };
  }

  // Retrieve user data with populated inventory
  const user = await UserModel.findById(session.user._id).populate(
    "inventoryId"
  );

  return {
    props: {
      user,
    },
  };
}

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
