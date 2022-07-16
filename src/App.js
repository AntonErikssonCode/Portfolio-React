import { Route, Routes } from "react-router-dom";
import React from "react";
import FuturePage from "./pages/Future";
import PastPage from "./pages/Past";
import PresentPage from "./pages/Present";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/navigation/ScrollToTop";
function App() {
  return (
    <Layout>
{     <ScrollToTop/>
}    <Routes>
        <Route path="/" element={<PastPage />} />
        <Route path="past" element={<PastPage />} />
        <Route path="present" element={<PresentPage />} />
        <Route path="future" element={<FuturePage />} />
        <Route path="future/contact-me" element={<FuturePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
