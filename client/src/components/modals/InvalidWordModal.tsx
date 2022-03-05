export const InvalidWordModal = () => {
  return (
    <div className="absolute px-2 py-2 bg-red-500/20 rounded-md">
      <div className="px-12 py-10 bg-red-500 text-black font-bold text-xl rounded-md">
        Word is not in list...
      </div>
      <button className="bg-red-200 w-full text-black font-bold text-sm px-2 py-1 rounded-md mt-1">
        New Word
      </button>
    </div>
  );
};
