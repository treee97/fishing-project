import React from "react";

const MarketTable = () => {
  // to do: when data is received from mongo the table will be automatically created. this is just testing. somehow add a hex string in a json for rarity item.
  //⁡⁢⁣⁢ SEARCH BAR AND FILTERS !!! SPRINT 7⁡
  return (
    <table className="overflow-hidden text-lg table-fixed border border-slate-500 text-light-text dark:text-light-text w-full rounded-lg">
      <tbody>
        <tr className="text-dark-text dark:text-light-text bg-dark-background dark:bg-light-background">
          <th className="border border-slate-600">Item</th>
          <th className="border border-slate-600">Rarity</th>
          <th className="border border-slate-600">Price</th>
          <th className="border border-slate-600">Purchase</th>
        </tr>
        <tr className="odd:bg-zinc-100 even:bg-zinc-300 text-center">
          <td>Seven Seas Octopus</td>
          <td style={{ color: "#2E81FF" }}>Raree</td>
          <td className="stroke-text">10</td>
          <td className="p-2">
            <button className="rounded-md bg-dark-primary text-light-secondary px-2 hover:bg-dark-secondary hover:text-white">
              Buy
            </button>
          </td>
        </tr>
        <tr className="odd:bg-zinc-100 even:bg-zinc-300 text-center">
          <td>fisha B</td>
          <td style={{ color: "#38ff6a" }}>Uncommon</td>
          <td className="stroke-text">7</td>
          <td>Buy</td>
        </tr>
        <tr className="odd:bg-zinc-100 even:bg-zinc-300 text-center">
          <td>fish C</td>
          <td style={{ color: "#FFC530" }}>Exotic</td>
          <td className="stroke-text">167</td>
          <td>Buy</td>
        </tr>
        <tr className="odd:bg-zinc-100 even:bg-zinc-300 text-center">
          <td className="p-1 overflow-auto">califrastilisticoespiralidoso</td>
          <td style={{ color: "#e202a7" }}>Legendary</td>
          <td className="p-1 stroke-text">167.000.000</td>
          <td>Buy</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MarketTable;
