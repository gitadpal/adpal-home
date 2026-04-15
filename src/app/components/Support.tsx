import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Support() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.onload = () => {
      (window as any).jotformEmbedHandler?.(
        "iframe[id='JotFormIFrame-261043363260043']",
        "https://form.jotform.com/"
      );
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#0A0A0A]">
      <Helmet>
        <title>Support | AdPal</title>
        <meta name="description" content="Get help and submit feedback for AdPal." />
      </Helmet>

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
          <h1 className="text-4xl font-bold text-white mb-4 font-[Space_Grotesk]">
            Support & Feedback
          </h1>
          <p className="text-white/60 mb-10">
            Have a question, issue, or suggestion? Fill out the form below and we'll get back to you.
          </p>

          <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            <iframe
              id="JotFormIFrame-261043363260043"
              title="iOS Support Feedback"
              onLoad={() => window.scrollTo(0, 0)}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/261043363260043"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: 539,
                border: "none",
              }}
              scrolling="no"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
