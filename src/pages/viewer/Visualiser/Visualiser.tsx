import { Ref, useMemo } from "react";
import OpenSeadragon from "openseadragon";
import { OrthographicView } from "@deck.gl/core";
import OSDViewer, {
  OSDViewerRef,
  readXMLMetadata,
} from "@lunit/osd-react-renderer";
import { Box } from "@mui/material";

import useOSDHandlers from "../useOSDHandlers";

import { visualizationConfig } from "@assets/visualizationConfig";
import { commonConfig, url_prefix, viewerOptions } from "@consts/index";
import { useVisualizationStore } from "@store/store";

import type { VisualizerProps } from "./Visualizer.types";

const Visualiser = ({ onDeckGLOverlayRedraw, metadata }: VisualizerProps) => {
  const { osdViewerRef, handleViewportZoom } = useOSDHandlers();

  const {
    master: masterOn,
    drawRegionSection,
    drawHeatmapSection,
    redChannel,
    greenChannel,
  } = useVisualizationStore();

  // it's not this
  const meta = useMemo(() => {
    return readXMLMetadata(metadata);
  }, []);

  const config = {
    red: {
      mode: "bitmask",
      colorScheme: visualizationConfig.pixelLayers.map(
        (cfg) => cfg.legend.color
      ),
    },
    green: {
      mode: "jet-heatmap",
      colorScheme: "jet",
    },
  };

  const channelState = {
    red:
      masterOn && drawRegionSection ? redChannel : redChannel.map(() => false),
    green: masterOn && drawHeatmapSection && greenChannel,
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <OSDViewer
        options={viewerOptions}
        ref={osdViewerRef as Ref<OSDViewerRef>}
        style={{ width: "100%", height: "100%" }}
      >
        <>
          <viewport
            zoom={1}
            refPoint={new OpenSeadragon.Point(0, 0)}
            rotation={commonConfig.rotation}
            onZoom={handleViewportZoom}
          />
          <tiledImage
            index={0}
            tileUrlBase={url_prefix.tiles.base}
            tileMetadata={meta}
          />
          <bitmaskLayer
            index={1}
            isVisible
            blendMode={"blend"}
            masterOpacity={0.6}
            config={config}
            channelState={channelState}
            tileUrlBase={url_prefix.tiles.annotatedV2}
            tileMetadata={meta}
          />
          <deckGLOverlay
            views={[
              new OrthographicView({ id: "base" }),
              // new OrthographicView({ id: 'subcell' }),
            ]}
            onRedraw={(...args) => {
              onDeckGLOverlayRedraw(...args);
            }}
          />
        </>
      </OSDViewer>
    </Box>
  );
};

export default Visualiser;
