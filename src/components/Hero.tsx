import { ChevronDown } from "lucide-react";

export default function Hero() {
  const subtitleText = "黑色岩层下的百年记忆 · 真实记录矿工群体的血汗与烟尘";

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dark%20underground%20coal%20mine%20tunnel%20entrance%20dramatic%20industrial%20black%20and%20white%20vintage%20photography%20moody%20atmosphere%20rails%20wooden%20beams&image_size=landscape_16_9')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/90 via-charcoal-dark/70 to-charcoal-dark" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 scanlines opacity-40" />
      <div className="paper-grain absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-16 lg:w-32 bg-gradient-to-r from-transparent to-rust" />
          <span className="font-mono text-xs lg:text-sm text-rust tracking-[0.3em] uppercase">
            Industrial Heritage · Doc#001
          </span>
          <div className="h-px w-16 lg:w-32 bg-gradient-to-l from-transparent to-rust" />
        </div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-widest text-lamp_white uppercase leading-none mb-4 lg:mb-6 text-shadow-heavy">
          <span className="block">矿山</span>
          <span className="block">工业遗产</span>
          <span className="block text-rust mt-2">档案</span>
        </h1>

        <div className="max-w-2xl mx-auto mb-12 lg:mb-16 overflow-hidden">
          <p
            className="font-mono text-sm lg:text-base text-slate_blue-light whitespace-nowrap animate-typewriter"
            style={{ width: 0, borderRight: "3px solid #c9a227", animation: "typewriter 3s steps(40) 0.5s forwards, blink 1s step-end infinite" }}
          >
            {subtitleText}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#mine-history"
            className="group relative px-8 py-4 border-2 border-rust text-lamp_white font-mono text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:text-charcoal-dark"
          >
            <span className="relative z-10">进入档案 · ENTER</span>
            <div className="absolute inset-0 bg-rust transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="#guide"
            className="group relative px-8 py-4 border-2 border-caution text-caution font-mono text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:text-charcoal-dark"
          >
            <span className="relative z-10">参观指南 · GUIDE</span>
            <div className="absolute inset-0 bg-caution transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "1898", label: "建矿年份" },
            { value: "127年", label: "历史跨度" },
            { value: "6位", label: "口述档案" },
            { value: "42件", label: "登记展品" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 border border-iron bg-charcoal/50 backdrop-blur-sm archive-punch">
              <div className="font-display text-3xl lg:text-4xl text-rust tracking-wider pl-8 pr-8">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] lg:text-xs text-slate_blue-light tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#mine-history"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate_blue-light hover:text-rust transition-colors group animate-bounce"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </a>

      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rust via-caution to-rust opacity-50 hidden lg:block" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-rust via-caution to-rust opacity-50 hidden lg:block" />
    </section>
  );
}
