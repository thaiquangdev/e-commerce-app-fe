import { Checkbox, Input } from "@nextui-org/react";
import React, { useState } from "react";

const FilterProduct = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3>Filter by</h3>
        <div className="flex items-center gap-5 mt-2">
          <div className="relative">
            <p
              className="px-3 py-2 rounded-md border cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            >
              Brand
            </p>
            {open && (
              <div className="flex flex-col gap-2 absolute w-[200px] bg-white">
                <Checkbox>Apple</Checkbox>
                <Checkbox>Samsung</Checkbox>
                <Checkbox>Vivo</Checkbox>
                <Checkbox>Realme</Checkbox>
                <Checkbox>Oppo</Checkbox>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Input type="number" placeholder="min price" />
            <Input type="number" placeholder="max price" />
          </div>
        </div>
      </div>
      <div>
        <h3>Sort by</h3>
        <select name="" id="" className="border px-3 py-2 rounded-md mt-2">
          <option value="">Best selling</option>
          <option value="">Featured</option>
          <option value="">Alphabetically, A - Z</option>
          <option value="">Alphabetically, Z - A</option>
          <option value="">Price, low to high</option>
          <option value="">Price, hight to low</option>
          <option value="">Date, old to new</option>
          <option value="">Date, new to old</option>
        </select>
      </div>
    </div>
  );
};

export default FilterProduct;
