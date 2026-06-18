import { Train, TrendingUp, BarChart3 } from "lucide-react";
import { railwayRecords, railwayStations } from "@/data/railway";

const maxTonnage = Math.max(...railwayRecords.map((r) => r.annualTonnage));
const maxLength = Math.max(...railwayRecords.map((r) => r.lengthKm));

const statusStyles: Record<string, { label: string; cls: string }> = {
  active: { label: "● 现存运营", cls: "text-safe border-safe bg-safe/10" },
  preserved: { label: "■ 遗产保留", cls: "text-caution border-caution bg-caution/10" },
  demolished: { label: "✕ 已拆除", cls: "text-danger border-danger bg-danger/10" },
};

export default function RailwaySection() {
  return (
    <section id="railway" className="relative py-24 lg:py-32 bg-blueprint overflow-hidden paper-grain">
      <span className="section-number left-0 top-0 lg:left-8 text-slate_blue/20">03</span>
      <div className="absolute top-0 left-0 right-0 h-2 danger-stripes" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="tldr-badge border-slate_blue-light text-slate_blue-light">SECTION 03</span>
            <span className="font-mono text-xs text-slate_blue-light tracking-widest">/ RAILWAY TRANSPORT</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl tracking-widest text-lamp_white uppercase mb-4">
            运输<span className="text-caution">轨道</span>
          </h2>
          <p className="max-w-2xl font-body text-base lg:text-lg text-slate_blue-light leading-relaxed border-l-4 border-caution pl-6">
            窄轨600毫米，全长鼎盛时28.1公里。
            每一根枕木下都垫着旷工的血汗——冬季轨道结冰时，小火车脱轨是家常便饭。
            运量最高的1985年，全年运出452.6万吨原煤，平均每秒就有14公斤煤从这条线运往国铁。
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Train className="w-6 h-6 text-caution" />
            <h3 className="font-display text-2xl lg:text-3xl tracking-widest text-lamp_white uppercase">
              线路站点一览
            </h3>
          </div>

          <div className="relative industrial-border bg-charcoal-dark/60 backdrop-blur-sm p-6 lg:p-10">
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-[6px] bg-iron -translate-y-1/2">
              <div className="absolute inset-y-0 left-0 bg-caution/30" style={{ width: `${(12.8 / 12.8) * 100}%` }} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-3">
              {railwayStations.map((st) => {
                const leftPos = `${(st.distanceKm / 12.8) * 100}%`;
                const style = statusStyles[st.status];

                return (
                  <div
                    key={st.id}
                    className="relative lg:absolute lg:w-[15%] lg:-translate-x-1/2"
                    style={{ ...({} as any), ...(typeof window !== "undefined" && window.innerWidth >= 1024 ? { position: "absolute", left: leftPos, top: "50%", transform: "translate(-50%, -50%)", width: "15%" } : {}) }}
                  >
                    <div className="lg:hidden relative">
                      <div className="absolute left-2 top-0 bottom-0 w-1 bg-iron" />
                      <div className="absolute left-0 top-4 w-5 h-5 rounded-full border-4 border-charcoal-dark bg-caution z-10" />
                    </div>

                    <div className="hidden lg:flex justify-center mb-2">
                      <div className="w-5 h-5 rounded-full border-4 border-blueprint bg-caution z-10 shadow-[0_0_20px_rgba(201,162,39,0.3)]" />
                    </div>

                    <div className="ml-10 lg:ml-0 lg:text-center p-4 border border-iron/60 bg-charcoal-dark/80 hover:border-caution transition-colors">
                      <div className="flex lg:justify-center items-center gap-2 mb-2">
                        <span className="font-mono text-xs text-caution">
                          {st.distanceKm.toFixed(1)}KM
                        </span>
                        <span className={`stamp-label text-[10px] ${style.cls}`}>
                          {style.label}
                        </span>
                      </div>
                      <h4 className="font-display text-lg tracking-wider text-lamp_white uppercase mb-1">
                        {st.name}
                      </h4>
                      <div className="font-mono text-[11px] text-slate_blue mb-2">
                        建站 {st.yearBuilt}
                      </div>
                      <p className="font-body text-xs text-slate_blue-light leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 lg:p-8 border-2 border-iron bg-charcoal-dark/60">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-rust" />
              <h3 className="font-display text-xl lg:text-2xl tracking-widest text-lamp_white uppercase">
                轨道里程（公里）
              </h3>
            </div>
            <div className="space-y-3">
              {railwayRecords
                .filter((_, i) => i % 2 === 0)
                .map((r) => (
                  <div key={r.year} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate_blue w-12 shrink-0">{r.year}</span>
                    <div className="flex-1 h-5 bg-charcoal relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-rust to-rust-light transition-all duration-500"
                        style={{ width: `${(r.lengthKm / maxLength) * 100}%` }}
                      />
                    </div>
                    <span className="font-mono text-xs text-lamp_white w-16 shrink-0 text-right">
                      {r.lengthKm.toFixed(1)} km
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className="p-6 lg:p-8 border-2 border-iron bg-charcoal-dark/60">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-caution" />
              <h3 className="font-display text-xl lg:text-2xl tracking-widest text-lamp_white uppercase">
                年运量（万吨）
              </h3>
            </div>
            <div className="flex items-end justify-between gap-1 h-48 border-b-2 border-l-2 border-iron/50 pl-2 pb-2">
              {railwayRecords
                .filter((_, i) => i % 2 === 0)
                .map((r) => {
                  const h = `${(r.annualTonnage / maxTonnage) * 100}%`;
                  return (
                    <div key={r.year} className="flex-1 flex flex-col items-center gap-1 group">
                      <span className="font-mono text-[9px] text-caution opacity-0 group-hover:opacity-100 transition-opacity">
                        {r.annualTonnage}
                      </span>
                      <div
                        className="w-full bg-gradient-to-t from-caution to-caution-light group-hover:brightness-125 transition-all"
                        style={{ height: h, minHeight: 4 }}
                        title={`${r.year}: ${r.annualTonnage}万吨`}
                      />
                      <span className="font-mono text-[9px] text-slate_blue">{r.year.slice(-2)}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
