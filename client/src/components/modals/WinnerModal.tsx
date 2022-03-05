type Props = {
  reset: () => void;
};

export const WinnerModal = ({ reset }: Props) => {
  return (
    <div className="absolute px-2 py-2 bg-yellow-500/20 rounded-md">
      <div className="px-12 py-10 bg-yellow-500 text-black font-bold text-xl rounded-md">
        You Won!
      </div>
      <button
        onClick={reset}
        className="bg-yellow-200 w-full text-black font-bold text-sm px-2 py-1 rounded-md mt-1"
      >
        New Word
      </button>
    </div>
  );
};
