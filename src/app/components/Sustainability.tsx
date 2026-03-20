import { motion } from "motion/react";
import { Leaf, BatteryCharging, Globe, ZapOff } from "lucide-react";

const metrics = [
  {
    icon: BatteryCharging,
    stat: "99%",
    label: "Less Energy",
    description: "Compared to standard LCD or OLED displays.",
    delay: 0.1,
  },
  {
    icon: ZapOff,
    stat: "0W",
    label: "Static Power",
    description: "Consumes absolutely zero power once an image is rendered.",
    delay: 0.2,
  },
  {
    icon: Globe,
    stat: "100%",
    label: "Eco-Friendly",
    description: "Sustainable advertising that aligns with modern green initiatives.",
    delay: 0.3,
  },
];

export function Sustainability() {
  return (
    <div className="relative pb-24 md:pb-32 w-full">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#00FFC2]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      
      <div className="relative w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00FFC2]/10 border border-[#00FFC2]/20 px-4 py-2 mb-8">
              <Leaf className="w-4 h-4 text-[#00B88C]" />
              <span className="font-['Inter'] text-sm font-semibold text-[#00B88C] uppercase tracking-wider">
                Green Technology
              </span>
            </div>
            
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Maximum impact.
              <span className="block mt-2 bg-gradient-to-r from-[#00B88C] to-[#00FFC2] bg-clip-text text-transparent">
                Minimum footprint.
              </span>
            </h2>
            
            <p className="font-['Inter'] text-lg text-[#2C2C2C]/70 mb-8 leading-relaxed max-w-xl">
              Unlike traditional digital billboards that consume massive amounts of electricity, AdPal's E-ink technology only requires power to change an image. Once your ad is loaded, it consumes absolutely zero power to maintain visibility.
            </p>
            <p className="font-['Inter'] text-lg text-[#2C2C2C]/70 leading-relaxed max-w-xl">
              It's the ultimate sustainable advertising solution—saving battery life for our users and providing guilt-free, high-visibility campaigns for brands.
            </p>
          </motion.div>
          
          {/* Right Column: Metrics Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: metric.delay }}
                className={`relative rounded-3xl bg-white border border-gray-100 p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#00FFC2]/10 transition-all ${
                  index === 2 ? "sm:col-span-2 text-center" : ""
                }`}
              >
                <div className={`relative z-10 ${index === 2 ? "flex flex-col items-center" : ""}`}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00FFC2]/10 text-[#00B88C] mb-6">
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-4xl font-bold text-[#1A1A1A] mb-2">
                    {metric.stat}
                  </h3>
                  <div className="font-['Space_Grotesk'] text-xl font-bold text-[#00B88C] mb-3">
                    {metric.label}
                  </div>
                  <p className="font-['Inter'] text-sm text-[#2C2C2C]/60 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
