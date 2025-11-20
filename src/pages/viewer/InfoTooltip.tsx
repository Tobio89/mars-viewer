import { useTooltipState } from "@store/store";

const width = 200;
const tooltipXOffset = 180;

const InfoTooltip = () => {
  const { tooltipData } = useTooltipState();

  if (!tooltipData) {
    return null;
  }

  const left = tooltipXOffset + tooltipData.point.x + width / 2;
  const top = tooltipData.point.y + 75;

  return (
    <div
      className={`tooltip tooltip-open fixed z-999 tooltip-bottom`}
      style={{ top, left }}
    >
      <div className="tooltip-content bg-neutral-800">
        <h5 className="text-2xl w-full rounded-md text-left p-1">
          {tooltipData.data.name}
        </h5>
        <p className="text-left px-1.5 py-2">{tooltipData.data.description}</p>
      </div>
    </div>
  );
};

export default InfoTooltip;
