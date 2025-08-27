import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import CareerShowBg from "./pages/CareerShowBg";
import CareerShowEn from "./pages/CareerShowEn";

export default function App() {
  return (
    <Router basename="/CareerShowLanding">
      <Routes>
        {/* Wrap all routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/bg" element={<CareerShowBg />} />
          <Route path="/en" element={<CareerShowEn />} />
          {/* Default route goes to BG */}
          <Route path="*" element={<CareerShowBg />} />
        </Route>
      </Routes>
    </Router>
  );
}
