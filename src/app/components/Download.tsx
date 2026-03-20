import { motion } from "motion/react";
import { Coins, Smartphone, BarChart3, Activity } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const features = [
  {
    icon: Coins,
    title: "Earn Crypto",
    description:
      "Automatically earn cryptocurrency every time your e-ink display shows an ad.",
  },
  {
    icon: Smartphone,
    title: "Control Devices",
    description:
      "Manage all your AdPal e-ink devices from one place — cases, power banks, and frames.",
  },
  {
    icon: BarChart3,
    title: "Track Earnings",
    description:
      "View detailed breakdowns of your earnings, payouts, and ad performance history.",
  },
  {
    icon: Activity,
    title: "Real-time Stats",
    description:
      "Monitor live ad impressions, device status, and earning rates in real time.",
  },
];

export function Download() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#0A0A0A]">
      <Header />

      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-[#00FFC2]/20 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#BC13FE]/20 to-transparent rounded-full blur-[100px]" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] mix-blend-overlay opacity-30 pointer-events-none" />

      <main className="relative z-10 pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 mb-8"
            >
              <Smartphone className="w-5 h-5 text-[#00FFC2]" />
              <span className="font-['Inter'] text-sm font-semibold text-white">
                Available on iOS
              </span>
            </motion.div>

            <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[0.95]">
              Download
              <span className="block mt-2 bg-gradient-to-r from-[#00FFC2] via-[#60EFFF] to-[#BC13FE] bg-clip-text text-transparent">
                AdPal
              </span>
            </h1>

            <p className="font-['Inter'] text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
              Take control of your e-ink devices and start earning cryptocurrency.
              Track your earnings, manage displays, and monitor performance — all
              from your iPhone.
            </p>

            {/* App Store button */}
            <div className="relative inline-flex flex-col items-center">
              <span className="mb-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 font-['Inter'] text-xs font-semibold text-white/70">
                Coming Soon
              </span>
              <motion.div
                className="relative inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#00FFC2]/50 to-[#00E5AD]/50 px-10 py-5 font-['Inter'] text-lg font-bold text-[#1A1A1A]/50 shadow-2xl shadow-[#00FFC2]/10 cursor-default select-none"
              >
                <svg
                  className="relative w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="relative flex flex-col items-start leading-tight">
                  <span className="text-xs font-medium opacity-80">
                    Download on the
                  </span>
                  <span className="text-xl font-bold -mt-0.5">App Store</span>
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00FFC2]/5 via-transparent to-[#BC13FE]/5 rounded-2xl -z-10" />
                <feature.icon className="w-8 h-8 text-[#00FFC2] mb-4" />
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="font-['Inter'] text-sm text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
