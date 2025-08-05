import { useState } from "react";

type ProductivityPickerProps = {
  productivityLevels: { id: string; label: string }[];
  onSelect: (levelId: string) => void;
};

export default function Productivitypicker({
  productivityLevels,
  onSelect,
}: ProductivityPickerProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl mb-2 mt-20">Rate your productivity</h1>
      <p className="text-2xl text-amber-300 h-6 mb-10 mt-6">
        {hoveredId ? hoveredId : ""}
      </p>
      <div className="flex gap-4 text-6xl">
        {productivityLevels.map((level, index) => (
          <button
            key={index}
            onClick={() => onSelect(level.id)}
            onMouseEnter={() => setHoveredId(level.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            {level.label}
          </button>
        ))}
      </div>
    </div>
  );
}
