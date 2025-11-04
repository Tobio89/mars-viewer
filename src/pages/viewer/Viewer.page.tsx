import { Box } from "@mui/material";

import Visualiser from "./Visualiser/Visualiser";
import SideBar from "./SideBar";
import useVisualisationRendering from "./useVisualisationRendering/useVisualisationRendering";
import DetailTooltip from "./DetailTooltip";
import useVisualisationData from "./useVisualisationData";
import LoadingIndicator from "src/components/LoadingIndicator";


const ViewerPage = () => {
  const { onTooltipOverlayRedraw, onDeckGLOverlayRedraw } =
    useVisualisationRendering();
  const { isLoading, metadata } = useVisualisationData()




  if (isLoading) {
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
        <LoadingIndicator />
      </Box>
    )
  }

  if (!metadata) {
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
        Metadata Didn't Load
      </Box>
    )
  }
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
          metadata={metadata}
          onTooltipOverlayRedraw={onTooltipOverlayRedraw}
          onDeckGLOverlayRedraw={onDeckGLOverlayRedraw}
        />
      </Box>
    </Box>
  );
};

export default ViewerPage;
