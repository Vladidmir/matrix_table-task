type CellId = number;
type CellValue = number;

export interface Cell {
  id: CellId;
  amount: CellValue;
}

interface MatrixDate {
  m: number;
  n: number;
  x: number;
}

export interface IMatrixContext {
  inputsDate: MatrixDate;
  matrix: Cell[][];
  summary: number[];
  average: number[];
  percent: number[];
  percentageRow: number;
  closestValues: Cell[];
  closestValueCell: Cell;
  matrixHeader: string[];
  gridCounter: number;
  onChangeMatrixValue: (name: string, value: number) => void;
  onUpdateMatrixData: () => void;
  changeCell: (row: number, column: number) => void;
  deleteRow: (row: number) => void;
  onChangeClosestValues: (cell: Cell) => void;
  onChangePercentageRow: (row: number) => void;
  addRow: () => void;
}
