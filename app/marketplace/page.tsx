//next-auth
import { getSession } from "next-auth/react";
//my components
import Title from "@/components/Title";

const Marketplace = () => {
  return (
    <div className="relative">
      <Title text="Marketplace" />
      Marketplac Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
      sunt autem, ab quibusdam ipsum, et vitae deleniti delectus sint molestiae,
      in tempora nobis sed alias molestias qui quidem dolorum adipisci.
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/", // Redirect to the login page if the user is not authenticated
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Marketplace;
