import { GridContainer } from "../containers";
import { CompletedRow, CurrentRow, EmptyRow } from ".";
import { useWordContext } from "../../context/word";

type Props = {
  currentGuess: Array<string>;
  guesses: Array<string>;
  index: number;
  incorrect: boolean;
  isWinner: boolean;
};

export const Grid = ({
  currentGuess,
  guesses,
  index,
  incorrect,
  isWinner,
}: Props): JSX.Element => {
  const { rows } = useWordContext();
  return (
    <GridContainer incorrect={incorrect}>
      {Array.from(Array(rows).keys()).map((_, rowIndex) => {
        const guess = guesses[rowIndex];
        const isCurrentRow = rowIndex === index;
        const isCompletedRow = rowIndex < guesses.length;

        if (isCompletedRow) {
          return <CompletedRow key={rowIndex} guess={guess} />;
        }

        if (isCurrentRow) {
          return (
            <CurrentRow
              key={rowIndex}
              currentGuess={currentGuess}
              isWinner={isWinner}
            />
          );
        }

        return <EmptyRow key={rowIndex} />;
      })}
    </GridContainer>
  );
};
