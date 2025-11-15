import { Box } from "@mui/material";
import { useRoutes } from "react-router";

import TitleBar from "./components/ui/TitleBar";

import router from "./routes";

import "./App.css";

function App() {
  const element = useRoutes(router);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <TitleBar />
      {element}
    </Box>
  );
}

export default App;
