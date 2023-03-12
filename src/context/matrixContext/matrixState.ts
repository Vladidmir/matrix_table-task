import { createContext } from "react";
import { IMatrixContext } from "types/matrixModel";
export const initialValue: IMatrixContext = {
  matrixHeader: [],
  matrix: [[]],
  summary: [],
  average: [],
  percent: [],
  closestValues: [],
  percentageRow: -1,
  closestValueCell: {
    id: -1,
    amount: 0,
  },
  inputsDate: {
    m: 0,
    n: 0,
    x: 1,
  },
  gridCounter: 0,
  onChangeMatrixValue: () => {},
  onUpdateMatrixData: () => {},
  changeCell: () => {},
  deleteRow: () => {},
  onChangePercentageRow: () => {},
  onChangeClosestValues: () => {},
  addRow: () => {},
};

export const MatrixContext = createContext(initialValue);
