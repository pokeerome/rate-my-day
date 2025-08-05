type Entry = {
  mood: { id: string | null; emoji: string | null };
  productivity: string | null;
  note: string;
  timestamp: string;
};

type EntriesListProps = {
  entries: Entry[];
  onBack: () => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
};

export default function EntriesList({
  entries,
  onBack,
  onEdit,
  onDelete,
}: EntriesListProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 text-center">
      <button
        onClick={onBack}
        className="mb-8 mt-20 px-5 py-2 rounded-lg text-black font-semibold bg-[linear-gradient(89.2deg,_rgba(255,255,255,1)_-1.3%,_rgba(253,109,38,1)_281.6%)] hover:scale-105 transition-transform"
      >
        ⬅ Back to Home
      </button>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Your Entries</h1>

      {entries.length === 0 ? (
        <p className="text-lg">No entries yet.</p>
      ) : (
        <div className="space-y-6">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow break-words w-full text-left"
            >
              <p className="text-lg sm:text-xl mb-2">
                <strong>Mood:</strong> {entry.mood.emoji} | {entry.mood.id}
              </p>
              <p className="text-lg sm:text-xl mb-2">
                <strong>Productivity:</strong> {entry.productivity}
              </p>
              <p className="text-lg sm:text-xl whitespace-pre-wrap break-words mb-4">
                <strong>Note:</strong> {entry.note}
              </p>
              <div className="flex justify-end flex-wrap gap-3">
                <button
                  onClick={() => onEdit(index)}
                  className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
