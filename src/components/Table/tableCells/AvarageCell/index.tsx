import { useContext } from "react";

import { HeaderCell } from "../HeaderCell";

import { MatrixContext } from "context/matrixContext/MatrixProvider";
import { dynamicVarieables } from "constants/dynamicLaoutVariables";
export const AverageCell = () => {
  const { average } = useContext(MatrixContext);
  const { cell } = dynamicVarieables;

  return (
    <tr>
      <HeaderCell name={cell.average} />
      {average.map((item, index) => (
        <HeaderCell
          key={`${index}${average[index]}`}
          name={String(average[index])}
        />
      ))}
      <HeaderCell name={""} />
      <HeaderCell name={""} />
    </tr>
  );
};
