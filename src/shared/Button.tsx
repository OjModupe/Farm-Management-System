import type { ReactElement } from "react";

interface ButtonProps {
  text?: string;
  color?: string;
  borderRadius?: string;
  padding?: string;
  bgColor?: string;
  onClick?: () => void;
  width?: string;
  border?: string;
  icon?: ReactElement;
  size?: string;
}

const Button = ({
  text,
  color,
  borderRadius,
  padding,
  bgColor,
  onClick,
  width,
  border,
  icon,
  size,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` text-center flex justify-center items-center gap-3 ${text} ${color} ${borderRadius} ${padding} ${bgColor} ${width} ${border} ${size} `}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
