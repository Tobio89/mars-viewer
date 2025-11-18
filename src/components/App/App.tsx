import { useRoutes } from "react-router";

import TitleBar from "@ui/TitleBar";
import router from "@consts/routes";

import "./App.css";

function App() {
  const element = useRoutes(router);

  return (
    <main className="flex w-screen h-screen flex-col">
      <TitleBar />
      {element}
    </main>
  );
}

export default App;
