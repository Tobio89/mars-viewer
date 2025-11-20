import VisualizationControls from "./VisualizationControls";

import type { VisualisationConfig } from "@services/types";

const SideBar = ({ config }: { config: VisualisationConfig }) => {
  return (
    <section className="w-[280px] p-2">
      <VisualizationControls config={config} />
    </section>
  );
};

export default SideBar;
