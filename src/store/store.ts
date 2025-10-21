import { create } from "zustand";

import type {
  VizState,
  MouseCoordsState,
  TooltipState,
  AboutColorState,
} from "./store.types";

const useVisualizationStore = create<VizState>((set) => ({
  master: true,
  updateMaster: (value: boolean) => set({ master: value }),

  drawRegionSection: true,
  updateDrawRegionSection: (value: boolean) =>
    set({ drawRegionSection: value }),

  redChannel: [true, true, true, true, true, true],
  updateRedChannel: (index: number, value: boolean) =>
    set((state) => {
      const newState = [...state.redChannel];
      newState[index] = value;
      return { redChannel: newState, master: value ? true : state.master };
    }),

  drawPointSection: true,
  updateDrawPointSection: (value: boolean) => set({ drawPointSection: value }),

  drawMountains: true,
  updateDrawMountains: (value: boolean) => set({ drawMountains: value }),

  drawMissionSites: true,
  updateDrawMissionSites: (value: boolean) => set({ drawMissionSites: value }),
}));

const useMouseCoords = create<MouseCoordsState>((set) => ({
  mouseCoords: { x: 0, y: 0 },
  updateMouseCoords: (x: number, y: number) => set({ mouseCoords: { x, y } }),
}));

const useTooltipState = create<TooltipState>((set) => ({
  tooltipData: null,
  updateTooltipData: (
    data: {
      point: { x: number; y: number };
      data: { name: string; description: string };
    } | null
  ) =>
    set({
      tooltipData: data
        ? {
            point: data.point,
            data: data.data,
          }
        : null,
    }),
}));

const useAboutColorState = create<AboutColorState>((set) => ({
  color: { h: 31, s: 93, v: 90, a: 1 },
  updateColor: (color: { h: number; s: number; v: number; a: number }) =>
    set({ color }),
}));

export {
  useVisualizationStore,
  useMouseCoords,
  useTooltipState,
  useAboutColorState,
};
