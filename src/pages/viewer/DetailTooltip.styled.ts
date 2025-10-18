import { Box, styled } from "@mui/material";

export const DetailTooltipContainer = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    width: "360px",
    borderRadius: "10px",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "10px",
    backgroundColor: theme.palette.background.paper,
    pointerEvents: "none",
    gap: "6px",
  };
});
