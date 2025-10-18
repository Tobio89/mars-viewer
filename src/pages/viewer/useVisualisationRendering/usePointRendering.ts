import { useCallback } from "react";

import { ScatterplotLayer } from "@deck.gl/layers";

import { DeckLayer } from "./useDeckGL.types";

import marsLocaleData from "../../../marsLocaleData.json";
import { useTooltipState, useVisualizationStore } from "src/store/store";
import { visualizationConfig } from "src/visualizationConfig";
import { RGBAColor } from "@deck.gl/core";
interface PointData {
  name: string;
  point: { x: number; y: number };
  description?: string;
}

function hexToRGB(hex: string): RGBAColor {
  const [r, g, b] = hex.match(/\w\w/g)!.map((c) => parseInt(c, 16));
  return [r, g, b];
}

const usePointRendering = () => {
  const { mountains, missionSites } = marsLocaleData as {
    mountains: PointData[];
    missionSites: PointData[];
  };
  const { pointLayers } = visualizationConfig;
  const { drawMountains, drawMissionSites } = useVisualizationStore();
  const { updateTooltipData } = useTooltipState();

  const createPointLayers = useCallback(
    // (viewer: OpenSeadragon.Viewer): DeckLayer[] => {
    (): DeckLayer[] => {
      const result: DeckLayer[] = [];

      if (drawMountains) {
        result.push(
          new ScatterplotLayer<PointData>({
            id: `point-mountains`,
            data: mountains,
            getPosition: (d: PointData) =>
              [d.point.x, d.point.y] as [number, number],
            getFillColor: hexToRGB(pointLayers[0].legend.color),
            getLineColor: [0, 255, 0],
            getLineWidth: 5,
            radiusScale: 20,
            filled: true,
            stroked: false,
            pickable: true,
            onHover: (info) => {
              if (info.object && info.x && info.y) {
                const data = info.object as unknown as PointData;
                updateTooltipData({
                  point: { x: info.x, y: info.y },
                  data: {
                    name: data.name,
                    description: data.description ?? "",
                  },
                });
              } else {
                updateTooltipData(null);
              }
            },
          })
        );
      }
      if (drawMissionSites) {
        result.push(
          new ScatterplotLayer<PointData>({
            id: `point-mission-sites`,
            data: missionSites,
            getPosition: (d: PointData) =>
              [d.point.x, d.point.y] as [number, number],
            getFillColor: hexToRGB(pointLayers[1].legend.color),
            getLineColor: [0, 255, 0],
            getLineWidth: 5,
            radiusScale: 20,
            filled: true,
            stroked: false,
            pickable: true,
            onHover: (info) => {
              if (info.object && info.x && info.y) {
                const data = info.object as unknown as PointData;
                updateTooltipData({
                  point: { x: info.x, y: info.y },
                  data: {
                    name: data.name,
                    description: data.description ?? "",
                  },
                });
              } else {
                updateTooltipData(null);
              }
            },
          })
        );
      }
      return result;
    },
    [
      drawMissionSites,
      drawMountains,
      missionSites,
      mountains,
      pointLayers,
      updateTooltipData,
    ]
  );

  return { createPointLayers };
};
export default usePointRendering;
