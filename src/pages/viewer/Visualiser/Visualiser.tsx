import { Ref, useMemo } from "react";
import OpenSeadragon from "openseadragon";
import { OrthographicView } from "@deck.gl/core";
import OSDViewer, {
  OSDViewerRef,
  readXMLMetadata,
} from "@lunit/osd-react-renderer";
import { Box } from "@mui/material";

import useOSDHandlers from "../useOSDHandlers";

import { useVisualizationStore } from "../../../store/store";
import { commonConfig, url_prefix, viewerOptions } from "../../../const";
import { visualizationConfig } from "../../../visualizationConfig";


import type { VisualizerProps } from "./Visualizer.types";

const Visualiser = ({
  onDeckGLOverlayRedraw,
  metadata,
}: VisualizerProps) => {

  const { osdViewerRef, handleViewportZoom } = useOSDHandlers();

  const {
    master: masterOn,
    drawRegionSection,
    drawHeatmapSection,
    redChannel,
    greenChannel,
  } = useVisualizationStore();

  // it's not this
  const meta = useMemo(() => { return readXMLMetadata(metadata) }, [])

  const options = {
    channels: {
      red: {
        mode: "bitmask",
        state: drawRegionSection ? redChannel : redChannel.map(() => false),
        // state: [true, true, true, true, true, true],
        colorScheme: visualizationConfig.pixelLayers.map(
          (cfg) => cfg.legend.color
        ),
      },
      green: {
        mode: "jet-heatmap",
        state: drawHeatmapSection && greenChannel,
        colorScheme: "jet",
      },
    },
    blendMode: "blend",
    masterOpacity: "0.2",
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
            isVisible={masterOn && (drawRegionSection || drawHeatmapSection)}
            tileUrlBase={url_prefix.tiles.annotatedV2}
            tileMetadata={meta}
            options={options}
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
