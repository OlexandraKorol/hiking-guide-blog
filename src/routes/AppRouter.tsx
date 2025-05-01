import { Routes, Route } from "react-router-dom";
import { EquipmentPage } from "../pages/EquipmentPage";
import { AboutUs } from "../pages/AboutUs";
import { BlogPage } from "../pages/BlogPage";
import { Home } from "../pages/Home";



export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/equipment" element={<EquipmentPage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
};