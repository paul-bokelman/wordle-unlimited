import {
  LoserModal,
  WinnerModal,
  InvalidWordModal,
  SettingsModal,
  DirectionsModal,
} from ".";
type Props = {
  reset: () => void;
  modal: "loser" | "winner" | "invalid" | "directions" | "settings" | null;
};

export const ModalController = ({ reset, modal }: Props) => {
  const isWinner = modal === "winner";
  const isLoser = modal === "loser";
  const isInvalid = modal === "invalid";
  const isDirections = modal === "directions";
  const isSettings = modal === "settings";
  return (
    <>
      {isLoser && <LoserModal reset={reset} />}
      {isWinner && <WinnerModal reset={reset} />}
      {isInvalid && <InvalidWordModal />}
      {isDirections && <DirectionsModal />}
      {isSettings && <SettingsModal />}
    </>
  );
};
