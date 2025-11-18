import { Box } from "@mui/material";
import VisualizationControls from "./VisualizationControls";

import type { VisualisationConfig } from "@services/types";
import { SwitchButton } from "@ui/ToggleSwitch/ToggleSwitch";
import { useState } from "react";

const SideBar = ({ config }: { config: VisualisationConfig }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Box
      sx={{
        width: "280px",
        padding: "8px",
        // borderRight: "3px solid #32373B",
      }}
    >
      <VisualizationControls config={config} />
      <SwitchButton checked={checked} onChange={(val) => setChecked(!val)} />
    </Box>
  );
};

export default SideBar;
