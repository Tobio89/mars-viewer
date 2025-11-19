import InfoTooltip from "./InfoTooltip";
import SideBar from "./SideBar";
import Visualiser from "./Visualiser/Visualiser";
import useVisualisationRendering from "./useVisualisationRendering/useVisualisationRendering";

import type { VisualisationConfig } from "@services/types";

interface Props {
  metadata: string;
  config: VisualisationConfig;
  localeData: object;
}

const ViewerPageInternal = ({ metadata, config }: Props) => {
  const { onDeckGLOverlayRedraw } = useVisualisationRendering();

  return (
    <main className="flex flex-1 h-full w-full">
      <SideBar config={config} />
      <div className="flex-1 relative">
        <InfoTooltip />
        <Visualiser
          metadata={metadata}
          onDeckGLOverlayRedraw={onDeckGLOverlayRedraw}
        />
      </div>
    </main>
  );
};

export default ViewerPageInternal;
