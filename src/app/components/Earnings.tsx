import { motion, useInView, useSpring, useTransform } from "motion/react";
import { TrendingUp, Clock, Star, ArrowUpRight, Check } from "lucide-react";
import { useRef, useEffect } from "react";

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000
  });

  const display = useTransform(spring, (current) => 
    `${prefix}${current.toFixed(value % 1 !== 0 ? 1 : 0)}${suffix}`
  );

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [spring, inView, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const earningMetrics = [
  {
    label: "Average Daily",
    value: "$12-18",
    subtext: "Based on 8h campaigns",
    trend: "+24%",
    icon: TrendingUp,
    gradient: "from-[#00FFC2] to-[#00D4A1]",
  },
  {
    label: "Per Campaign",
    value: "$5-10",
    subtext: "4-8 hour display",
    trend: "Variable",
    icon: Clock,
    gradient: "from-[#BC13FE] to-[#9333EA]",
  },
  {
    label: "Bonus Tasks",
    value: "+$3-5",
    subtext: "Daily opportunities",
    trend: "Extra",
    icon: Star,
    gradient: "from-[#F59E0B] to-[#D97706]",
  },
];

const earningTiers = [
  {
    tier: "Starter",
    hours: "4h/day",
    monthly: "$150-250",
    features: [
      "Daily campaigns",
      "Basic bonus tasks",
      "Standard payouts",
      "Community access",
    ],
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
  },
  {
    tier: "Active",
    hours: "8h/day",
    monthly: "$360-540",
    features: [
      "Priority campaigns",
      "All bonus tasks",
      "Premium rates",
      "Early campaign access",
    ],
    highlighted: true,
    gradient: "from-[#BC13FE] to-[#00FFC2]",
  },
  {
    tier: "Power User",
    hours: "12h+/day",
    monthly: "$600-900",
    features: [
      "Exclusive campaigns",
      "Multiplier bonuses",
      "VIP support",
      "Revenue sharing",
    ],
    gradient: "from-[#F59E0B] to-[#EF4444]",
  },
];

const floatingLogos = [
  {
    name: "Bitcoin",
    url: "https://cdn.simpleicons.org/bitcoin/F7931A",
    className: "top-10 left-[5%] w-16 h-16 sm:w-20 sm:h-20",
    animation: { y: [0, -15, 0], rotate: [0, 5, 0] },
    duration: 8,
    delay: 0,
  },
  {
    name: "Nike",
    url: "https://cdn.simpleicons.org/nike/1A1A1A",
    className: "top-[25%] right-[5%] w-20 h-20 sm:w-28 sm:h-28",
    animation: { y: [0, 20, 0], rotate: [0, -8, 0] },
    duration: 10,
    delay: 1,
  },
  {
    name: "Ethereum",
    url: "https://cdn.simpleicons.org/ethereum/627EEA",
    className: "bottom-[20%] left-[8%] w-14 h-14 sm:w-20 sm:h-20",
    animation: { y: [0, -25, 0], scale: [1, 1.1, 1] },
    duration: 7,
    delay: 2,
  },
  {
    name: "Apple",
    url: "https://cdn.simpleicons.org/apple/1A1A1A",
    className: "top-[55%] right-[10%] w-16 h-16 sm:w-24 sm:h-24",
    animation: { y: [0, 20, 0], rotate: [0, 10, 0] },
    duration: 9,
    delay: 0.5,
  },
  {
    name: "Coinbase",
    url: "https://cdn.simpleicons.org/coinbase/0052FF",
    className: "top-[40%] left-[12%] w-14 h-14 sm:w-20 sm:h-20",
    animation: { y: [0, -15, 0], rotate: [0, -5, 0] },
    duration: 11,
    delay: 1.5,
  },
  {
    name: "Tesla",
    url: "https://cdn.simpleicons.org/tesla/E31937",
    className: "bottom-[30%] right-[15%] w-16 h-16 sm:w-24 sm:h-24",
    animation: { y: [0, 25, 0], scale: [1, 1.05, 1] },
    duration: 8.5,
    delay: 2.5,
  },
  {
    name: "Solana",
    url: "https://cdn.simpleicons.org/solana/14F195",
    className: "top-[15%] right-[25%] w-12 h-12 sm:w-16 sm:h-16",
    animation: { y: [0, -10, 0], rotate: [0, 15, 0] },
    duration: 6,
    delay: 0.8,
  },
  {
    name: "Adidas",
    url: "https://cdn.simpleicons.org/adidas/1A1A1A",
    className: "bottom-[40%] left-[25%] w-14 h-14 sm:w-20 sm:h-20",
    animation: { y: [0, 15, 0], rotate: [0, -12, 0] },
    duration: 9.5,
    delay: 1.2,
  },
  {
    name: "USDT",
    url: "https://cdn.simpleicons.org/tether/50AF95",
    className: "top-[70%] left-[5%] w-12 h-12 sm:w-16 sm:h-16",
    animation: { y: [0, -18, 0], scale: [1, 1.15, 1] },
    duration: 7.5,
    delay: 2.2,
  },
  {
    name: "Starbucks",
    url: "https://cdn.simpleicons.org/starbucks/00704A",
    className: "bottom-[10%] right-[25%] w-16 h-16 sm:w-20 sm:h-20",
    animation: { y: [0, 12, 0], rotate: [0, 8, 0] },
    duration: 10.5,
    delay: 0.3,
  }
];

export function Earnings() {
  return (
    <section id="earnings" className="relative pt-48 pb-48 bg-gradient-to-b from-white via-[#F8F9FF] to-white overflow-hidden -mt-32">
      {/* Gradient transition overlay from hero */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#9333EA]/30 via-[#F8F9FF]/50 to-transparent pointer-events-none" />
      
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-[#BC13FE]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-bl from-[#00FFC2]/10 to-transparent rounded-full blur-3xl" />

      {/* Floating branding photos and crypto logos */}
      {floatingLogos.map((logo, index) => (
        <motion.div
          key={index}
          animate={logo.animation}
          transition={{ 
            duration: logo.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: logo.delay
          }}
          className={`absolute ${logo.className} rounded-2xl md:rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex items-center justify-center p-4 sm:p-6 opacity-80 hover:opacity-100 transition-opacity z-0`}
        >
          <img 
            src={logo.url}
            alt={`${logo.name} logo`}
            className="w-full h-full object-contain drop-shadow-sm"
          />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl px-6 z-10">
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
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00FFC2]/10 to-[#BC13FE]/10 border border-[#00FFC2]/20 px-6 py-3 mb-6"
          >
            <span className="font-['Inter'] text-sm font-bold bg-gradient-to-r from-[#00FFC2] to-[#BC13FE] bg-clip-text text-transparent">
              💰 Earning Potential
            </span>
          </motion.div>

          <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-6">
            Real Earnings from
            <span className="block mt-2 bg-gradient-to-r from-[#00FFC2] to-[#BC13FE] bg-clip-text text-transparent">
              Real Users
            </span>
          </h2>
          <p className="font-['Inter'] text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
            The more you display, the more you earn. Start with any tier and scale up.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {earningMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className={`relative rounded-3xl bg-gradient-to-br ${metric.gradient} p-8 shadow-xl hover:shadow-2xl transition-all`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]" />
                
                <div className="relative">
                  {/* Icon and trend */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                      <metric.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                      <span className="font-['Space_Grotesk'] text-sm font-bold text-white">{metric.trend}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="font-['Inter'] text-sm font-semibold text-white/80 mb-2">
                    {metric.label}
                  </div>
                  <div className="font-['Space_Grotesk'] text-5xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="font-['Inter'] text-sm text-white/70">
                    {metric.subtext}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#00FFC2] to-[#00D4A1] p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]" />
              
              {/* Animated pulse indicator - top right */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full"
              />
              
              <div className="relative">
                <div className="font-['Inter'] text-sm font-semibold text-white/80 mb-3 uppercase">
                  Campaigns Processed
                </div>
                <div className="font-['Space_Grotesk'] text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value={47.3} suffix="K" />
                </div>
                <div className="font-['Inter'] text-sm text-white/70">
                  Successfully delivered ads
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#BC13FE] to-[#9333EA] p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]" />
              
              {/* Trending up indicator - top right */}
              <div className="absolute top-8 right-8 flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5">
                <ArrowUpRight className="w-4 h-4 text-white" />
                <span className="font-['Space_Grotesk'] text-sm font-bold text-white">+18%</span>
              </div>
              
              <div className="relative">
                <div className="font-['Inter'] text-sm font-semibold text-white/80 mb-3 uppercase">
                  Active Screens
                </div>
                <div className="font-['Space_Grotesk'] text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value={2847} />
                </div>
                <div className="font-['Inter'] text-sm text-white/70">
                  Currently displaying ads
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]" />
              
              {/* Clock icon - top right */}
              <div className="absolute top-8 right-8">
                <Clock className="w-8 h-8 text-white/30" strokeWidth={2} />
              </div>
              
              <div className="relative">
                <div className="font-['Inter'] text-sm font-semibold text-white/80 mb-3 uppercase">
                  Screen Time Cast
                </div>
                <div className="font-['Space_Grotesk'] text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value={1.2} suffix="M" />
                </div>
                <div className="font-['Inter'] text-sm text-white/70">
                  Total hours displayed
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]" />
              
              {/* Star icon - top right */}
              <div className="absolute top-8 right-8">
                <Star className="w-8 h-8 text-white/30" fill="currentColor" strokeWidth={2} />
              </div>
              
              <div className="relative">
                <div className="font-['Inter'] text-sm font-semibold text-white/80 mb-3 uppercase">
                  Money Paid Back
                </div>
                <div className="font-['Space_Grotesk'] text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value={892} prefix="$" suffix="K" />
                </div>
                <div className="font-['Inter'] text-sm text-white/70">
                  Earned by casters
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}