import { useEffect, ReactChild } from "react";
import { animated, useSpring } from "react-spring";

export const GridContainer = ({
  incorrect,
  children,
}: {
  incorrect: boolean;
  children: ReactChild[] | ReactChild;
}): JSX.Element => {
  const [{ x, y }, api] = useSpring(() => ({
    from: { x: 0, y: 0 },
    config: { mass: 1, tension: 1000, friction: 15 },
  }));

  const xInterpolate = x.to(
    [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
    [0, 12, 8, 12, 8, 12, 8, 0]
  );

  const yInterpolate = y.to(
    [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
    [0, 2, 1, 2, 1, 2, 1, 0]
  );

  // Update state when ready to shake
  useEffect(() => {
    if (incorrect) {
      api.start({
        from: { x: 0, y: 0 },
        to: { x: 1, y: 1 },
      });
    }
  }, [incorrect]);

  return (
    <animated.div
      style={{ x: xInterpolate, y: yInterpolate }}
      className="relative flex flex-col gap-2"
    >
      {children}
    </animated.div>
  );
};
