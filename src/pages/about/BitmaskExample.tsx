import { useState } from "react";
import { Box, styled, Tooltip, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

import Colorful from "@uiw/react-color-colorful";

import ToggleSwitch from "src/components/ToggleSwitch/ToggleSwitch";
import { hsvaToRgba, hexToRgba } from "@uiw/color-convert";
import { useAboutColorState } from "src/store/store";

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
  // padding: "0",
});

function BinaryBreakdown({ binary }: { binary: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "1px" }}>
      {binary.split("").map((bit, index) => (
        <Typography
          variant="body1"
          key={index}
          sx={{
            width: "24px",
            height: "24px",
            textAlign: "center",
            padding: "1px 1px",
            borderRadius: "2px",
            background: bit === "1" ? "white" : "#252525",
            color: bit === "1" ? "#252525" : "white",
          }}
        >
          {bit}
        </Typography>
      ))}
    </Box>
  );
}

export function BitmaskExplanation() {
  const { color, updateColor } = useAboutColorState();

  const rgb = hsvaToRgba(color);
  const alpha = Math.round(color.a * 255);

  const rBinary = rgb.r.toString(2).padStart(8, "0");
  const gBinary = rgb.g.toString(2).padStart(8, "0");
  const bBinary = rgb.b.toString(2).padStart(8, "0");
  const aBinary = alpha.toString(2).padStart(8, "0");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 80px",
      }}
    >
      <Container>
        <Tooltip
          title={
            <Colorful
              color={color}
              onChange={(newColor) => updateColor(newColor.hsva)}
            />
          }
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              border: `2px solid white`,
              backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`,
              borderRadius: "4px",
              cursor: "pointer",
            }}
          />
        </Tooltip>
        <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            fontFamily: "monospace",
            width: "60px",
          }}
        >
          <Typography variant="body1">r: {rgb.r}</Typography>
          <Typography variant="body1">g: {rgb.g}</Typography>
          <Typography variant="body1">b: {rgb.b}</Typography>
          <Typography variant="body1">a: {alpha}</Typography>
        </Box>

        <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            fontFamily: "monospace",
          }}
        >
          <BinaryBreakdown binary={rBinary} />
          <BinaryBreakdown binary={gBinary} />
          <BinaryBreakdown binary={bBinary} />
          <BinaryBreakdown binary={aBinary} />
        </Box>
      </Container>
      <Typography variant="caption">
        Hover over the colour box to change the colour!
      </Typography>
    </Box>
  );
}

export function BitmaskInteractive() {
  const [switchState, setSwitchState] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { color } = useAboutColorState();
  const { r: red } = hsvaToRgba(color);
  const rBinary = red.toString(2).padStart(8, "0");
  const redLayers = rBinary
    .split("")
    .map((bit) => (bit === "1" ? true : false));
  const onToggle = (index: number, value: boolean) => {
    const newState = [...switchState];
    newState[index] = value;
    setSwitchState(newState);
  };

  const layerLabels = [
    "Plains",
    "Mountains",
    "Water",
    "Canyons",
    "Craters",
    "Robots",
    "Aliens",
    "Grass",
  ];
  const layerLegends = [
    "#ff0000",
    "#d04433",
    "#84acba",
    "#f76707",
    "#f5d742",
    "#42f5d7",
    "#7f4883",
    "#5f9b1c",
  ];

  function getFinalColor() {
    let reds = 0;
    let greens = 0;
    let blues = 0;
    let switchesOn = 0;
    switchState.forEach((layer, index) => {
      const { r, g, b } = hexToRgba(layerLegends[index]);
      if (layer && redLayers[index]) {
        reds += r;
        greens += g;
        blues += b;
        switchesOn++;
      }
    });

    if (switchesOn === 0) {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
      };
    }

    return {
      r: reds / switchesOn,
      g: greens / switchesOn,
      b: blues / switchesOn,
      a: 1,
    };
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 80px",
      }}
    >
      <Container sx={{ height: "420px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {redLayers.map((layer, index) => {
            return <LayerTag isOn={layer} label={`Layer ${index + 1}`} />;
          })}
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
                title={`${index + 1}: ${label}`}
                on={switchState[index]}
                onToggle={() => onToggle(index, !switchState[index])}
              />
            );
          })}
        </Box>
        <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
        <Box
          sx={{
            width: "100px",
            height: "100px",
            border: `2px solid white`,
            borderRadius: "4px",
            backgroundColor: `rgba(${getFinalColor().r}, ${
              getFinalColor().g
            }, ${getFinalColor().b}, ${getFinalColor().a})`,
          }}
        />
      </Container>
      <Typography variant="caption" sx={{ textAlign: "center" }}>
        Use the switches to change the final colour of the pixel! <br />
        The layers are configured according to the red channel above.
        <br /> If pixel doesn't belong to the layer, it will not be included in
        the final colour!
      </Typography>
    </Box>
  );
}
