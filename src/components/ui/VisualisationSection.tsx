import { Box, Typography } from "@mui/material";
import { SectionSwitchProps } from "./ToggleSwitch/ToggleSwitch.types";

const VisualisationSection = ({
  title,
  children,
  variant,
  ...rest
}: SectionSwitchProps) => {
  const isTogglable = "on" in rest;
  if (isTogglable) {
    const { on, onToggle, inactive } = rest;
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "flex-start",
          borderBottom: "1px solid grey",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "6px",
            opacity: inactive ? "0.6" : "1",
          }}
        >
          <Typography variant={variant ?? "subtitle1"}>{title}</Typography>
          <Toggle checked={on} onChange={() => onToggle(on)} />
        </Box>
        {children}
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
        borderBottom: "1px solid grey",
      }}
    >
      <Typography
        variant={variant ?? "subtitle1"}
        sx={{ width: "100%", textAlign: "left", padding: "8px 0 0 0" }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default VisualisationSection;
