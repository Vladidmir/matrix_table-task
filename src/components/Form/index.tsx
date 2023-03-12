import { FC } from "react";

import { FormEvent, useCallback, useContext } from "react";
import { dynamicVarieables } from "constants/dynamicLaoutVariables";
import { MatrixContext } from "context/matrixContext/MatrixProvider";

import s from "./form.module.scss";
import { Button } from "../UI/Button";

export const Form: FC = () => {
  const { inputsDate, onChangeMatrixValue, onUpdateMatrixData } =
    useContext(MatrixContext);
  const { enter, button } = dynamicVarieables;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = +event.target.value;
    if (name === "x") {
      const multiplication = inputsDate.n * inputsDate.m;
      if (value < 1) {
        alert("Min value for X: 1");
        return;
      }
      if (value >= multiplication) {
        alert(`Max value for X: ${multiplication - 1}`);
        return;
      }
    }
    onChangeMatrixValue(name, value);
  };

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (inputsDate.m < 1 || inputsDate.m > 100) {
        alert("M must be between 1 and 100");
        return;
      }
      if (inputsDate.n < 1 || inputsDate.n > 100) {
        alert("N must be between 1 and 100");
        return;
      }
      onUpdateMatrixData();
    },
    [inputsDate, onUpdateMatrixData]
  );

  const isSubmitDisabled =
    inputsDate.m < 1 ||
    inputsDate.m > 100 ||
    inputsDate.n < 1 ||
    inputsDate.n > 100;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <div>
          <span>{enter.m} : </span>
          <span>{inputsDate.m}</span>
        </div>

        <input
          type="range"
          name="m"
          min={1}
          max={100}
          value={inputsDate.m}
          aria-label="Set value of M"
          onChange={handleChange}
        />
      </label>

      <label>
        <div>
          <span>{enter.n} : </span>
          <span>{inputsDate.n}</span>
        </div>

        <input
          type="range"
          name="n"
          min={1}
          max={100}
          value={inputsDate.n}
          aria-label="Set value of N"
          onChange={handleChange}
        />
      </label>

      <label>
        <div>
          <span>{enter.x} : </span>
          <span>{inputsDate.x}</span>
        </div>

        <input
          type="range"
          name="x"
          min={1}
          value={inputsDate.x}
          aria-label="Set value of X"
          onChange={handleChange}
        />
      </label>

      <Button laout="create">{button.create}</Button>
    </form>
  );
};
