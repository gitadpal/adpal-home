import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router";
import logoImage from "@/assets/89d014c4bbe5f9bfe9f2d34d3475fc63288a688a.png";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] pt-20 pb-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="AdPal Logo" className="adpal-logo-img h-10 w-auto object-contain" />
              <span className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                AdPal
              </span>
            </div>
            <p className="font-['Inter'] text-sm text-white/70 leading-relaxed">
              Value through Refraction. Earn cryptocurrency with your AdPal screen.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-['Space_Grotesk'] text-sm font-bold text-white mb-4">
              PRODUCT
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#features"
                  className="font-['Inter'] text-sm text-white/70 hover:text-[#00FFC2] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/#how-it-works"
                  className="font-['Inter'] text-sm text-white/70 hover:text-[#00FFC2] transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/#earnings"
                  className="font-['Inter'] text-sm text-white/70 hover:text-[#00FFC2] transition-colors"
                >
                  Earnings
                </Link>
              </li>
              <li>
                <Link
                  to="/download"
                  className="font-['Inter'] text-sm text-white/70 hover:text-[#00FFC2] transition-colors"
                >
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          {/* For Advertisers */}
          <div>
            <h3 className="font-['Space_Grotesk'] text-sm font-bold text-white mb-4">
              FOR ADVERTISERS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ap.adpal.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter'] text-sm text-white/70 hover:text-[#00FFC2] transition-colors inline-flex items-center gap-1"
                >
                  Advertiser Portal
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="footer-disabled relative flex w-fit items-center cursor-default">
                <span className="font-['Inter'] text-sm text-white/40">
                  Analytics
                </span>
                <span className="footer-tip pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 text-xs font-semibold text-white/70 opacity-0 transition-opacity">
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-['Space_Grotesk'] text-sm font-bold text-white mb-4">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              <li className="footer-disabled relative flex w-fit items-center cursor-default">
                <span className="font-['Inter'] text-sm text-white/40">
                  Documentation
                </span>
                <span className="footer-tip pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 text-xs font-semibold text-white/70 opacity-0 transition-opacity">
                  Coming Soon
                </span>
              </li>
              <li className="footer-disabled relative flex w-fit items-center cursor-default">
                <span className="font-['Inter'] text-sm text-white/40">
                  API Reference
                </span>
                <span className="footer-tip pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 text-xs font-semibold text-white/70 opacity-0 transition-opacity">
                  Coming Soon
                </span>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-['Inter'] text-sm text-white/70 hover:text-[#00FFC2] transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Inter'] text-sm text-white/50">
            © 2026 BeeSpire (Hong Kong) Limited. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://legal.adpal.xyz/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter'] text-sm text-white/50 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://legal.adpal.xyz/tos"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter'] text-sm text-white/50 hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}