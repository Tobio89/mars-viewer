import { useState } from "react";
import { Tooltip } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import Colorful from "@uiw/react-color-colorful";
import { hsvaToRgba, hexToRgba } from "@uiw/color-convert";

import { useAboutColorState } from "@store/store";
import { ToggleSwitch } from "@ui/ToggleSwitch/ToggleSwitch";

function LayerTag({ isOn, label }: { isOn: boolean; label: string }) {
  return (
    <p
      className="rounded-xs py-1"
      style={{
        background: isOn ? "white" : "unset",
        color: isOn ? "black" : "white",
      }}
    >
      {label}
    </p>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-row gap-10 items-center h-52 w-full justify-evenly">
    {children}
  </div>
);

function BinaryBreakdown({ binary }: { binary: string }) {
  return (
    <div className="flex items-center gap-px">
      {binary.split("").map((bit, index) => (
        <p
          key={index}
          className="w-6 h-6 text-center rounded-xs p-px"
          style={{
            background: bit === "1" ? "white" : "#252525",
            color: bit === "1" ? "#252525" : "white",
          }}
        >
          {bit}
        </p>
      ))}
    </div>
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
    <article className="flex flex-col w-full items-center px-[60px] py-[80px]">
      <Container>
        <Tooltip
          title={
            <Colorful
              color={color}
              onChange={(newColor) => updateColor(newColor.hsva)}
            />
          }
        >
          <div
            className="w-24 h-24 border-2 border-white rounded-sm cursor-pointer"
            style={{
              backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`,
            }}
          />
        </Tooltip>
        <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
        <div className="flex flex-col gap-0.5 font-mono w-[60px]">
          <p>r: {rgb.r}</p>
          <p>g: {rgb.g}</p>
          <p>b: {rgb.b}</p>
          <p>a: {alpha}</p>
        </div>

        <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
        <div className="flex flex-col gap-0.5 font-mono">
          <BinaryBreakdown binary={rBinary} />
          <BinaryBreakdown binary={gBinary} />
          <BinaryBreakdown binary={bBinary} />
          <BinaryBreakdown binary={aBinary} />
        </div>
      </Container>
      <p className="text-sm">Hover over the colour box to change the colour!</p>
    </article>
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
    <article className="flex flex-col items-center w-full px-[60px] py-[80px]">
      <div className="flex flex-row gap-10 items-center w-full h-[420px] justify-evenly">
        <div className="flex flex-col gap-0.5">
          {redLayers.map((layer, index) => {
            return (
              <LayerTag key={index} isOn={layer} label={`Layer ${index + 1}`} />
            );
          })}
        </div>
        <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
        <div className="flex flex-col gap-1 w-[240px] bg-neutral-800 p-4 rounded-md">
          {layerLabels.map((label, index) => {
            const legendColor = redLayers[index]
              ? layerLegends[index]
              : "transparent";
            return (
              <ToggleSwitch
                key={label}
                legend={{ color: legendColor, shape: "square" }}
                title={`${index + 1}: ${label}`}
                inactive={!switchState[index]}
                on={switchState[index]}
                onToggle={() => onToggle(index, !switchState[index])}
              />
            );
          })}
        </div>
        <ArrowRightAlt sx={{ fontSize: 40, color: "white" }} />
        <div
          className="w-24 h-24 border-2 border-white rounded-sm"
          style={{
            backgroundColor: `rgba(${getFinalColor().r}, ${
              getFinalColor().g
            }, ${getFinalColor().b}, ${getFinalColor().a})`,
          }}
        />
      </div>
      <p className="text-sm text-center">
        Use the switches to change the final colour of the pixel! <br />
        The layers are configured according to the red channel above.
        <br /> If pixel doesn't belong to the layer, it will not be included in
        the final colour!
      </p>
    </article>
  );
}
