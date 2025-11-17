import { Typography } from "@mui/material";

import { useTooltipState } from "@store/store";

import {
  DetailTooltipContainer,
  TooltipTriangle,
} from "./DetailTooltip.styled";

const width = 200;
const tooltipXOffset = 0;

const DetailTooltip = () => {
  const { tooltipData } = useTooltipState();

  if (!tooltipData) {
    return null;
  }

  const left = tooltipXOffset + tooltipData.point.x + width / 2;
  const top = tooltipData.point.y + 75;

  return (
    <DetailTooltipContainer
      sx={{
        top,
        left,
      }}
    >
      <TooltipTriangle
        sx={{
          top: top - 10,
          left: left + width - 30,
        }}
      />
      <Typography
        variant="h5"
        sx={{
          width: "100%",
          borderRadius: "6px",
          textAlign: "left",
          padding: "4px",
        }}
      >
        {tooltipData.data.name}
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "left", padding: "4px 8px" }}
      >
        {tooltipData.data.description}
      </Typography>
    </DetailTooltipContainer>
  );
};

export default DetailTooltip;
