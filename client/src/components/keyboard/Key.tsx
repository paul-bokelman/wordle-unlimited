import { HiOutlineBackspace } from "react-icons/hi";
import { colors } from "../../constants/colors";

type KeyProps = {
  char?: string;
  state: "correct" | "misplaced" | "incorrect" | "empty" | "active";
  active: boolean;
  handleCharacter: (char: string) => void;
  handleBackspace: () => void;
  handleConfirmation: () => void;
};

type CharProps = {
  char: string | undefined;
  state: "correct" | "misplaced" | "incorrect" | "empty" | "active";
  active: boolean;
  handleCharacter: (char: string) => void;
};

export const Key = ({
  char,
  state,
  active,
  handleCharacter,
  handleBackspace,
  handleConfirmation,
}: KeyProps): JSX.Element => {
  if (char === "Enter")
    return <EnterKey handleConfirmation={handleConfirmation} active={active} />;
  if (char === "Backspace")
    return <BackspaceKey handleBackspace={handleBackspace} active={active} />;
  return (
    <Char
      char={char}
      state={state}
      handleCharacter={handleCharacter}
      active={active}
    />
  );
};

const Char = ({ char, state, active, handleCharacter }: CharProps) => {
  return (
    <div
      onClick={() => handleCharacter(char as string)}
      style={{ backgroundColor: colors[state] }}
      className={`transform ${
        active ? "scale-90" : "scale-100"
      } flex items-center justify-center py-3 px-4 rounded-md cursor-pointer transition duration-100 ease-in-out`}
    >
      <span className="text-white text-base font-medium capitalize">
        {char}
      </span>
    </div>
  );
};

const EnterKey = ({
  active,
  handleConfirmation,
}: {
  active: boolean;
  handleConfirmation: () => void;
}) => (
  <div
    style={{ backgroundColor: active ? "#3589c9" : colors["empty"] }}
    onClick={handleConfirmation}
    className={`transform ${
      active ? "scale-90" : "scale-100"
    } flex items-center justify-center col-span-2 rounded-md cursor-pointer transition duration-100 ease-in-out`}
  >
    <span className="text-white text-base font-medium capitalize">Enter</span>
  </div>
);

const BackspaceKey = ({
  active,
  handleBackspace,
}: {
  active: boolean;
  handleBackspace: () => void;
}) => (
  <div
    onClick={handleBackspace}
    style={{ backgroundColor: active ? "#ff3030" : colors["empty"] }}
    className={`transform ${
      active ? "scale-90" : "scale-100"
    } flex items-center justify-center row-span-2 rounded-md cursor-pointer transition duration-100 ease-in-out`}
  >
    <HiOutlineBackspace className="text-white text-2xl font-medium capitalize" />
  </div>
);
