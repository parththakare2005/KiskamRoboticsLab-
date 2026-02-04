import { Routes, Route } from "react-router-dom";

import HomePage from "./landingpage/home/HomePage.jsx";
import AboutPage from "./landingpage/about/AboutPage.jsx";
import ResearchPage from "./landingpage/research/ResearchPage.jsx";
import CarrerPage from "./landingpage/carrers/CarrerPage.jsx";
import ContactUsPage from "./landingpage/contactus/ContactUsPage.jsx";

export default function App() {
  return (
    <>
  

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/career" element={<CarrerPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </>
  );
}
