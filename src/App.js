import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import WrapNav from "./components/nav/WrapNav";
import Accommodations from "./routes/Accommodations";
import Activities from "./routes/Activities";
import Attractions from "./routes/Attractions";
import AttractionsComponent from "./routes/AttractionsComponent";

import React, { cloneElement, useState } from 'react'
import LoadingScreen from "./components/nav/LoadingScreen";
import PreloadedImages from "./components/nav/PreloadedImages";

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

  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false)

  return (
    <>
    <PreloadedImages setLoading={setLoading} />

    <AnimatePresence>
    { !showContent && <LoadingScreen loading={loading} setShowContent={setShowContent} /> }
    </AnimatePresence>

    <AnimatePresence mode="wait">
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
    </>
  );
}

export default App;
