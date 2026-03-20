import { motion, AnimatePresence } from "motion/react";
import {
  Zap,
  Coins,
  ShieldCheck,
  BatteryCharging,
  X,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { useState, useRef } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "./ui/utils";
import hardwareWhite from "@/assets/c6876f280fe9d4ba3783bc52cb7f9ebb62dde0b9.png";
import hardwareBlack from "@/assets/iphone-case-black.png";
import hardwareOrange from "@/assets/iphone-case-orange.png";

type CaseColor = "white" | "black" | "orange";

const caseImages: Record<CaseColor, string> = {
  white: hardwareWhite,
  black: hardwareBlack,
  orange: hardwareOrange,
};

const caseColors: { value: CaseColor; label: string; hex: string; ring: string }[] = [
  { value: "white", label: "White", hex: "#F5F5F5", ring: "ring-white/60" },
  { value: "black", label: "Black", hex: "#1A1A1A", ring: "ring-[#00FFC2]/60" },
  { value: "orange", label: "Orange", hex: "#FF6B00", ring: "ring-[#FF6B00]/60" },
];

const allModels = [
  "iPhone 17 Pro Max",
  "iPhone 17 Pro",
  "iPhone 17",
  "iPhone 16 Pro Max",
  "iPhone 16 Pro",
  "iPhone 16",
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "iPhone 15",
  "iPhone 14 Pro Max",
  "iPhone 14 Pro",
  "iPhone 14",
  "iPhone 13 Pro Max",
  "iPhone 13 Pro",
  "iPhone 13",
];

const sellingPoints = [
  { icon: Coins, label: "Earn Crypto" },
  { icon: ShieldCheck, label: "Verifiable Display" },
  { icon: BatteryCharging, label: "Battery Free" },
];

const inputClasses =
  "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[#00FFC2] focus-visible:ring-[#00FFC2]/20 rounded-xl h-12";

export function PreOrder() {
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<CaseColor>("white");
  const [showForm, setShowForm] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const hardwareImage = caseImages[selectedColor];

  const handleReserve = () => {
    setShowForm(true);
    // Scroll to form after it renders
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

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
          {/* ─── Product Hero ─── */}
          <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            {/* Left column — Product info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2.5 mb-8"
              >
                <Zap className="w-4 h-4 text-[#00FFC2]" />
                <span className="font-['Inter'] text-sm font-semibold text-white">
                  Pre-Order
                </span>
              </motion.div>

              <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[0.95]">
                AdPal
                <span className="block mt-2 bg-gradient-to-r from-[#00FFC2] via-[#60EFFF] to-[#BC13FE] bg-clip-text text-transparent">
                  E-Ink Case
                </span>
              </h1>

              <p className="font-['Inter'] text-lg text-white/80 max-w-xl leading-relaxed mb-8">
                The premium phone case with a built-in e-ink display that earns
                you cryptocurrency. Display brand campaigns, get paid — all
                without draining your phone battery.
              </p>

              <div className="font-['Space_Grotesk'] text-5xl font-bold text-white mb-10">
                $149
                <span className="text-lg font-normal text-white/50 ml-3">
                  USD
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-10">
                {sellingPoints.map((point, i) => (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00FFC2]/10 border border-[#00FFC2]/20">
                      <point.icon className="w-5 h-5 text-[#00FFC2]" />
                    </div>
                    <span className="font-['Inter'] text-sm font-medium text-white/90">
                      {point.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Color selector */}
              <div className="mb-10">
                <span className="font-['Inter'] text-sm font-medium text-white/70 mb-3 block">
                  Color
                </span>
                <div className="flex items-center gap-3">
                  {caseColors.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => setSelectedColor(color.value)}
                      className={cn(
                        "w-10 h-10 rounded-full ring-2 ring-offset-2 ring-offset-[#1A1A1A] transition-all",
                        selectedColor === color.value
                          ? color.ring
                          : "ring-transparent hover:ring-white/20"
                      )}
                      style={{ backgroundColor: color.hex }}
                      aria-label={color.label}
                    />
                  ))}
                  <span className="font-['Inter'] text-sm text-white/50 ml-2">
                    {caseColors.find((c) => c.value === selectedColor)?.label}
                  </span>
                </div>
              </div>

              {/* Model selector + Reserve CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Custom dropdown */}
                <div className="relative flex-1 sm:max-w-[240px]">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={cn(
                      "w-full flex items-center justify-between rounded-xl border px-4 h-14 transition-all font-['Inter'] text-sm",
                      selectedModel
                        ? "border-white/20 bg-white/5 text-white"
                        : "border-white/10 bg-white/5 text-white/40"
                    )}
                  >
                    {selectedModel || "Select model"}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-white/40 transition-transform",
                        dropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-white/10 bg-[#2C2C2C] backdrop-blur-xl shadow-2xl z-50 max-h-64 overflow-y-auto"
                      >
                        {allModels.map((model) => (
                          <button
                            key={model}
                            type="button"
                            onClick={() => {
                              setSelectedModel(model);
                              setDropdownOpen(false);
                            }}
                            className={cn(
                              "w-full text-left px-4 py-3 font-['Inter'] text-sm transition-colors",
                              selectedModel === model
                                ? "text-[#00FFC2] bg-[#00FFC2]/10"
                                : "text-white/80 hover:bg-white/10"
                            )}
                          >
                            {model}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="button"
                  onClick={handleReserve}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#00FFC2] to-[#00E5AD] px-8 h-14 font-['Inter'] text-base font-bold text-[#1A1A1A] shadow-2xl shadow-[#00FFC2]/30 transition-all hover:shadow-[#00FFC2]/50 flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center gap-2">
                    <Zap className="w-4 h-4" fill="currentColor" />
                    Reserve Now
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right column — Product image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative lg:ml-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC2]/30 to-[#BC13FE]/30 rounded-[3rem] blur-3xl transform rotate-6" />

              <div className="relative rounded-[2.5rem] bg-white/15 backdrop-blur-xl border border-white/30 p-8 shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={hardwareImage}
                    alt="AdPal E-ink iPhone Case"
                    className="w-full max-w-md mx-auto drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* ─── Reservation Form (revealed on Reserve click) ─── */}
          <AnimatePresence>
            {showForm && (
              <motion.section
                ref={formRef}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg mx-auto mb-24"
              >
                <div className="relative rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 shadow-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#00FFC2]/10 via-transparent to-[#BC13FE]/10 rounded-[2.2rem] blur-xl -z-10" />

                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                      Reserve Your Case
                    </h2>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="text-white/40 hover:text-white/70 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {(selectedModel || selectedColor) && (
                    <div className="rounded-xl border border-[#00FFC2]/20 bg-[#00FFC2]/5 px-4 py-3 mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full border border-white/20"
                          style={{
                            backgroundColor:
                              caseColors.find((c) => c.value === selectedColor)
                                ?.hex,
                          }}
                        />
                        <span className="font-['Inter'] text-sm text-white">
                          {[
                            caseColors.find((c) => c.value === selectedColor)
                              ?.label,
                            selectedModel,
                          ]
                            .filter(Boolean)
                            .join(" · ")}
                        </span>
                      </div>
                      {selectedModel && (
                        <button
                          type="button"
                          onClick={() => setSelectedModel("")}
                          className="font-['Inter'] text-xs text-white/40 hover:text-white/70 transition-colors"
                        >
                          Change
                        </button>
                      )}
                    </div>
                  )}

                  <p className="font-['Inter'] text-sm text-white/50 mb-6">
                    Leave your email and we'll notify you when it's ready to
                    ship. No payment required today.
                  </p>

                  <AnimatePresence mode="wait">
                    {!reserved ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        onSubmit={(e) => {
                          e.preventDefault();
                          setReserved(true);
                        }}
                        className="space-y-5"
                      >
                        <div className="space-y-2">
                          <Label className="font-['Inter'] text-sm font-medium text-white/90">
                            Email Address{" "}
                            <span className="text-[#00FFC2]">*</span>
                          </Label>
                          <Input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className={inputClasses}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="font-['Inter'] text-sm font-medium text-white/90">
                              First Name
                            </Label>
                            <Input
                              placeholder="John"
                              className={inputClasses}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="font-['Inter'] text-sm font-medium text-white/90">
                              Last Name
                            </Label>
                            <Input
                              placeholder="Doe"
                              className={inputClasses}
                            />
                          </div>
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#00FFC2] to-[#00E5AD] px-10 py-4 font-['Inter'] text-base font-bold text-[#1A1A1A] shadow-2xl shadow-[#00FFC2]/30 transition-all hover:shadow-[#00FFC2]/50 flex items-center justify-center gap-3 mt-2"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          <span className="relative flex items-center justify-center gap-2">
                            <Zap className="w-4 h-4" fill="currentColor" />
                            Confirm Reservation
                          </span>
                        </motion.button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        className="flex flex-col items-center text-center py-6"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                            delay: 0.1,
                          }}
                          className="w-16 h-16 rounded-full bg-[#00FFC2]/20 border border-[#00FFC2]/30 flex items-center justify-center mb-5"
                        >
                          <CheckCircle2 className="w-8 h-8 text-[#00FFC2]" />
                        </motion.div>

                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2"
                        >
                          You're In!
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="font-['Inter'] text-sm text-white/60 max-w-xs"
                        >
                          Your reservation is confirmed. We'll email you as soon
                          as the AdPal Case is ready to ship.
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
