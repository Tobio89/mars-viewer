import { Box } from "@mui/material"
import DetailTooltip from "./DetailTooltip"
import SideBar from "./SideBar"
import Visualiser from "./Visualiser/Visualiser"
import useVisualisationRendering from "./useVisualisationRendering/useVisualisationRendering"

import type { VisualisationConfig } from "src/services/types"

interface Props {
    metadata: string,
    config: VisualisationConfig,
    localeData: object
}

const ViewerPageInternal = ({ metadata, config }: Props) => {

    const { onDeckGLOverlayRedraw } =
        useVisualisationRendering();


    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                height: "100%",
                width: "100%",
            }}
        >
            <SideBar config={config} />
            <Box
                component="main"
                sx={() => ({
                    flexGrow: 1,
                    position: "relative",
                })}
            >
                <DetailTooltip />
                <Visualiser
                    metadata={metadata}
                    onDeckGLOverlayRedraw={onDeckGLOverlayRedraw}
                />
            </Box>
        </Box>
    )

}

export default ViewerPageInternal