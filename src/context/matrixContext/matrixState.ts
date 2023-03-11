import { createContext } from "react";
import { IMatrixContext } from "types/matrixModel";
export const initialValue: IMatrixContext = {
  counter: 0,
  matrixHeader: [],
  matrix: [[]],
  summary: [],
  average: [],
  percent: [],
  closetValue: [],
  rowForShowPercent: -1,
  cellForShowClosetValue: {
    id: -1,
    amount: 0,
  },
  inputs: {
    m: 0,
    n: 0,
    x: 1,
  },
  changeInputs: () => {},
  changeMatrix: () => {},
  changeCell: () => {},
  deleteRow: () => {},
  changeRowForShowPercent: () => {},
  changeCellForShowClosetValue: () => {},
  addRow: () => {},
};

export const MatrixContext = createContext(initialValue);
