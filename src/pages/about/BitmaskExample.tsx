import { Box, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import ToggleSwitch from "src/components/ToggleSwitch/ToggleSwitch";
import { useState } from "react";

function LayerTag({ isOn, label }: { isOn: boolean; label: string }) {
  return (
    <Typography
      variant="caption"
      sx={{
        background: isOn ? "white" : "unset",
        color: isOn ? "black" : "white",
        borderRadius: "2px",
        padding: "0 4px",
      }}
    >
      {label}
    </Typography>
  );
}

export function BitmaskExplanation() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        alignItems: "center",
        height: "200px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ width: "100px", height: "100px", backgroundColor: "#E67E0F" }}
      />
      <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <Typography
          variant="body1"
          sx={{
            background: "white",
            color: "black",
            borderRadius: "2px",
            padding: "0 4px",
          }}
        >
          r: 230
        </Typography>
        <Typography variant="body1">g: 126</Typography>
        <Typography variant="body1">b: 15</Typography>
        <Typography variant="body1">a: 255</Typography>
      </Box>

      <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
      <Box>11100110</Box>
      <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <LayerTag isOn={true} label="Layer 1" />
        <LayerTag isOn={true} label="Layer 2" />
        <LayerTag isOn={true} label="Layer 3" />
        <LayerTag isOn={false} label="Layer 4" />
        <LayerTag isOn={false} label="Layer 5" />
        <LayerTag isOn={true} label="Layer 6" />
        <LayerTag isOn={true} label="Layer 7" />
        <LayerTag isOn={false} label="Layer 8" />
      </Box>
    </Box>
  );
}

export function BitmaskInteractive() {
  const [switchState, setSwitchState] = useState([true, false, false, false]);

  const onToggle = (index: number, value: boolean) => {
    const newState = [...switchState];
    newState[index] = value;
    setSwitchState(newState);
  };

  const layerLabels = ["Plains", "Mountains", "Water", "Crevasses"];

  const boxRed = switchState[0] ? "ff" : "00";
  const boxGreen = switchState[1] ? "ff" : "00";
  const boxBlue = switchState[3] ? "ff" : "00";
  const boxColour = `#${boxRed}${boxGreen}${boxBlue}`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        alignItems: "center",
        height: "200px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <LayerTag isOn={true} label="Layer 1" />
        <LayerTag isOn={true} label="Layer 2" />
        <LayerTag isOn={false} label="Layer 3" />
        <LayerTag isOn={true} label="Layer 4" />
      </Box>
      <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <Typography
          variant="body1"
          sx={{
            background: "#ff0000",
            fontFamily: "monospace",
            padding: "2px",
          }}
        >
          #ff0000
        </Typography>
        <Typography
          variant="body1"
          sx={{
            background: "#00ff00",
            fontFamily: "monospace",
            padding: "2px",
            color: "black",
          }}
        >
          #00ff00
        </Typography>
        <Typography
          variant="body1"
          sx={{
            background: "#ff00ff",
            fontFamily: "monospace",
            padding: "2px",
          }}
        >
          #ff00ff
        </Typography>
        <Typography
          variant="body1"
          sx={{
            background: "#0000ff",
            fontFamily: "monospace",
            padding: "2px",
          }}
        >
          #0000ff
        </Typography>
      </Box>
      <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          width: "240px",
        }}
      >
        {layerLabels.map((label, index) => {
          return (
            <ToggleSwitch
              title={label}
              on={switchState[index]}
              onToggle={() => onToggle(index, !switchState[index])}
            />
          );
        })}
      </Box>
      <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
      <Box
        sx={{ width: "100px", height: "100px", backgroundColor: boxColour }}
      />
    </Box>
  );
}
