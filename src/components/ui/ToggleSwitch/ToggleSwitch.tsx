import { Box, Typography } from "@mui/material";
import type {
  SectionSwitchProps,
  SwitchProps,
  TitleSwitchProps,
  ToggleLegendProps,
  ToggleSwitchProps,
} from "./ToggleSwitch.types";

const trackStyle = {
  checked: "bg-emerald-700",
  unchecked: "bg-yellow-900",
};

const thumbStyle = {
  checked: "bg-emerald-300 translate-x-[14px]",
  unchecked: "bg-yellow-600 translate-x-[0px]",
};

const SwitchButton = ({ checked, onChange }: SwitchProps) => {
  const trackStyleClass = `flex w-[34px] h-[14px] rounded-full relative z-20 ${
    checked ? trackStyle.checked : trackStyle.unchecked
  }`;

  const thumbStyleClass = `w-[20px] h-[20px] top-[-2.5px] absolute rounded-full z-30 transition-transform transition-discrete duration-150 ${
    checked ? thumbStyle.checked : thumbStyle.unchecked
  }`;

  return (
    <div className="flex flex-row items-center w-full">
      <button
        className="bg-transparent! border-0 p-0 m-0 cursor-pointer h-[40px] w-[64px] flex items-center justify-center"
        onClick={() => onChange()}
      >
        <input type="checkbox" className="hidden" checked={checked} />
        <span className="h-[36px] w-[44px] z-10 flex items-center justify-end">
          <span className={trackStyleClass}>
            <span className={thumbStyleClass} />
          </span>
        </span>
      </button>
    </div>
  );
};

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
      <SwitchButton checked={on} onChange={() => onToggle(on)} />
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
      <SwitchButton checked={on} onChange={() => onToggle(on)} />
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
          <SwitchButton checked={on} onChange={() => onToggle(on)} />
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

export { ToggleSwitch, TitleSwitch, VisualisationSection, SwitchButton };
