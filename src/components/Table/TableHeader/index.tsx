import { useContext } from "react";

import { HeaderCell } from "../tableCells";

import { MatrixContext } from "context/matrixContext/MatrixProvider";

export const HeaderColumn = () => {
  const { matrixHeader } = useContext(MatrixContext);

  return (
    <tr>
      <HeaderCell name={""} />
      {matrixHeader.map((item, index) => (
        <HeaderCell key={index} name={item} />
      ))}
    </tr>
  );
};

export default HeaderColumn;
