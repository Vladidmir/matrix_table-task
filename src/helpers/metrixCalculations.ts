import { Cell } from "types/matrixModel";
import { dynamicVarieables } from "../constants/dynamicLaoutVariables";

export const changeMatrixHeader = (lengthRow: number) => {
  return Array(lengthRow + 2)
    .fill("")
    .map((item, index) => {
      if (index === lengthRow) return dynamicVarieables.cell.summary;
      else if (index === lengthRow + 1) return dynamicVarieables.cell.actions;
      else return `${dynamicVarieables.cell.n}${index + 1}`;
    });
};

export const averageValues = (matrix: Array<Array<Cell>>) => {
  const numRows = matrix.length;
  if (!numRows) return [0];

  return matrix[0].map((_, j) => {
    const columnSum = matrix.reduce((sum, row) => sum + row[j].amount, 0);
    return Math.floor((columnSum / numRows) * 10) / 10;
  });
};

export const sumValues = (matrix: Array<Array<Cell>>) => {
  return matrix.map((column) => {
    const sum = column.reduce((acc, { amount }) => acc + amount, 0);
    return sum;
  });
};

export const changePercent = (
  row: number,
  matrix: Array<Array<Cell>>,
  summary: number[]
) => {
  if (row === -1) return [];
  else {
    const rowValues = matrix[row];
    const rowSummary = summary[row];
    const newPercent = rowValues.map((item) =>
      Math.round((item.amount * 100) / rowSummary)
    );
    return newPercent;
  }
};

export const changeClosetValue = (
  cell: Cell,
  matrix: Array<Array<Cell>>,
  x: number
): Array<Cell> => {
  if (cell.id === -1) {
    return [{ id: -1, amount: 0 }];
  }
  const closestCells = findClosestCells(matrix, cell, x);
  return closestCells;
};

export const findClosestCells = (
  matrix: Array<Array<Cell>>,
  cell: Cell,
  x: number
): Array<Cell> => {
  function isDifferentCell(cell: Cell, otherCell: Cell): boolean {
    return cell.id !== otherCell.id;
  }

  function getDifferentAmount(cell: Cell, otherCell: Cell): number {
    return Math.abs(cell.amount - otherCell.amount);
  }

  const cells = matrix.flat().filter((c) => isDifferentCell(cell, c));
  cells.sort(
    (a, b) => getDifferentAmount(a, cell) - getDifferentAmount(b, cell)
  );
  return cells.slice(0, x);
};
