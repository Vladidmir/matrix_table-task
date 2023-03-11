import {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  FC,
  useEffect,
  useState,
} from "react";
import s from "./button.module.scss";
import cn from "classnames";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  laout: "default" | "create" | "add" | "delete";
  onPress?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({
  onPress,
  className,
  children,
  laout,
  disabled,
  type,
  style,
}) => {
  const [btnStyles, setBtnStyle] = useState<string>("");
  useEffect(() => {
    setBtnStyle(
      cn(s.button, className, {
        [s.add]: laout === "add",
        [s.delete]: laout === "delete",
        [s.create]: laout === "create",
      })
    );
  }, [className, laout]);
  return (
    <button
      type={type}
      style={style}
      disabled={disabled}
      onClick={onPress}
      className={btnStyles}
    >
      {children}
    </button>
  );
};
