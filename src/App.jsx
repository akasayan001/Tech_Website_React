import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import SignInPage from "./pages/SignInPage";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Sign In has its own full-page layout */}
        <Route path="/signin" element={<SignInPage />} />

        {/* All other pages use the main layout */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        {/* <Route path="/work" element={<Layout><WorkPage /></Layout>} /> */}
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/news" element={<Layout><NewsPage /></Layout>} />
        {/* <Route path="/careers" element={<Layout><CareersPage /></Layout>} /> */}
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
