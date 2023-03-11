import { FC, ReactNode } from "react";
import { ContentContainer } from "../ContentContainer";

import s from "./outsideAppContainer.module.scss";
interface IOutsideAppContainer {
  children: ReactNode;
}

export const OutsideAppContainer: FC<IOutsideAppContainer> = ({ children }) => {
  return (
    <div className={s.outsideContainer}>
      <ContentContainer>{children}</ContentContainer>
    </div>
  );
};
