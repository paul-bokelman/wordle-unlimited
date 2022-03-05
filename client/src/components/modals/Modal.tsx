import { useState, useEffect, ReactChild } from "react";
import { useSpring, animated } from "react-spring";
type Props = {
  type: "";
  children: ReactChild | ReactChild[];
};

export const Modal = ({ children }: Props) => {
  return <div>{children}</div>;
};
