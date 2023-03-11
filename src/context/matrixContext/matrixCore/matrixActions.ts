import { Cell } from "types/matrixModel";

export type Action =
  | { type: "CHANGE_INPUTS"; payload: { name: string; value: number } }
  | { type: "CHANGE_MATRIX" }
  | { type: "RESET_MATRIX" }
  | { type: "CHANGE_CELL"; payload: { row: number; column: number } }
  | { type: "DELETE_ROW"; payload: number }
  | { type: "ADD_ROW" }
  | { type: "CHANGE_ROW_FOR_SHOW_PERCENT"; payload: { row: number } }
  | { type: "CHANGE_CELL_FOR_SHOW_CLOSE_VALUE"; payload: { cell: Cell } };
