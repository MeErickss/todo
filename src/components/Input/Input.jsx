import { useState } from "react";

export function Input({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value); 
  };

  let [Class, setClass] = useState(
    "bg-cinza-500 text-cinza-100 border-[1px] border-cinza-700 rounded-md h-12 p-4 leading-normal outline-none w-full"
  );

  return (
    <input
      type="text"
      value={value} 
      onChange={(event) => {
        handleChange(event); 
        event.target.value === ""
          ? setClass(
              "bg-cinza-500 text-cinza-100 border-[1px] border-cinza-700 rounded-md h-12 p-4 leading-normal outline-none w-full"
            )
          : setClass(
              "bg-cinza-500 text-cinza-100 border-[1px] border-purple-600 rounded-md h-12 p-4 leading-normal outline-none w-full"
            );
      }}
      className={Class}
    />
  );
}
