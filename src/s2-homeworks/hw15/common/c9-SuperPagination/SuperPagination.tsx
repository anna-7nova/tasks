import React from "react";
import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";
import { Pagination } from "@mui/material";
import s from "./SuperPagination.module.css";

export type SuperPaginationPropsType = {
  id?: string;
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = "hw15",
}) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage); // пишет студент // вычислить количество страниц

  const onChangeCallback = (event: any, page: number) => {
    // пишет студент
    onChange(page, itemsCountForPage);
    debugger
  };
debugger
  const onChangeSelect = (event: any) => {
    // пишет студент
    onChange(page, Number(event.currentTarget.value));
  };
  return (
    <div className={s.pagination}>
      <Pagination
        id={id + "-pagination"}
        sx={{
          // стили для Pagination // пишет студент
          "& .MuiPaginationItem-root": {
            borderRadius: "2px",
            color: "var(--color)",
          },
          "& .Mui-selected": {
            backgroundColor: "rgba(0, 102, 204, 1)",
            color: "var(--background)",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          },
        }}
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>показать</span>

      <SuperSelect
        id={id + "-pagination-select"}
        value={itemsCountForPage}
        options={[
          { id: 4, value: 4 },
          { id: 7, value: 7 },
          { id: 10, value: 10 },
        ]}
        onChange={onChangeSelect}
        className={s.select}
      />

      <span className={s.text2}>строк в таблице</span>
    </div>
  );
};

export default SuperPagination;
