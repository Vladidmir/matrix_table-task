import { FC } from "react";

import { FormEvent, useCallback, useContext } from "react";
import { dynamicVarieables } from "constants/dynamicLaoutVariables";
import { MatrixContext } from "context/matrixContext/MatrixProvider";

import s from "./form.module.scss";
import { Button } from "../UI/Button";

export const Form: FC = () => {
  const { inputs, changeInputs, changeMatrix } = useContext(MatrixContext);
  const { enter, button } = dynamicVarieables;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = +event.target.value;
    if (name === "x") {
      const multiplication = inputs.n * inputs.m;
      if (value < 1) {
        alert("Min value for X: 1");
        return;
      }
      if (value >= multiplication) {
        alert(`Max value for X: ${multiplication - 1}`);
        return;
      }
    }
    changeInputs(name, value);
  };

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (inputs.m < 1 || inputs.m > 100) {
        alert("M must be between 1 and 100");
        return;
      }
      if (inputs.n < 1 || inputs.n > 100) {
        alert("N must be between 1 and 100");
        return;
      }
      changeMatrix();
    },
    [inputs, changeMatrix]
  );

  const isSubmitDisabled =
    inputs.m < 1 || inputs.m > 100 || inputs.n < 1 || inputs.n > 100;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <div>
          <span>{enter.m} : </span>
          <span>{inputs.m}</span>
        </div>

        <input
          type="range"
          name="m"
          min={1}
          max={100}
          value={inputs.m}
          aria-label="Set value of M"
          onChange={handleChange}
        />
      </label>

      <label>
        <div>
          <span>{enter.n} : </span>
          <span>{inputs.n}</span>
        </div>

        <input
          type="range"
          name="n"
          min={1}
          max={100}
          value={inputs.n}
          aria-label="Set value of N"
          onChange={handleChange}
        />
      </label>

      <label>
        <div>
          <span>{enter.x} : </span>
          <span>{inputs.x}</span>
        </div>

        <input
          type="range"
          name="x"
          min={1}
          value={inputs.x}
          aria-label="Set value of X"
          onChange={handleChange}
        />
      </label>

      <Button laout="create">{button.create}</Button>
    </form>
  );
};
