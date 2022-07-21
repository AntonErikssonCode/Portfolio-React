import { Route, Routes } from "react-router-dom";
import React from "react";
import FuturePage from "./pages/Future";
import PastPage from "./pages/Past";
import PresentPage from "./pages/Present";
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
/* import ScrollToTop from "./components/navigation/ScrollToTop";
 */function App() {
  return (
    <BrowserRouter>
    <Layout>
{/* {     <ScrollToTop/>
 */}  <Routes>
        <Route path="/" exact  xact element={<PastPage />} />
        <Route path="past"  exact  element={<PastPage />} />
        <Route path="present" exact  element={<PresentPage />} />
        <Route path="future" exact  element={<FuturePage />} />
        <Route path="future/contact-me" exact   element={<FuturePage />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
