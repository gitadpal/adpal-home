import { HelmetProvider, Helmet } from "react-helmet-async";
import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { Earnings } from "./components/Earnings";
import { Footer } from "./components/Footer";
import { PreOrder } from "./components/PreOrder";
import { Download } from "./components/Download";
import { About } from "./components/About";
import { Support } from "./components/Support";

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Earnings />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>AdPal | Eco-Friendly Digital Billboards. Earn Crypto.</title>
        <meta name="description" content="AdPal is a Web3 fintech platform that monetizes e-ink display by turning them into digital billboards. Earn crypto while reducing your carbon footprint." />
        <meta name="keywords" content="Web3, crypto, e-ink, iPhone case, digital billboard, passive income, fintech, AdPal, green technology" />
        <meta property="og:title" content="AdPal | Eco-Friendly Digital Billboards. Earn Crypto." />
        <meta property="og:description" content="AdPal is a Web3 fintech platform that monetizes e-ink display by turning them into digital billboards. Earn crypto while reducing your carbon footprint." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AdPal | Eco-Friendly Digital Billboards. Earn Crypto." />
        <meta name="twitter:description" content="AdPal is a Web3 fintech platform that monetizes e-ink display by turning them into digital billboards." />
        <meta name="theme-color" content="#1A1A1A" />
      </Helmet>
      <ScrollToHash />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pre-order" element={<PreOrder />} />
          <Route path="/download" element={<Download />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}
