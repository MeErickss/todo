import { IconCheck } from "@tabler/icons-react";

export function Check({ isChecked, toggleConcluir }) {
  return (
    <div onClick={toggleConcluir} className="cursor-pointer">
      <input type="checkbox" className="hidden" checked={isChecked} readOnly />
      <span
        className={`rounded-full w-4 h-4 flex items-center justify-center border-2 ${
          isChecked ? "border-roxo-dark bg-roxo-dark" : "border-gray-500"
        }`}
      >
        {isChecked && <IconCheck />}
      </span>
    </div>
  );
}
