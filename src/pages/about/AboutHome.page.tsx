import { Typography } from "@mui/material"
import { PageSection } from "src/components/common"

function AboutHome() {
    return (
        <PageSection>
            <Typography variant="body1">
                Mars Viewer is a portfolio project to demonstrate Deep Zoom-based
                visualisation, in particular, bit-masked tiled image visualisation.
                <br />
                has multiple layers of data visualization that, using different
                rendering techniques, show different aspects of our neighbouring
                planet.
            </Typography>
            <Typography>
                It was developed by Tobias Sample, a Front End Engineer specialising in data visualisation using React.js
            </Typography>
            <Typography>
                Click on one of the links above to learn more!
            </Typography>
        </PageSection>

    )
}

export default AboutHome