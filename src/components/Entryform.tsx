import { useState } from "react";
import MoodPicker from "./Moodpicker";
import Productivitypicker from "./Productivitypicker";
import Note from "./Note";
import Summary from "./Summary";
import EntriesList from "./Entrieslist";

type Entry = {
  mood: { id: string | null; emoji: string | null };
  productivity: string | null;
  note: string;
  timestamp: string;
};

export default function Entryform() {
  const [step, setStep] = useState(0);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedProductivity, setSelectedProductivity] = useState<
    string | null
  >(null);
  const [saveNote, setSaveNote] = useState<string>("");
  const [entries, setEntries] = useState<Entry[]>(() => {
    const saved = localStorage.getItem("entries");
    return saved ? JSON.parse(saved) : [];
  });

  const moods = [
    { id: "angry", emoji: "😠" },
    { id: "sad", emoji: "😔" },
    { id: "neutral", emoji: "😐" },
    { id: "happy", emoji: "😄" },
  ];

  const productivityLevels = [
    { id: "very-low", label: "⭐" },
    { id: "low", label: "⭐" },
    { id: "medium", label: "⭐" },
    { id: "high", label: "⭐" },
    { id: "very-high", label: "⭐" },
  ];

  const handleDelete = (index: number) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    localStorage.setItem("entries", JSON.stringify(updatedEntries)); // ✅ add this
  };

  const handleEdit = (index: number) => {
    const entry = entries[index];

    setSelectedMood(entry.mood.id);
    setSelectedProductivity(entry.productivity);
    setSaveNote(entry.note);

    const updatedEntries = entries.filter((_, i) => i !== index); // Remove old entry
    setEntries(updatedEntries);
    localStorage.setItem("entries", JSON.stringify(updatedEntries)); // ✅ add this

    setStep(1); // Restart entry form
  };

  return (
    <div className="flex flex-col items-center w-full">
      {step === 0 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setStep(1)}
            className="w-full sm:w-auto px-6 py-3 text-lg sm:text-xl font-semibold rounded-xl hover:scale-105 transition-transform bg-orange-400 text-white"
          >
            Start New Entry
          </button>
          <button
            onClick={() => setStep(5)}
            className="w-full sm:w-auto px-6 py-3 text-lg sm:text-xl font-semibold rounded-xl hover:scale-105 transition-transform bg-blue-200 text-blue-800"
          >
            See Your Entries
          </button>
        </div>
      )}

      {step === 1 && (
        <MoodPicker
          moods={moods}
          onSelect={(moodId) => {
            setSelectedMood(moodId);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <Productivitypicker
          productivityLevels={productivityLevels}
          onSelect={(levelId) => {
            setSelectedProductivity(levelId);
            setStep(3);
          }}
        />
      )}

      {step === 3 && (
        <Note note={saveNote} setNote={setSaveNote} onSave={() => setStep(4)} />
      )}

      {step === 4 && (
        <Summary
          moodId={selectedMood}
          moodEmoji={moods.find((m) => m.id === selectedMood)?.emoji ?? null}
          productivityId={selectedProductivity}
          note={saveNote}
          onDone={() => {
            const newEntry: Entry = {
              mood: {
                id: selectedMood,
                emoji: moods.find((m) => m.id === selectedMood)?.emoji ?? null,
              },
              productivity: selectedProductivity,
              note: saveNote,
              timestamp: new Date().toISOString(),
            };

            setEntries((prev) => {
              const updated = [...prev, newEntry];
              localStorage.setItem("entries", JSON.stringify(updated));
              return updated;
            });
            setSelectedMood(null);
            setSelectedProductivity(null);
            setSaveNote("");
            setStep(5);
          }}
        />
      )}

      {step === 5 && (
        <EntriesList
          entries={entries}
          onBack={() => setStep(0)}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onClear={() => {
            localStorage.removeItem("entries");
            setEntries([]);
          }}
        />
      )}
    </div>
  );
}
