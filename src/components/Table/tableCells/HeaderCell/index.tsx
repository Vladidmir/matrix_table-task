import s from "./headerCell.module.scss";

export const HeaderCell = (props: { name: string }) => {
  return <td className={s.headerCell}>{props.name}</td>;
};
