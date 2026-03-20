import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import hardwareImage from "@/assets/c6876f280fe9d4ba3783bc52cb7f9ebb62dde0b9.png";
import { useState, useEffect } from "react";

const adCampaigns = [
  {
    image: "https://images.unsplash.com/photo-1708533548050-16703eff12ec?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080",
    brand: "Abstract",
  },
  {
    image: "https://images.unsplash.com/photo-1704140159556-88e2e6177def?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080",
    brand: "Smoke",
  },
  {
    image: "https://images.unsplash.com/photo-1760112783563-514867b4c2ed?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080",
    brand: "Neon",
  },
  {
    image: "https://images.unsplash.com/photo-1601326420904-32e4818e82d9?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080",
    brand: "Crimson",
  },
];

export function Hero() {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % adCampaigns.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#0A0A0A] pt-32 pb-48">
      {/* Immersive animated gradient background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-gradient-to-br from-[#00FFC2]/40 to-transparent rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -100, 0],
            y: [0, 100, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#BC13FE]/40 to-[#3B82F6]/20 rounded-full blur-[100px]" 
        />
      </div>
      
      {/* Noise overlay for premium aesthetic */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] mix-blend-overlay opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2.5 mb-8"
            >
              <Sparkles className="w-5 h-5 text-[#00FFC2]" />
              <span className="font-['Inter'] text-sm font-semibold text-white">
                Value through Refraction
              </span>
            </motion.div>

            <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.95]">
              The Screen
              <span className="block mt-2 bg-gradient-to-r from-[#00FFC2] via-[#60EFFF] to-white bg-clip-text text-transparent">
                Pays You Back
              </span>
              
            </h1>

            <p className="font-['Inter'] text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
              Premium case with built-in verifiable display technology. Display brand campaigns and earn cryptocurrency while you go about your day.
            </p>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex mb-12"
            >
              <Link
                to="/pre-order"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#00FFC2] to-[#00E5AD] px-10 py-5 font-['Inter'] text-lg font-bold text-[#1A1A1A] shadow-2xl shadow-[#00FFC2]/50 transition-all hover:shadow-[#00FFC2]/70 inline-flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-3">
                  <motion.div
                    animate={{
                      opacity: [1, 0.3, 1],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex items-center justify-center"
                  >
                    <Zap className="w-5 h-5" fill="currentColor" />
                  </motion.div>
                  Pre-Order Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column - Product showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative lg:ml-auto"
          >
            {/* Glowing background card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC2]/30 to-[#BC13FE]/30 rounded-[3rem] blur-3xl transform rotate-6" />
            
            <div className="relative">
              {/* Main product card */}
              <div className="relative rounded-[2.5rem] bg-white/15 backdrop-blur-xl border border-white/30 p-8 shadow-2xl">
                {/* Campaign badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -top-4 -left-4 z-20 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#C026D3] px-4 py-2 shadow-lg"
                >
                  <span className="font-['Inter'] text-xs font-bold text-white uppercase">✨ Cryptocurrency</span>
                </motion.div>

                {/* Earnings badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-4 -right-4 z-20 rounded-2xl bg-gradient-to-r from-[#00FFC2] to-[#00D4A1] px-6 py-3 shadow-lg"
                >
                  <div className="font-['Space_Grotesk'] text-sm font-bold text-[#1A1A1A]">Earning Live</div>
                  <div className="font-['Inter'] text-xs text-[#1A1A1A]/70 font-semibold">85 BNB/cast</div>
                </motion.div>

                {/* Product image */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  {/* Base hardware image */}
                  <img 
                    src={hardwareImage}
                    alt="AdPal E-ink iPhone Case"
                    className="w-full max-w-md mx-auto drop-shadow-2xl relative"
                  />
                  
                  {/* Animated E-ink screen overlay - positioned ON TOP where screen is */}
                  <div className="absolute top-[42.7%] left-[50.8%] -translate-x-1/2 w-[46.7%] h-[47.9%] aspect-[11/16] overflow-hidden rounded-[0.6rem] shadow-2xl">
                    {/* Rotating ad images */}
                    {adCampaigns.map((campaign, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: currentAdIndex === index ? 1 : 0,
                          scale: currentAdIndex === index ? 1 : 1.05,
                        }}
                        transition={{ 
                          duration: 1,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-white"
                      >
                        <img 
                          src={campaign.image}
                          alt={`${campaign.brand} Campaign`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                    
                    {/* E-ink grain texture overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-40 pointer-events-none mix-blend-overlay" />
                    
                    {/* Subtle scan line effect */}
                    <motion.div
                      animate={{
                        y: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-x-0 h-[20%] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"
                    />
                  </div>
                </motion.div>

                {/* Live stats cards */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3"
                  >
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingUp className="w-3 h-3 text-[#00FFC2]" />
                      <span className="font-['Inter'] text-[10px] font-semibold text-white/70">REWARD</span>
                    </div>
                    <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">85</div>
                    <div className="font-['Inter'] text-[10px] text-[#00FFC2] font-semibold">BNB</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3"
                  >
                    <div className="font-['Inter'] text-[10px] font-semibold text-white/70 mb-1">DURATION</div>
                    <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">6h</div>
                    <div className="font-['Inter'] text-[10px] text-white/60">Per cast</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3"
                  >
                    <div className="font-['Inter'] text-[10px] font-semibold text-white/70 mb-1">ACTIVE</div>
                    <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">2.5k</div>
                    <div className="font-['Inter'] text-[10px] text-white/60">Casters</div>
                  </motion.div>
                </div>

                {/* Pool activity indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="mt-6 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-['Inter'] text-xs font-bold text-[#FFA500] uppercase">⚡ Pool Activity</span>
                    <span className="font-['Space_Grotesk'] text-lg font-bold text-white">22%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "22%" }}
                      transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#FFA500] to-[#FF6B00] rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-3 text-xs">
                    <div>
                      <span className="font-['Inter'] text-[#FFA500] font-semibold">Claimed: </span>
                      <span className="font-['Space_Grotesk'] text-white font-bold">140,501</span>
                    </div>
                    <div>
                      <span className="font-['Inter'] text-[#BC13FE] font-semibold">Available: </span>
                      <span className="font-['Space_Grotesk'] text-white font-bold">66,300</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient fade overlay to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#9333EA]/50 to-white pointer-events-none" />
    </section>
  );
}