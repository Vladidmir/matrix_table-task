type CellId = number;
type CellValue = number;

type ArrayNumber = number[];
type ArrayString = string[];

export type Cell = {
  id: CellId;
  amount: CellValue;
};

type Input = {
  m: number;
  n: number;
  x: number;
};

export interface IMatrixContext {
  matrixHeader: ArrayString;
  summary: ArrayNumber;
  average: ArrayNumber;
  percent: ArrayNumber;
  counter: number;
  rowForShowPercent: number;
  cellForShowClosetValue: Cell;
  closetValue: Cell[];
  matrix: Array<Array<Cell>>;
  inputs: Input;
  changeInputs: (name: string, value: number) => void;
  changeMatrix: () => void;
  changeCell: (row: number, column: number) => void;
  deleteRow: (row: number) => void;
  changeCellForShowClosetValue: (cell: Cell) => void;
  changeRowForShowPercent: (row: number) => void;
  addRow: () => void;
}
