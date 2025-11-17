import { Box } from "@mui/material";
import { useRoutes } from "react-router";

import TitleBar from "@ui/TitleBar";
import router from "@consts/routes";

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
