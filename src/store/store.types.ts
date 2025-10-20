export interface VizState {
  master: boolean;
  updateMaster: (value: boolean) => void;
  redChannel: boolean[];
  updateRedChannel: (index: number, value: boolean) => void;
  drawMountains: boolean;
  updateDrawMountains: (value: boolean) => void;
  drawMissionSites: boolean;
  updateDrawMissionSites: (value: boolean) => void;
}

export interface MouseCoordsState {
  mouseCoords: { x: number; y: number };
  updateMouseCoords: (x: number, y: number) => void;
}

export interface TooltipState {
  tooltipData: {
    point: { x: number; y: number };
    data: { name: string; description: string };
  } | null;
  updateTooltipData: (
    data: {
      point: { x: number; y: number };
      data: { name: string; description: string };
    } | null
  ) => void;
}

export interface AboutColorState {
  color: { h: number; s: number; v: number; a: number };
  updateColor: (color: { h: number; s: number; v: number; a: number }) => void;
}
