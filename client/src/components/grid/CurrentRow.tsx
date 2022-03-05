import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useWordContext } from "../../context/word";
import { Cell } from "./Cell";

type Props = {
  currentGuess: string[];
  isWinner: boolean;
};

export const CurrentRow = ({ currentGuess, isWinner }: Props) => {
  const invalid = true;
  const { length: cells } = useWordContext();
  const [winningWord, setWinningWord] = useState("");

  const [{ x }, api] = useSpring(() => ({
    from: { x: 0 },
    config: { mass: 1, tension: 1000, friction: 15 },
  }));

  const xInterpolate = x.to(
    [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
    [0, 12, 8, 12, 8, 12, 8, 0]
  );

  useEffect(() => {
    if (invalid) {
      api.start({
        from: { x: 0 },
        to: { x: 1 },
      });
    }
  }, [invalid]);

  useEffect(() => {
    setWinningWord(currentGuess.join(""));
  }, [isWinner]);
  return (
    <animated.div
      style={{ x: xInterpolate }}
      className="flex flex-row items-center gap-2"
    >
      {isWinner
        ? [...winningWord].map((char, i) => (
            <Cell key={i} char={char} state="correct" />
          ))
        : Array.from(Array(cells).keys()).map((_, i) => (
            <Cell
              key={i}
              char={currentGuess[i]}
              state={i === currentGuess.length ? "active" : "empty"}
            />
          ))}
    </animated.div>
  );
};
