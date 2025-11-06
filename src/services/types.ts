export interface ToggleConfig {
    label: string,
    legend: {
        color: string,
        shape: string,
    }
}

export interface VisualisationConfig {
    pixelLayers: ToggleConfig[]
    heatmapLayers: ToggleConfig[],
    pointLayers: ToggleConfig[],
}