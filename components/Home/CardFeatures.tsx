"use client";
import React from "react";

interface ICardProps {
  title: string;
  description: string;
}

const CardFeatures = ({ title, description }: ICardProps) => {
  return (
    <div className="w-full md:max-w-xl p-4 cursor-pointer ">
      <details
        className="open:bg-dark-background dark:open:bg-light-background open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg border bg-dark-background dark:bg-light-background text-center "
        open
      >
        <summary className="text-sm leading-6 text-dark-text dark:text-light-text font-semibold select-none">
          {title}
        </summary>
        <div className="mt-3 text-sm leading-6 text-dark-text dark:text-light-text">
          <p>{description}</p>
        </div>
      </details>
    </div>
  );
};

export default CardFeatures;
