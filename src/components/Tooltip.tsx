import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
  shouldShow: boolean;
  otherClass?: string;
  description?: string;
}

const Tooltip = ({
  children,
  text,
  shouldShow,
  otherClass,
  description,
}: Props) => {
  return (
    <div className="relative group">
      {children}
      <div
        className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-2 mb-2 hidden z-50 ${
          shouldShow ? "group-hover:block" : ""
        } bg-indigo-900 px-3 py-2 text-sm rounded-lg`}
      >
        <span className={`${otherClass}`}>{text}</span>
        {description ? (
          <p className="text-sm text-white text-opacity-70">{description}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Tooltip;
