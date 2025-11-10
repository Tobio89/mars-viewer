import ViewerPage from "./pages/viewer/Viewer.page";
import AboutPage from "./pages/about/AboutV2.page";

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
