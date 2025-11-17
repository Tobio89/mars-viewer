import { Box } from "@mui/material";
import VisualizationControls from "./VisualizationControls";

import type { VisualisationConfig } from "@services/types";

const SideBar = ({ config }: { config: VisualisationConfig }) => {
  return (
    <Box
      sx={{
        width: "280px",
        padding: "8px",
        // borderRight: "3px solid #32373B",
      }}
    >
      <VisualizationControls config={config} />
    </Box>
  );
};

export default SideBar;
