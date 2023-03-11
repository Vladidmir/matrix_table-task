import { Action } from "./matrixActions";
import { IMatrixContext } from "types/matrixModel";

export const matrixReducer = (state: IMatrixContext, action: Action) => {
  switch (action.type) {
    case "CHANGE_INPUTS":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.name]: action.payload.value,
        },
      };
    case "CHANGE_MATRIX":
      return {
        ...state,
        matrix: state.matrix.map((column) => {
          return column.map(() => {
            state.counter++;
            return {
              id: state.counter,
              amount: Math.round(Math.random() * (999 - 100 + 1) + 100),
            };
          });
        }),
      };
    case "RESET_MATRIX":
      return {
        ...state,
        matrix: Array(state.inputs.m)
          .fill("")
          .map(() =>
            Array(state.inputs.n).fill({
              id: 0,
              amount: 0,
            })
          ),
      };

    case "CHANGE_CELL":
      return {
        ...state,
        matrix: state.matrix.map((item, indexRow) =>
          indexRow === action.payload.row
            ? item.map((cell, indexCell) =>
                indexCell === action.payload.column
                  ? { ...cell, amount: cell.amount + 1 }
                  : cell
              )
            : item
        ),
      };
    case "DELETE_ROW":
      return {
        ...state,
        matrix: state.matrix.filter((_, index) => action.payload !== index),
        inputs: {
          ...state.inputs,
          m: state.inputs.m - 1,
        },
      };
    case "ADD_ROW":
      let counter = state.matrix[state.matrix.length - 1][0].id;
      const newRow = Array.from({ length: state.inputs.n }, () => {
        counter++;
        return {
          id: counter,
          amount: Math.round(Math.random() * (999 - 100 + 1) + 100),
        };
      });
      let updatedMatrix3 = [...state.matrix, newRow];
      return {
        ...state,
        matrix: updatedMatrix3,
        inputs: {
          ...state.inputs,
          m: state.inputs.m + 1,
        },
      };
    case "CHANGE_ROW_FOR_SHOW_PERCENT":
      return {
        ...state,
        rowForShowPercent: action.payload.row,
      };
    case "CHANGE_CELL_FOR_SHOW_CLOSE_VALUE":
      return {
        ...state,
        cellForShowClosetValue: action.payload.cell,
      };
    default:
      return state;
  }
};
