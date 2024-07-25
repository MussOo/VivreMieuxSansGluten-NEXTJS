"use client";
import useCategory from "@/app/hooks/useCategory";
import { useEffect, useState } from "react";

export default function SelectCategory({
  setCategory_selected,
  category_selected,
}: {
  setCategory_selected: (category: number) => void;
  category_selected: number;
}) {
  const { categories } = useCategory();

  useEffect(() => {
    if (categories.length > 0) {
      setCategory_selected(categories[0].id);
    }
  }, [categories]);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-4 justify-center items-center">
      {categories.map((category) => (
        <button
          className={
            "text-white p-2 rounded-md w-80 hover:bg-blue-700 hover:text-white hover:shadow-lg transition-all font-bold  hover:scale-105 duration-300 ease-in-out" +
            (category_selected === category.id
              ? " scale-110  text-white shadow-lg"
              : "")
          }
          style={{ backgroundColor: category.color }}
          key={category.id}
          onClick={() => setCategory_selected(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
