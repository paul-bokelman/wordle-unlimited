import { FiGithub } from "react-icons/fi";
type Props = {};

export const Footer = (props: Props) => {
  return (
    <a
      href="https://github.com/paul-bokelman"
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full justify-center items-center text-xs text-white/20 hover:text-white/50 group"
    >
      <span className="transition duration-200 ease-in-out">Paul Bokelman</span>
      <FiGithub className="mx-2 transform group-hover:rotate-[15deg] transition duration-200 ease-in-out" />
    </a>
  );
};
