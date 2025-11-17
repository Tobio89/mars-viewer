import { useMetadata } from "@services/metadata";
import { useVisConfig } from "@services/config";
import { useMarsData } from "@services/data";

const useVisualisationData = () => {
  const { isLoading: loadingMetaData, data: metadata } = useMetadata("base");
  const { isLoading: loadingVisConfig, data: visConfig } = useVisConfig();
  const { isLoading: loadingMarsMissionData, data: marsMissionData } =
    useMarsData("missionSites");

  const { isLoading: loadingMarsMountainData, data: marsMountainData } =
    useMarsData("mountains");

  return {
    isLoading:
      loadingMetaData ||
      loadingVisConfig ||
      loadingMarsMissionData ||
      loadingMarsMountainData,
    metadata,
    config: visConfig,
    localeData: {
      missions: marsMissionData,
      mountains: marsMountainData,
    },
  };
};

export default useVisualisationData;
