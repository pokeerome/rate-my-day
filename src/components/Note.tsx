import { useRef } from "react";

interface NoteProps {
  note: string;
  setNote: (note: string) => void;
  onSave: () => void;
}

export default function Note({ note, setNote, onSave }: NoteProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
    setNote(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-20">What happened today?</h1>

      <textarea
        ref={textareaRef}
        value={note}
        onChange={handleInput}
        placeholder="Write a quick note"
        className="w-full text-xl sm:text-2xl p-4 mt-6 border border-gray-300 bg-[linear-gradient(89.2deg,_rgba(255,255,255,1)_-1.3%,_rgba(253,109,38,1)_281.6%)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none overflow-hidden break-words whitespace-pre-wrap shadow"
        rows={3}
      />

      <button
        onClick={onSave}
        className="mt-8 px-6 py-2 text-lg sm:text-xl font-semibold rounded-lg border border-black bg-[linear-gradient(90.5deg,_rgba(112,181,176,1)_1.9%,_rgba(220,244,241,1)_87.7%)] hover:scale-110 transition-transform duration-200 cursor-pointer"
      >
        Save Note
      </button>
    </div>
  );
}
