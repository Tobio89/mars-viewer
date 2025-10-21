import { Box, styled, Switch, Typography } from "@mui/material";
import type {
  SectionSwitchProps,
  TitleSwitchProps,
  ToggleLegendProps,
  ToggleSwitchProps,
} from "./ToggleSwitch.types";

const Toggle = styled(Switch)(({ theme, checked }) => ({
  "& .MuiSwitch-track": {
    background: `${
      checked ? theme.palette.secondary.dark : theme.palette.primary.dark
    } !important`,
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: checked
      ? theme.palette.secondary.light
      : theme.palette.primary.light,
  },
}));

const ToggleLegend = ({ color, shape }: ToggleLegendProps) => {
  if (shape === "circle") {
    return (
      <Box
        sx={{
          width: "16px",
          height: "16px",
          backgroundColor: color,
          borderRadius: "50%",
        }}
      />
    );
  }
  if (shape === "square") {
    return (
      <Box sx={{ width: "16px", height: "16px", backgroundColor: color }} />
    );
  }
  console.log("Legend provided but shape not supported");
  return null;
};

const ToggleLabel = ({
  title,
  legend,
}: Pick<ToggleSwitchProps, "title" | "legend">) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {legend && <ToggleLegend color={legend.color} shape={legend.shape} />}
      <Typography>{title}</Typography>
    </Box>
  );
};

const ToggleSwitch = ({
  title,
  on,
  inactive,
  onToggle,
  legend,
}: ToggleSwitchProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        opacity: inactive ? "0.6" : "1",
      }}
    >
      <ToggleLabel title={title} legend={legend} />
      <Toggle checked={on} onChange={() => onToggle(on)} />
    </Box>
  );
};

const TitleSwitch = ({
  title,
  variant,
  on,
  inactive,
  onToggle,
}: TitleSwitchProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #e0e0e0",
        opacity: inactive ? "0.6" : "1",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Typography variant={variant ?? "h6"}>{title}</Typography>
      </Box>
      <Toggle checked={on} onChange={() => onToggle(on)} />
    </Box>
  );
};

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

export { ToggleSwitch, TitleSwitch, VisualisationSection };
