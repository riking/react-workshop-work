import { MouseEventHandler } from "react";

const Button = ({value, onClick}: {value: number, onClick: MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <button onClick={onClick}><h1>Button {value}</h1></button>
  )
};

export default Button;
