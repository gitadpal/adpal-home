import { motion } from "motion/react";
import { Eye, Zap, Image, Shield, Wallet, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Sustainability } from "./Sustainability";

const features = [
  {
    icon: Eye,
    title: "Dithering Preview",
    description: "See exactly how your E-ink screen will display ads before committing. What you see is what you get.",
    gradient: "from-[#00FFC2] to-[#00D4A1]",
    stat: "100%",
    statLabel: "Accuracy",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Start displaying ads immediately after selection. No waiting, no approvals needed.",
    gradient: "from-[#BC13FE] to-[#9B13D8]",
    stat: "<10s",
    statLabel: "Setup Time",
  },
  {
    icon: Image,
    title: "Free Gallery",
    description: "When not earning, display free content from our public gallery or upload your own personalized images.",
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
    stat: "5000+",
    statLabel: "Free Images",
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description: "All campaigns are vetted and approved. Display ads from trusted brands you're proud to showcase.",
    gradient: "from-[#10B981] to-[#059669]",
    stat: "Verified",
    statLabel: "Brands Only",
  },
  {
    icon: Wallet,
    title: "Crypto Wallet",
    description: "Earn directly to your Web3 wallet. Transparent blockchain transactions with real-time tracking.",
    gradient: "from-[#F59E0B] to-[#D97706]",
    stat: "Live",
    statLabel: "Payouts",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Choose campaigns that fit your schedule. Display for 4 hours, 8 hours, or longer periods.",
    gradient: "from-[#EF4444] to-[#DC2626]",
    stat: "24/7",
    statLabel: "Availability",
  },
];

export function Features() {
  return (
    <section id="features" className="relative pt-40 pb-48 bg-gradient-to-b from-white via-[#F8F9FF] to-white overflow-hidden -mt-24">
      {/* Gradient transition overlay */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-[#F8F9FF]/80 to-transparent pointer-events-none" />
      
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#BC13FE]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#00FFC2]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Sustainability />

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
              ⚡ Powerful Features
            </span>
          </motion.div>

          <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-6">
            Built for the
            <span className="block mt-2 bg-gradient-to-r from-[#BC13FE] to-[#00FFC2] bg-clip-text text-transparent">
              Web3 Era
            </span>
          </h2>
          <p className="font-['Inter'] text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Premium fintech meets cutting-edge Web3. Secure, transparent, and designed for passive income.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full"
              >
                {/* Card */}
                <div className="relative h-full rounded-3xl bg-white border-2 border-[#E0E0E0] p-8 shadow-lg hover:shadow-2xl hover:border-transparent transition-all duration-300 overflow-hidden">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                  {/* Stat badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className="absolute top-6 right-6"
                  >
                    <div className={`rounded-xl bg-gradient-to-br ${feature.gradient} px-3 py-2 shadow-lg`}>
                      <div className="font-['Space_Grotesk'] text-xs font-bold text-white">{feature.stat}</div>
                      <div className="font-['Inter'] text-[10px] text-white/80">{feature.statLabel}</div>
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-30`} />
                    <div className={`relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient}`}>
                      <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#1A1A1A] mb-3 pr-16">
                    {feature.title}
                  </h3>
                  <p className="font-['Inter'] text-[#2C2C2C]/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full skew-x-12 opacity-0 group-hover:opacity-100"
                      animate={{
                        translateX: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        repeat: 0,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-16"
        >
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#1A1A1A] p-12 lg:p-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px]" />
            
            {/* Gradient orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00FFC2]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#BC13FE]/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Customer Column */}
              <div className="text-left relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-6">
                  <span className="font-['Inter'] text-xs font-semibold text-[#00FFC2] uppercase tracking-wider">For Users</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to start
                  <span className="block mt-2 bg-gradient-to-r from-[#00FFC2] to-[#60EFFF] bg-clip-text text-transparent">
                    earning today?
                  </span>
                </h3>
                <p className="font-['Inter'] text-lg text-white/70 mb-8 max-w-lg">
                  Join thousands of users already earning. Get your hardware delivered and start monetizing.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex"
                >
                  <Link
                    to="/pre-order"
                    className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-['Inter'] text-lg font-bold text-[#1A1A1A] shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Zap className="w-5 h-5" />
                    Order Your Case
                  </Link>
                </motion.div>
              </div>

              {/* Divider for mobile / Border for desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
              <div className="block lg:hidden w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

              {/* Advertiser Column */}
              <div className="text-left relative z-10 lg:pl-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-6">
                  <span className="font-['Inter'] text-xs font-semibold text-[#BC13FE] uppercase tracking-wider">For Brands</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to reach
                  <span className="block mt-2 bg-gradient-to-r from-[#BC13FE] to-[#FF4D4D] bg-clip-text text-transparent">
                    a new audience?
                  </span>
                </h3>
                <p className="font-['Inter'] text-lg text-white/70 mb-8 max-w-lg">
                  Launch campaigns on thousands of moving billboards in the real world. Only pay for verified views.
                </p>
                <motion.a
                  href="https://ap.adpal.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#BC13FE] to-[#9333EA] px-8 py-4 font-['Inter'] text-lg font-bold text-white shadow-xl shadow-[#BC13FE]/20 hover:shadow-[#BC13FE]/40 transition-all"
                >
                  Advertise Here
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}