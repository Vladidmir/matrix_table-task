import { MouseEventHandler } from "react";

import s from "./sumCell.module.scss";

export const SumCell = (props: {
  name: string;
  onMouseEnter: MouseEventHandler<HTMLTableCellElement>;
  onMouseLeave: MouseEventHandler<HTMLTableCellElement>;
}) => {
  return (
    <td
      className={s.sumSell}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.name}
    </td>
  );
};

export default SumCell;
