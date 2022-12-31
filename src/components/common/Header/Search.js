import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Search({ onClose }) {
  return (
    <div className="absolute top-1 right-0 left-0 lg:w-2/5 w-11/12 mt-3 lg:mt-0 mx-auto bg-background rounded px-2 border border-white/20">
      <div className="flex items-center">
        <button type="button" onClick={onClose} className="px-2 pr-4">
          <AiOutlineArrowLeft size={20} color="white" />
        </button>
        <input
          type="text"
          className="py-3 w-full bg-transparent outline-none text-lg font-semibold"
          placeholder="Arayın"
        />
      </div>
    </div>
  );
}
