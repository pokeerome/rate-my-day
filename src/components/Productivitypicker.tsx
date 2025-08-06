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
    <div className="flex flex-col items-center w-full px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-4 mt-16 break-words">
        Rate your productivity
      </h1>
      <p className="text-xl sm:text-2xl text-amber-300 h-6 mb-8 mt-2 text-center">
        {hoveredId || ""}
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-3xl sm:text-5xl">
        {productivityLevels.map((level, index) => (
          <button
            key={index}
            onClick={() => onSelect(level.id)}
            onMouseEnter={() => setHoveredId(level.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            {level.label.repeat(index + 1)}
          </button>
        ))}
      </div>
    </div>
  );
}
