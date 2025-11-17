import { useRoutes } from "react-router";
import { Box, Typography } from "@mui/material";
import { PageContainer, PageSection } from "../../components/ui/common";
import PageLink from "src/components/ui/PageLink";

import AboutViewer from "./AboutViewer.page";
import AboutHome from "./AboutHome.page";
import AboutMars from "./AboutMars.page";
import AboutDeveloper from "./AboutDeveloper.page";

const aboutRouter = [
  {
    path: "viewer",
    element: <AboutViewer />,
  },
  {
    path: "mars",
    element: <AboutMars />,
  },
  {
    path: "developer",
    element: <AboutDeveloper />,
  },
  {
    path: "/*",
    element: <AboutHome />,
  },
];

function AboutPage() {
  const element = useRoutes(aboutRouter);

  return (
    <PageContainer>
      <PageSection>
        <Typography variant="h3">About</Typography>
      </PageSection>
      <PageSection>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
          component="div"
        >
          <PageLink to="/about/viewer" title="Mars Viewer" variant="h4" />
          <PageLink to="/about/mars" title="The Planet" variant="h4" />
          <PageLink to="/about/developer" title="The Developer" variant="h4" />
        </Box>
      </PageSection>
      {element}
    </PageContainer>
  );
}

export default AboutPage;
