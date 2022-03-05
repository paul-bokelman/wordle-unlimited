import { useEffect, useState } from "react";
import { useWordContext } from "./context/word";
import {
  AppContainer,
  Navbar,
  Grid,
  Keyboard,
  ModalController,
  Footer,
} from "./components";

export type ModalStates =
  | "loser"
  | "winner"
  | "invalid"
  | "directions"
  | "settings"
  | null;

const App = (): JSX.Element => {
  const { word, loading, rows, setLength, newWord } = useWordContext();

  const [currentGuess, setCurrentGuess] = useState<Array<string>>([]);
  const [incorrect, setIncorrect] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [modal, renderModal] = useState<ModalStates>(null);

  const reset = (): void => {
    setCurrentGuess([]);
    setIndex(0);
    setGuesses([]);
    renderModal(null);
    setLength(5);
    newWord();
  };

  const isIncorrect = (): void => {
    setIncorrect(true);
    setTimeout(() => setIncorrect(false), 500);
  };

  const renderInvalidWordModal = (): void => {
    renderModal("invalid");
    setTimeout(() => {
      renderModal(null);
    }, 2000);
  };

  useEffect(() => {
    if (guesses.length === rows) {
      renderModal("loser");
    }
  }, [guesses]);

  return (
    <AppContainer>
      <Navbar toggleModal={(modal: ModalStates) => renderModal(modal)} />
      <Grid
        index={index}
        currentGuess={currentGuess}
        incorrect={incorrect}
        guesses={guesses}
        isWinner={modal === "winner"}
      />
      <Keyboard
        isWinner={modal === "winner"}
        guesses={guesses}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        isIncorrect={isIncorrect}
        setIndex={setIndex}
        setGuesses={setGuesses}
        setIsWinner={() => renderModal("winner")}
        renderInvalidWordModal={renderInvalidWordModal}
      />
      <ModalController reset={reset} modal={modal} />
      <Footer />
    </AppContainer>
  );
};

export default App;
