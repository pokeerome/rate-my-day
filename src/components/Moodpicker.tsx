type MoodPickerProps = {
  moods: { id: string; emoji: string }[];
  onSelect: (moodId: string) => void;
};

export default function MoodPicker({ moods, onSelect }: MoodPickerProps) {
  return (
    <div className="flex flex-col items-center w-full px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 mt-16 break-words">
        Pick your mood today
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-6xl sm:text-7xl">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => onSelect(mood.id)}
            className="hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            {mood.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
