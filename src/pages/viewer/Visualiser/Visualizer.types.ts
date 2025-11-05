import type { Deck } from "@deck.gl/core";
import type { TooltipOverlayRedrawArgs } from "../useVisualisationRendering/useVisualisationRendering.types";

export interface VisualizerProps {
  metadata: string,
  onTooltipOverlayRedraw: (event: TooltipOverlayRedrawArgs) => void;
  onDeckGLOverlayRedraw: (viewer: OpenSeadragon.Viewer, deck: Deck) => void;
}
