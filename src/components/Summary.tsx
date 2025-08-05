type SummaryProps = {
  moodId: string | null;
  moodEmoji: string | null;
  productivityId: string | null;
  note: string;
  onDone: () => void;
};

const moodLabels: { [key: string]: string } = {
  angry: "angry",
  sad: "sad",
  neutral: "neutral",
  happy: "happy",
};

const productivityLabels: { [key: string]: string } = {
  "very-low": "very low",
  low: "low",
  medium: "medium",
  high: "high",
  "very-high": "very high",
};

export default function Summary({
  moodId,
  moodEmoji,
  productivityId,
  note,
  onDone,
}: SummaryProps) {
  return (
    <div className="w-full mt-20 max-w-2xl mx-auto bg-[linear-gradient(89.2deg,_rgba(255,255,255,1)_-1.3%,_rgba(253,109,38,1)_281.6%)] p-6 sm:p-8 rounded-2xl text-xl text-center shadow-lg">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6">Your Entry Summary</h1>

      <p className="mb-4 text-2xl">
        <strong>Mood:</strong> {moodEmoji} | {moodId ? moodLabels[moodId] : "N/A"}
      </p>

      <p className="mb-4 text-2xl">
        <strong>Productivity:</strong>{" "}
        {productivityId ? productivityLabels[productivityId] : "N/A"}
      </p>

      <p className="text-2xl whitespace-pre-wrap break-words mt-4">
        <strong>Note:</strong> {note || "No note written."}
      </p>

      <button
        onClick={onDone}
        className="mt-8 px-6 py-2 text-lg sm:text-xl font-semibold rounded-lg bg-orange-400 text-white hover:scale-105 transition-transform"
      >
        Done
      </button>
    </div>
  );
}
