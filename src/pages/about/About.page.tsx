import { useRoutes } from "react-router";

import { PageContainer, PageSection } from "@ui/common";
import PageLink from "@ui/PageLink";

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
        <h3 className="text-4xl">About</h3>
      </PageSection>
      <PageSection>
        <div className="flex w-full justify-between">
          <PageLink to="/about/viewer" title="Mars Viewer" />
          <PageLink to="/about/mars" title="The Planet" />
          <PageLink to="/about/developer" title="The Developer" />
        </div>
      </PageSection>
      {element}
    </PageContainer>
  );
}

export default AboutPage;
