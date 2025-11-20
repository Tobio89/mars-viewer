import { useLocation, useRoutes } from "react-router";

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

const getTitleFromPath = (path: string) => {
  switch (path) {
    case "/about/viewer":
      return ": The Viewer";
    case "/about/mars":
      return ": The Planet";
    case "/about/developer":
      return ": The Developer";
    default:
      return "";
  }
};

function AboutPage() {
  const element = useRoutes(aboutRouter);
  const { pathname } = useLocation();

  const aboutTitle = getTitleFromPath(pathname);

  return (
    <PageContainer>
      <PageSection>
        <h3 className="text-4xl capitalize">About{aboutTitle}</h3>
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
