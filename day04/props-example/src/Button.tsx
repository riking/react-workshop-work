import { MouseEventHandler } from "react";

interface ButtonProps {
    value: number,
    onClick: MouseEventHandler<HTMLButtonElement>,
}

const Button = ({value, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick}><h1>Increase {value}</h1></button>
  )
};

export default Button;
