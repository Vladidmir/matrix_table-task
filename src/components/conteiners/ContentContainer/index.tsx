import { FC, ReactNode } from "react";
import s from "./contentContainer.module.scss";

interface IContentContainer {
  children: ReactNode;
}
export const ContentContainer: FC<IContentContainer> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
