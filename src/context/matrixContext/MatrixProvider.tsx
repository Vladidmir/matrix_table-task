import { FC, ReactNode, useMemo, useReducer } from "react";

import { Cell } from "types/matrixModel";
import {
  changeMatrixHeader,
  averageValues,
  sumValues,
  changePercent,
  changeClosetValue,
} from "helpers/metrixCalculations";

import { matrixReducer } from "./matrixCore/matrixReducer";
import { initialValue, MatrixContext } from "./matrixState";

type Props = {
  children: ReactNode;
};

const MatrixProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(matrixReducer, initialValue);
  const { matrix, inputs, counter, cellForShowClosetValue, rowForShowPercent } =
    state;

  const changeInputs = (name: string, value: number) => {
    dispatch({ type: "CHANGE_INPUTS", payload: { name, value } });
  };

  const resetMatrix = () => {
    dispatch({ type: "RESET_MATRIX" });
  };

  const changeMatrix = () => {
    resetMatrix();
    dispatch({ type: "CHANGE_MATRIX" });
  };

  const changeCell = (row: number, column: number) => {
    dispatch({ type: "CHANGE_CELL", payload: { row, column } });
  };

  const deleteRow = (row: number) => {
    dispatch({ type: "DELETE_ROW", payload: row });
  };

  const addRow = () => {
    dispatch({ type: "ADD_ROW" });
  };

  const changeRowForShowPercent = (row: number) => {
    dispatch({ type: "CHANGE_ROW_FOR_SHOW_PERCENT", payload: { row } });
  };

  const changeCellForShowClosetValue = (cell: Cell) => {
    dispatch({ type: "CHANGE_CELL_FOR_SHOW_CLOSE_VALUE", payload: { cell } });
  };

  const matrixHeader = useMemo(() => {
    if (matrix[0]) {
      return changeMatrixHeader(matrix[0].length);
    } else {
      return [];
    }
  }, [matrix]);

  const average = useMemo(() => averageValues(matrix), [matrix]);
  const summary = useMemo(() => sumValues(matrix), [matrix]);

  const percent = useMemo(
    () => changePercent(rowForShowPercent, matrix, summary),
    [rowForShowPercent]
  );

  const closetValue = useMemo(
    () => changeClosetValue(cellForShowClosetValue, matrix, inputs.x),
    [cellForShowClosetValue, inputs.x, matrix]
  );

  return (
    <MatrixContext.Provider
      value={{
        counter,
        matrixHeader,
        matrix,
        inputs,
        summary,
        average,
        percent,
        closetValue,
        cellForShowClosetValue,
        rowForShowPercent,
        changeInputs,
        changeMatrix,
        changeCell,
        deleteRow,
        addRow,
        changeCellForShowClosetValue,
        changeRowForShowPercent,
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
};

export { MatrixProvider, MatrixContext };
