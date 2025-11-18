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
      <h5 className="text-2xl w-full rounded-md text-left p-1">
        {tooltipData.data.name}
      </h5>
      <p className="text-left px-1.5 py-2">{tooltipData.data.description}</p>
    </DetailTooltipContainer>
  );
};

export default DetailTooltip;
