import { Box, styled, Typography } from "@mui/material";
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

const Container = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  alignItems: "center",
  height: "200px",
  width: "100%",
  justifyContent: "space-evenly",
  padding: "140px 80px",
});

export function BitmaskExplanation() {
  return (
    <Container>
      <Box
        sx={{ width: "100px", height: "100px", backgroundColor: "#E67E0F" }}
      />
      <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          fontFamily: "monospace",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            background: "white",
            color: "black",
            borderRadius: "2px",
            padding: "0 4px",
            boxSizing: "content-box",
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
    </Container>
  );
}

export function BitmaskInteractive() {
  const [switchState, setSwitchState] = useState([true, false, false, false]);

  const onToggle = (index: number, value: boolean) => {
    const newState = [...switchState];
    newState[index] = value;
    setSwitchState(newState);
  };

  const layerLabels = ["Plains", "Mountains", "Water", "Canyons"];
  const layerLegends = ["#ff0000", "#00ff00", "#ff00ff", "#0000ff"];

  const boxRed = switchState[0] ? "ff" : "00";
  const boxGreen = switchState[1] ? "ff" : "00";
  const boxBlue = switchState[3] ? "ff" : "00";
  const boxColour = `#${boxRed}${boxGreen}${boxBlue}`;

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <LayerTag isOn={true} label="Layer 1" />
        <LayerTag isOn={true} label="Layer 2" />
        <LayerTag isOn={false} label="Layer 3" />
        <LayerTag isOn={true} label="Layer 4" />
      </Box>
      <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          width: "240px",
          background: "#252525",
          padding: "6px 12px",
          borderRadius: "4px",
        }}
      >
        {layerLabels.map((label, index) => {
          return (
            <ToggleSwitch
              legend={{ color: layerLegends[index], shape: "square" }}
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
    </Container>
  );
}
