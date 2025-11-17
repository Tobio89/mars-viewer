import ViewerPage from "src/pages/viewer/Viewer.page";
import AboutPage from "src/pages/about/About.page";

const router = [
  {
    path: "/",
    element: <ViewerPage />,
  },
  {
    path: "/about/*",
    element: <AboutPage />,
  },
];

export default router;
