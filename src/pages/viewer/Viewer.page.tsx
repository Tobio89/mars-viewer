import { Box } from "@mui/material";

import Visualiser from "./Visualiser/Visualiser";
import SideBar from "./SideBar";
import useVisualisationRendering from "./useVisualisationRendering/useVisualisationRendering";
import DetailTooltip from "./DetailTooltip";
import { useMetadata } from "src/services/metadata";
import { useVisConfig } from "src/services/config";
import { useMarsData } from "src/services/data";

const ViewerPage = () => {
  const { onTooltipOverlayRedraw, onDeckGLOverlayRedraw } =
    useVisualisationRendering();

  const { isLoading, data: metadata } = useMetadata("base");
  const { isLoading: loadingVis, data: visConfig } = useVisConfig();
  const { isLoading: loadingMarsData, data: marsData } =
    useMarsData("missionSites");

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
      }}
    >
      <SideBar />
      <Box
        component="main"
        sx={() => ({
          flexGrow: 1,
          position: "relative",
        })}
      >
        <DetailTooltip />
        <Visualiser
          onTooltipOverlayRedraw={onTooltipOverlayRedraw}
          onDeckGLOverlayRedraw={onDeckGLOverlayRedraw}
        />
      </Box>
    </Box>
  );
};

export default ViewerPage;
