import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";

export function Check({ isChecked, toggleConcluir }) {

  let [Class, setClass] = useState("rounded-full w-4 h-4 flex items-center justify-center border-2 border-gray-500")
  const inverterClass = ()=>{
    if (Class=="rounded-full w-4 h-4 flex items-center justify-center border-2 border-gray-500"){
      setClass("rounded-full w-4 h-4 flex items-center justify-center border-2 border-roxo-dark bg-roxo-dark")
    }else{setClass("rounded-full w-4 h-4 flex items-center justify-center border-2 border-gray-500")}
  }


  return (
    <div onClick={() => {toggleConcluir; isChecked = !isChecked; inverterClass()}} className="cursor-pointer">
      <input type="checkbox" className="hidden" checked={isChecked} readOnly />
      <span
        className={Class}
      >
        {isChecked ? <IconCheck />:<></>}
      </span>
    </div>
  );
}
