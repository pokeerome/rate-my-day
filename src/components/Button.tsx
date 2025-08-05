type ButtonProps = {
  onClick: () => void;
};

export default function Button({ onClick }: ButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="text-lg text-neutral-700 font-bold mt-10 px-5 py-2 rounded-full bg-gradient-to-r from-[#f6a122]/85 to-[#fe7676]/90 border-transparent bg-clip-padding cursor-pointer"
      >
        Get started
      </button>
    </div>
  );
}
