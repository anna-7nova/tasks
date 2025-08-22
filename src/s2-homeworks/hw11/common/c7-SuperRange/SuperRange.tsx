import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        width: "147px",
        color: "#0c2",
        // Стили для бегунка (ползунка)
        "& .MuiSlider-thumb": {
          height: 18,
          width: 18,
          backgroundColor: "#fff",
          border: "1px solid #0c2",
          "&:hover": {
            boxShadow: "0px 0px 0px 8px rgba(0, 204, 34, 0.16)",
          },
          "&.Mui-active": {
            boxShadow: "0px 0px 0px 14px rgba(0, 204, 34, 0.16)",
          },
          "&::before": {
            content: '""',
            width: "6px",
            height: "6px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#01CB22",
          },
        },
        // Стили для активной дорожки
        "& .MuiSlider-track": {
          border: "none",
          height: 4,
          backgroundColor: "#0c2",
        },
        // Стили для фоновой дорожки
        "& .MuiSlider-rail": {
          borderRadius: 10,
          background: "#8b8b8b",
          height: 4,
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
