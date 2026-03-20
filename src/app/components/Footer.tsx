import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
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
                <a
                  href="#features"
                  className="font-['Inter'] text-sm text-white/70 hover:text-[#00FFC2] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="font-['Inter'] text-sm text-white/70 hover:text-[#00FFC2] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#earnings"
                  className="font-['Inter'] text-sm text-white/70 hover:text-[#00FFC2] transition-colors"
                >
                  Earnings
                </a>
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
              <li>
                <span className="font-['Inter'] text-sm text-white/70">
                  Analytics
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
              <li>
                <span className="font-['Inter'] text-sm text-white/70">
                  Documentation
                </span>
              </li>
              <li>
                <span className="font-['Inter'] text-sm text-white/70">
                  API Reference
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Inter'] text-sm text-white/50">
            © 2026 AdPal. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-['Inter'] text-sm text-white/50 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-['Inter'] text-sm text-white/50 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="font-['Inter'] text-sm text-white/50 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}