type MoodPickerProps = {
  moods: { id: string; emoji: string }[];
  onSelect: (moodId: string) => void;
};

export default function MoodPicker({ moods, onSelect }: MoodPickerProps) {
  return (
    <>
      <h1 className="text-6xl mb-27 mt-20">Pick your mood today</h1>
      <div className="flex gap-4 items-center text-8xl">
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
    </>
  );
}
