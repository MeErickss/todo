import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";

export function Check({ isChecked, toggleConcluir }) {
  const className = isChecked
    ? "rounded-full w-4 h-4 flex items-center justify-center border-2 border-roxo-dark bg-roxo-dark"
    : "rounded-full w-4 h-4 flex items-center justify-center border-2 border-gray-500";

  const handleClick = () => {
    toggleConcluir();
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <input type="checkbox" className="hidden" checked={isChecked} readOnly />
      <span className={className}>
        {isChecked ? <IconCheck /> : null}
      </span>
    </div>
  );
}
