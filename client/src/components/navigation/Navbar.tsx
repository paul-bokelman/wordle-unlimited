import type { ModalStates } from "../../App";
import { FiSettings } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
type Props = {
  toggleModal: (modal: ModalStates) => void;
};

export const Navbar = ({ toggleModal }: Props) => {
  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/4 flex flex-row items-center justify-between">
      <FaRegQuestionCircle
        className="text-white cursor-pointer"
        size={18}
        onClick={() => toggleModal("directions")}
      />
      <h1 className="text-white text-2xl font-bold">Wordle</h1>
      <FiSettings
        className="text-white cursor-pointer"
        size={18}
        onClick={() => toggleModal("settings")}
      />
    </div>
  );
};
