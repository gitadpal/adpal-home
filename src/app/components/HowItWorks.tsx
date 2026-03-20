import { motion } from "motion/react";
import { Search, Monitor, Coins, Gift } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: Search,
    title: "Browse Campaigns",
    description: "Explore available ad campaigns from trusted brands. Filter by duration, earnings, and content type.",
    color: "from-[#00FFC2] to-[#00D4A1]",
    delay: 0.1,
    bgImage: "https://images.unsplash.com/photo-1769596722567-eb7fa5ad2ff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBsaXN0JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzgyMTc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Monitor,
    title: "Commit Your Screen",
    description: "Select a campaign and commit your E-ink display for 4-8 hours. See exactly how the ad will look with dithering preview.",
    color: "from-[#BC13FE] to-[#9333EA]",
    delay: 0.2,
    bgImage: "https://images.unsplash.com/photo-1772734645633-5bfbbb87da88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxORkMlMjBjb250YWN0bGVzcyUyMHBheW1lbnQlMjBwaG9uZXxlbnwxfHx8fDE3NzM4MjE3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Coins,
    title: "Earn Tokens",
    description: "Receive cryptocurrency tokens automatically. The longer you display, the more you earn.",
    color: "from-[#3B82F6] to-[#1D4ED8]",
    delay: 0.3,
    bgImage: "https://images.unsplash.com/photo-1673600043990-6ba525635ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHdhbGxldCUyMHRyYW5zYWN0aW9uJTIwc2lnbmluZ3xlbnwxfHx8fDE3NzM4MjE3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Gift,
    title: "Bonus Tasks",
    description: "Complete quick bonus tasks throughout the day to earn extra tokens and maximize your passive income.",
    color: "from-[#F59E0B] to-[#D97706]",
    delay: 0.4,
    bgImage: "https://images.unsplash.com/photo-1637960453354-7cde51ec7479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2lucyUyMGZhbGxpbmclMjBtb25leSUyMHJhaW58ZW58MXx8fHwxNzczODIxNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="relative pt-40 pb-48 bg-gradient-to-b from-white via-[#F8F9FF] to-white overflow-hidden -mt-24">
      {/* Gradient overlay from previous section */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-[#F8F9FF]/80 to-transparent pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#BC13FE]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[#00FFC2]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#BC13FE]/10 to-[#00FFC2]/10 border border-[#BC13FE]/20 px-6 py-3 mb-6"
          >
            <span className="font-['Inter'] text-sm font-bold bg-gradient-to-r from-[#BC13FE] to-[#00FFC2] bg-clip-text text-transparent">
              🚀 Simple Process
            </span>
          </motion.div>
          
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-6">
            Start Earning in
            <span className="block mt-2 bg-gradient-to-r from-[#BC13FE] to-[#00FFC2] bg-clip-text text-transparent">
              Four Steps
            </span>
          </h2>
          <p className="font-['Inter'] text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Simple steps to start earning with your AdPal E-ink case.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="group relative"
            >
              <div className="relative h-full">
                {/* Floating number badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: step.delay + 0.2, type: "spring", stiffness: 200 }}
                  className={`absolute -top-6 -left-6 z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}
                >
                  <span className="font-['Space_Grotesk'] text-2xl font-bold text-white">{index + 1}</span>
                </motion.div>

                {/* Main card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-3xl bg-white border-2 border-[#E0E0E0] p-8 pl-12 shadow-lg hover:shadow-2xl hover:border-transparent transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Background image - positioned on right side, dimmed by default */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <motion.div
                      animate={{ 
                        opacity: hoveredIndex === index ? 0.6 : 0.15,
                        scale: hoveredIndex === index ? 1.05 : 1
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute top-0 right-0 w-1/2 h-full"
                    >
                      <img 
                        src={step.bgImage} 
                        alt="" 
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/60 to-white" />
                    </motion.div>
                  </div>

                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                  
                  {/* Icon background glow */}
                  <div className="mb-6 relative inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-40`} />
                    <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color}`}>
                      <step.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#1A1A1A] mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Inter'] text-base text-[#2C2C2C]/80 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow indicator for flow */}
                  {index < steps.length - 1 && index % 2 === 1 && (
                    <div className="hidden lg:block absolute -bottom-16 left-1/2 -translate-x-1/2">
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-[#BC13FE]/30"
                      >
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14m0 0l-7-7m7 7l7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                  
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden lg:block absolute top-1/2 -right-16 -translate-y-1/2">
                      <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-[#00FFC2]/30"
                      >
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}