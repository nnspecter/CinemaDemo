import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";

export const WhiteToggleButton = styled(ToggleButton)({
  color: "white",
  backgroundColor: "#8BC34A", // светло-зелёный
  border: "none",             // убираем рамку
  borderRadius: "8px",        // можешь убрать если не нужно
  textTransform: "none",
  "&.Mui-selected": {
    backgroundColor: "#388E3C", // тёмно-зелёный
    color: "white",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#2E7D32", // ещё темнее при наведении, если выбрана
  },
  "&:hover": {
    backgroundColor: "#7CB342", // чуть темнее при наведении
  },
});
