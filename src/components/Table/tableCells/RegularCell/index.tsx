import { MouseEventHandler, useContext } from "react";

import { Cell } from "types/matrixModel";

import { MatrixContext } from "context/matrixContext/MatrixProvider";

import cn from "classnames";
import s from "./regularCell.module.scss";

export const RegularCell = (props: {
  hover: boolean;
  percent: number;
  cell: Cell;
  onPress: MouseEventHandler<HTMLTableCellElement>;
  onMouseEnter: MouseEventHandler<HTMLTableCellElement>;
  onMouseLeave: MouseEventHandler<HTMLTableCellElement>;
}) => {
  const { closetValue } = useContext(MatrixContext);

  const getTextOfClosetValue = (): string => {
    const values = closetValue.map((item) => item.amount);
    const lastIndex = values.length - 1;
    const text = "Closest amount: " + values.join(", ");
    return lastIndex > 0 ? text.replace(/,([^,]*)$/, ", and$1") : text;
  };

  const cellClass = cn(s.cell, s.cellItem, {
    [s.cellItemPercent]: props.percent >= 0,
    [s.cellItemHover]:
      closetValue.some((item) => item.id === props.cell.id) && props.hover,
  });

  return (
    <>
      <td
        className={cellClass}
        onClick={props.onPress}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        data-title={getTextOfClosetValue()}
      >
        {props.percent >= 0 ? (
          <>
            <span>{props.cell.amount}</span>
            <span className="cell__item_percent-value">
              {`\u2192 ${props.percent}%`}
            </span>
          </>
        ) : (
          <span>{props.cell.amount}</span>
        )}
      </td>
    </>
  );
};
