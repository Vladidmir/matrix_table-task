import { useContext, useState } from "react";

import { HeaderCell, RegularCell, SumCell, AverageCell } from "./tableCells";
import TableHeader from "./TableHeader";
import { Button } from "components";

import { MatrixContext } from "context/matrixContext/MatrixProvider";
import { Cell } from "types/matrixModel";

import { dynamicVarieables } from "../../constants/dynamicLaoutVariables";

import s from "./table.module.scss";

export const Table = () => {
  const {
    matrix,
    summary,
    percent,
    changeCell,
    deleteRow,
    addRow,
    rowForShowPercent,
    changeCellForShowClosetValue,
    changeRowForShowPercent,
  } = useContext(MatrixContext);

  const [isHoveringCell, setIsHoveringCell] = useState(false);

  const { cell, button } = dynamicVarieables;

  const handleCellHover = (cell: Cell) => {
    changeCellForShowClosetValue(cell);
    setIsHoveringCell(true);
  };

  const handleCellMouseLeave = () => {
    setIsHoveringCell(false);
  };

  const handleRowHover = (rowIndex: number) => {
    changeRowForShowPercent(rowIndex);
  };

  const handleRowMouseLeave = () => {
    changeRowForShowPercent(-1);
  };

  const renderHeaderCell = (rowIndex: number) => {
    return <HeaderCell key={`${rowIndex}`} name={`${cell.m}${rowIndex + 1}`} />;
  };

  const renderRegularCell = (
    cell: Cell,
    rowIndex: number,
    columnIndex: number
  ) => {
    return (
      <RegularCell
        key={cell.id}
        cell={cell}
        hover={isHoveringCell}
        onMouseEnter={() => handleCellHover(cell)}
        onMouseLeave={handleCellMouseLeave}
        percent={rowForShowPercent === rowIndex ? percent[columnIndex] : -1}
        onPress={() => changeCell(rowIndex, columnIndex)}
      />
    );
  };

  const renderSumCell = (rowIndex: number) => {
    return (
      <SumCell
        key={`Summary${rowIndex}`}
        name={summary[rowIndex].toString()}
        onMouseEnter={() => handleRowHover(rowIndex)}
        onMouseLeave={handleRowMouseLeave}
      />
    );
  };

  const renderDeleteButton = (rowIndex: number) => {
    return (
      <td>
        <Button
          key={`Delete${rowIndex}`}
          onPress={() => deleteRow(rowIndex)}
          laout={"delete"}
        >
          {button.delete}
        </Button>
      </td>
    );
  };

  const renderRow = (row: Cell[], rowIndex: number) => {
    return (
      <tr key={rowIndex}>
        {renderHeaderCell(rowIndex)}
        {row.map((cell, columnIndex) =>
          renderRegularCell(cell, rowIndex, columnIndex)
        )}
        {renderSumCell(rowIndex)}
        {renderDeleteButton(rowIndex)}
      </tr>
    );
  };

  const renderAddButton = () => {
    return (
      <tr>
        <td>
          <Button onPress={addRow} laout={"add"}>
            {button.add}
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <div className={s.table}>
      {matrix[0]?.length > 0 ? (
        <table className={s.tableAlign}>
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {matrix.map((row, rowIndex) => renderRow(row, rowIndex))}
            <AverageCell />
          </tbody>
          <tfoot>{renderAddButton()}</tfoot>
        </table>
      ) : (
        ""
      )}
    </div>
  );
};
