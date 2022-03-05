import { ReactChild } from "react";

type Props = {
  children: ReactChild[];
};

export const AppContainer = ({ children }: Props): JSX.Element => {
  const [Navbar, Grid, Keyboard, ModalController, Footer]: ReactChild[] =
    children;
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-[#161821] ">
      {Navbar}
      <div className="flex flex-col gap-4 items-center justify-center my-6">
        {Grid}
        {Keyboard}
      </div>
      {ModalController}
      {Footer}
    </div>
  );
};
