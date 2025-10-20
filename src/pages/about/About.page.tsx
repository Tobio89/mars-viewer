import { Typography } from "@mui/material";
import { PageContainer, PageSection } from "../../components/common";

function AboutPage() {
  return (
    <PageContainer>
      <PageSection>
        <Typography variant="h3">About</Typography>
        <Typography variant="body1">
          Mars Visualiser is a tool for viewing Mars. It combines a high
          resolution map of mars with many layers of data visualisation.
        </Typography>
        <Typography variant="body1">
          It is a portfolio project to demonstrate Deep Zoom-based
          visualisation, in particular, bitmasked tiled image visualisation.
        </Typography>
      </PageSection>
    </PageContainer>
  );
}

export default AboutPage;
