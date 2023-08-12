//next-auth
import { getSession } from "next-auth/react";
//my components
import Title from "@/components/Title";

const Marketplace = () => {
  return (
    <div className="relative">
      {/* hacer la tabla en el buy.tsx componente y el sell.tsx en otro componente */}
      <Title text="Marketplace" />
      <table className="table-fixed hover:border-collapse border border-slate-500 text-dark-text dark:text-light-text w-full ">
        <tbody>
          <tr className="bg-dark-background dark:bg-light-background">
            <th className="border border-slate-600">Item</th>
            <th className="border border-slate-600">Rarity</th>
            <th className="border border-slate-600">Price</th>
            <th className="border border-slate-600">User</th>
          </tr>
          <tr className="odd:bg-zinc-100 even:bg-zinc-300">
            <td>fish A</td>
            <td style={{ color: "#2E81FF" }}>Rare</td>
            <td>10c</td>
            <td>treee97</td>
          </tr>
          <tr className="odd:bg-zinc-100 even:bg-zinc-300">
            <td>fish B</td>
            <td style={{ color: "#2b2b2b" }}>Common</td>
            <td>7c</td>
            <td>treee97</td>
          </tr>
          <tr className="odd:bg-zinc-100 even:bg-zinc-300">
            <td>fish C</td>
            <td style={{ color: "#FFC530" }}>Exotic</td>
            <td>167c</td>
            <td>treee97</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Marketplace;
