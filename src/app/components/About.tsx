import { motion } from "motion/react";
import { Building2 } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function About() {
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
        <div className="mx-auto max-w-3xl px-6">
          {/* Header area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 mb-8"
            >
              <Building2 className="w-5 h-5 text-[#00FFC2]" />
              <span className="font-['Inter'] text-sm font-semibold text-white">
                About
              </span>
            </motion.div>

            <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Built by{" "}
              <span className="bg-gradient-to-r from-[#00FFC2] via-[#60EFFF] to-[#BC13FE] bg-clip-text text-transparent">
                BeeSpire
              </span>
            </h1>

            <p className="font-['Inter'] text-xl text-white/60 leading-relaxed">
              The company behind AdPal.
            </p>
          </motion.div>

          {/* Our Story */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="group mb-14"
          >
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-4">
              Our Story
            </h2>
            <p className="font-['Inter'] text-base text-white/70 leading-relaxed mb-4">
              BeeSpire (Hong Kong) Limited was founded with deep roots in two
              converging fields:{" "}
              <span className="hl">energy-efficient e-ink display technology</span>{" "}
              and{" "}
              <span className="hl">decentralized Web3 infrastructure</span>.
              We saw an opportunity where others saw idle surfaces — phone
              cases sitting in pockets, power banks on desks, digital frames
              on walls — all capable of doing more.
            </p>
            <p className="font-['Inter'] text-base text-white/70 leading-relaxed">
              That insight became AdPal: a platform that transforms everyday
              e-ink devices into micro digital billboards. Advertisers reach
              audiences in the physical world, and{" "}
              <span className="hl">device owners earn cryptocurrency in return</span>{" "}
              — no extra effort required. It's advertising that respects both
              the user and the environment.
            </p>
          </motion.section>

          {/* Why E-Ink */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="group mb-14"
          >
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-4">
              Why E-Ink
            </h2>
            <p className="font-['Inter'] text-base text-white/70 leading-relaxed">
              Traditional digital signage is power-hungry and expensive to
              operate. E-ink displays{" "}
              <span className="hl">consume energy only when the image changes</span>,
              making them one of the most eco-friendly screen technologies
              available. By building on e-ink, AdPal delivers advertising
              that's visible in direct sunlight, gentle on the eyes, and
              draws{" "}
              <span className="hl">near-zero standby power</span>. It's a
              greener alternative to the always-on screens that dominate
              today's ad landscape.
            </p>
          </motion.section>

          {/* Self-Sovereign Advertising */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="group mb-14"
          >
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-4">
              Self-Sovereign Advertising
            </h2>
            <p className="font-['Inter'] text-base text-white/70 leading-relaxed">
              Most advertising models treat users as the product.{" "}
              <span className="hl">AdPal flips that relationship</span>.
              Device owners choose to participate, control which categories
              of ads appear on their screens, and receive{" "}
              <span className="hl">transparent, on-chain compensation</span>{" "}
              for every impression served. There are no hidden data brokers,
              no opaque auction systems — just a direct value exchange
              between advertisers and the people who carry their message.
            </p>
          </motion.section>

          {/* Privacy First */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="group mb-14"
          >
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-4">
              Privacy First
            </h2>
            <p className="font-['Inter'] text-base text-white/70 leading-relaxed mb-4">
              Conventional digital advertising is built on surveillance —
              tracking cookies, device fingerprinting, and vast personal data
              profiles assembled without meaningful consent. AdPal takes a
              fundamentally different approach. Ads are delivered to physical
              screens based on device location and context,{" "}
              <span className="hl">not on who you are, what you browse, or what you buy</span>.
            </p>
            <p className="font-['Inter'] text-base text-white/70 leading-relaxed">
              <span className="hl">No personal data is collected, sold, or shared</span>{" "}
              with advertisers. There is no behavioral profiling, no
              cross-app tracking, and no third-party data marketplace running
              behind the scenes.{" "}
              <span className="hl">Your identity stays yours</span>. AdPal
              proves that effective advertising doesn't have to come at the
              cost of your privacy.
            </p>
          </motion.section>

          {/* Our Mission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="group"
          >
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="font-['Inter'] text-base text-white/70 leading-relaxed">
              We're working toward an advertising ecosystem that is{" "}
              <span className="hl">self-sovereign, eco-friendly, and fair</span>.
              One where users own their attention, advertisers reach real
              people in the real world, and the technology behind it all runs
              on energy-efficient hardware and transparent blockchain
              infrastructure. That's the future BeeSpire is building —{" "}
              <span className="hl">one screen at a time</span>.
            </p>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
