import LoadingIndicator from "src/components/LoadingIndicator";
import ErrorIndicator from "src/components/ErrorIndicator";

import useVisualisationData from "./useVisualisationData";
import ViewerPageInternal from "./ViewerPageInternal";

const ViewerPage = () => {

  const { isLoading, metadata, config, localeData } = useVisualisationData()

  if (isLoading) {
    return (
      <LoadingIndicator />
    )
  }

  if (!metadata) {
    return (
      <ErrorIndicator message="Error! Failed to load Metadata" />
    )
  }

  if (!config) {
    return (
      <ErrorIndicator message="Error! Failed to load Visualisation Config" />
    )
  }
  return (
    <ViewerPageInternal
      config={config}
      metadata={metadata}
      localeData={localeData}
    />
  );
};

export default ViewerPage;
