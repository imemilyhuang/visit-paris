import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import Home from "./routes/Home";
import WrapNav from "./components/nav/WrapNav";
import Accommodations from "./routes/Accommodations";
import Activities from "./routes/Activities";
import Attractions from "./routes/Attractions";
import AttractionsComponent from "./routes/AttractionsComponent";

function App() {
  const element = useRoutes([
    {
      path:"/",
      element: <WrapNav component={<Home />} />
    },
    {
      path:"/home",
      element: <WrapNav component={<Home />} />
    },
    {
      path:"/accommodations",
      element: <WrapNav component={<Accommodations />} />
    },
    {
      path:"/activities",
      element: <WrapNav component={<Activities />} />
    },
    {
      path:"/attractions",
      element: <WrapNav component={<Attractions />} />
    },
    {
      path:"/attractions/:id",
      element: <WrapNav component={<AttractionsComponent />} />
    },
    // {
    //   path:"/dining",
    //   element: <WrapNav component={<Dining />} />
    // },
    // {
    //   path:"/transportation",
    //   element: <WrapNav component={<Transportation />} />
    // },
  ])

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
