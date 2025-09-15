import React from "react";
import downIconSVG from "../../accets/icon_sort_down.svg";
import upIconSVG from "../../accets/icon_sort_up.svg";
import noneIconSVG from "../../accets/icon_sort_turnoff.svg";

// добавить в проект иконки и импортировать
const downIcon = downIconSVG;
const upIcon = upIconSVG;
const noneIcon = noneIconSVG;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return sort === down ? up : sort === up ? '': down;
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      {/*сделать иконку*/}
      <img id={id + "-icon-" + sort} src={icon} />
    </span>
  );
};

export default SuperSort;
