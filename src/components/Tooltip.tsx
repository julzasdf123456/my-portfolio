import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
  shouldShow: boolean;
  otherClass?: string;
}

const Tooltip = ({ children, text, shouldShow, otherClass }: Props) => {
  return (
    <div className="relative group">
      {children}
      <span
        className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-2 mb-2 hidden z-50 ${
          shouldShow ? "group-hover:block" : ""
        } ${otherClass} bg-indigo-900 px-3 py-2 text-sm rounded-lg`}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
