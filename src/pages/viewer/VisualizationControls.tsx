import { Box } from "@mui/material";

import { useVisualizationStore } from "../../store/store";

import {
  ToggleSwitch,
  TitleSwitch,
  VisualisationSection,
} from "../../components/ToggleSwitch/ToggleSwitch";

// import { visualizationConfig } from "../../visualizationConfig";

import type { VisualisationConfig } from "src/services/types";

const VisualizationControls = ({ config }: { config: VisualisationConfig }) => {
  const {
    master: masterOn,
    updateMaster,
    drawRegionSection,
    updateDrawRegionSection,
    drawHeatmapSection,
    updateDrawHeatmapSection,
    drawPointSection,
    updateDrawPointSection,
    redChannel,
    updateRedChannel,
    greenChannel,
    updateGreenChannel,
    drawMountains,
    updateDrawMountains,
    drawMissionSites,
    updateDrawMissionSites,
  } = useVisualizationStore();

  const pointControls = [
    {
      state: drawMountains,
      onToggle: updateDrawMountains,
    },
    {
      state: drawMissionSites,
      onToggle: updateDrawMissionSites,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <TitleSwitch
        title="Layer Controls"
        variant="h6"
        on={masterOn}
        inactive={!masterOn}
        onToggle={(val) => {
          updateMaster(!val);
        }}
      />
      <VisualisationSection
        title="Regions and Features"
        on={drawRegionSection}
        inactive={!masterOn || !drawRegionSection}
        onToggle={(val) => {
          updateDrawRegionSection(!val);
        }}
      >
        {config.pixelLayers.map((cfg, ind) => {
          return (
            <ToggleSwitch
              inactive={!masterOn || !drawRegionSection || !redChannel[ind]}
              key={cfg.label}
              title={cfg.label}
              legend={cfg.legend}
              on={redChannel[ind]}
              onToggle={(val) => {
                updateRedChannel(ind, !val);
              }}
            />
          );
        })}
      </VisualisationSection>
      <VisualisationSection
        title="Heatmaps"
        on={drawHeatmapSection}
        inactive={!masterOn || !drawHeatmapSection}
        onToggle={(val) => {
          updateDrawHeatmapSection(!val);
        }}
      >
        {config.heatmapLayers.map((cfg) => {
          return (
            <ToggleSwitch
              inactive={!masterOn || !drawHeatmapSection || !greenChannel}
              key={cfg.label}
              title={cfg.label}
              legend={cfg.legend}
              on={greenChannel}
              onToggle={(val) => {
                updateGreenChannel(!val);
              }}
            />
          );
        })}
      </VisualisationSection>
      <VisualisationSection
        title="Points of Interest"
        on={drawPointSection}
        inactive={!masterOn || !drawPointSection}
        onToggle={(val) => updateDrawPointSection(!val)}
      >
        {config.pointLayers.map((cfg, ind) => {
          return (
            <ToggleSwitch
              key={cfg.label}
              title={cfg.label}
              legend={cfg.legend}
              inactive={!masterOn || !drawPointSection || !pointControls[ind]}
              on={pointControls[ind].state}
              onToggle={(val) => {
                pointControls[ind].onToggle(!val);
              }}
            />
          );
        })}
      </VisualisationSection>
    </Box>
  );
};

export default VisualizationControls;
