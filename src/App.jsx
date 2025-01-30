import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from "../pages/Vans/Vans";
import VanDetail from "../pages/Vans/VanDetail";
import "./server";
import Layout from "../components/Layout";
import Dashboard from "../pages/Host/Dashboard";
import Income from "../pages/Host/Income";
import Reviews from "../pages/Host/Reviews";
import HostLayout from "../components/HostLayout";
import HostVans from "../pages/Host/HostVans";
import HostVanDetail from "../pages/Host/HostVanDetail.jsx";
import HostVanInfo from "../pages/Host/HostVanInfo.jsx";
import HostVanPhotos from "../pages/Host/HostVanPhotos.jsx";
import HostVanPricing from "../pages/Host/HostVanPricing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          {/* Host Layout */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;