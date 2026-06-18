import { useState } from "react";
import { MapPin, ShieldAlert, Ban, AlertTriangle, CheckCircle, Lock, Clock, Info } from "lucide-react";
import { guideZones, prohibitedItems, safetyCode } from "@/data/guideZones";
import type { RiskLevel } from "@/types";

const riskStyles: Record<RiskLevel, { label: string; dot: string; border: string; bg: string; text: string; icon: typeof CheckCircle }> = {
  safe: {
    label: "安全开放",
    dot: "bg-safe",
    border: "border-safe",
    bg: "bg-safe/15",
    text: "text-safe-light",
    icon: CheckCircle,
  },
  caution: {
    label: "注意安全",
    dot: "bg-caution",
    border: "border-caution",
    bg: "bg-caution/15",
    text: "text-caution-light",
    icon: AlertTriangle,
  },
  danger: {
    label: "危险区域",
    dot: "bg-danger",
    border: "border-danger",
    bg: "bg-danger/20",
    text: "text-danger-light",
    icon: ShieldAlert,
  },
  restricted: {
    label: "限制进入",
    dot: "bg-slate_blue",
    border: "border-slate_blue",
    bg: "bg-slate_blue/20",
    text: "text-slate_blue-light",
    icon: Lock,
  },
};

export default function VisitGuide() {
  const [activeZone, setActiveZone] = useState<string | null>(guideZones[0]?.id || null);
  const active = guideZones.find((z) => z.id === activeZone);

  return (
    <section id="guide" className="relative py-24 lg:py-32 bg-charcoal-dark overflow-hidden">
      <span className="section-number left-0 top-0 lg:left-4">05</span>
      <div className="absolute top-0 left-0 right-0 h-2 danger-stripes-red" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="tldr-badge border-danger text-danger">SECTION 05</span>
            <span className="font-mono text-xs text-slate_blue tracking-widest">/ VISIT GUIDE & SAFETY</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl tracking-widest text-lamp_white uppercase mb-4">
            参观<span className="text-danger">指南</span>
          </h2>
          <p className="max-w-2xl font-body text-base lg:text-lg text-slate_blue-light leading-relaxed border-l-4 border-danger pl-6">
            工业遗产不是主题乐园。<span className="text-danger font-semibold">部分区域仍有真实风险</span>——
            采空沉陷、瓦斯残余、年久失修的建筑结构。请严格按照规划路线参观，
            安全边界是用血的教训画出来的，不是用来跨越的。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-[600px] relative border-4 border-iron bg-charcoal-light overflow-hidden industrial-border">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 paper-grain opacity-30" />

              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                <div className="stamp-label border-rust text-rust bg-charcoal-dark/80">
                  遗产公园平面图 / MAP #01
                </div>
                <div className="font-mono text-[10px] text-slate_blue">
                  比例尺 1 : 800 · 上北下南
                </div>
              </div>

              <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 bg-charcoal-dark/80 backdrop-blur-sm p-3 border border-iron">
                <div className="font-mono text-[10px] text-slate_blue tracking-wider uppercase mb-1 border-b border-iron pb-1">
                  图例 / LEGEND
                </div>
                {(Object.keys(riskStyles) as RiskLevel[]).map((level) => {
                  const s = riskStyles[level];
                  const Icon = s.icon;
                  return (
                    <div key={level} className="flex items-center gap-2 text-[11px]">
                      <div className={`w-3 h-3 rounded-full ${s.dot} shadow-[0_0_6px_currentColor]`} />
                      <span className={s.text}>{s.label}</span>
                      <Icon className={`w-3 h-3 ${s.text}`} />
                    </div>
                  );
                })}
              </div>

              {guideZones.map((zone) => {
                const style = riskStyles[zone.riskLevel];
                const isActive = activeZone === zone.id;

                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone.id)}
                    className={`absolute transition-all duration-300 border-2 ${
                      isActive
                        ? `${style.border} ${style.bg} shadow-[0_0_20px_rgba(0,0,0,0.5)] scale-[1.02] z-10`
                        : `${style.border}/40 ${style.bg}/30 hover:${style.border} hover:${style.bg}/50`
                    }`}
                    style={{
                      top: zone.position.top,
                      left: zone.position.left,
                      width: zone.position.width,
                      height: zone.position.height,
                    }}
                  >
                    <div className={`absolute -top-2 -left-2 w-4 h-4 rounded-full ${style.dot} border-2 border-charcoal-dark shadow`} />
                    <div className="absolute inset-0 flex items-center justify-center p-2">
                      <span className={`font-mono text-[10px] lg:text-xs ${style.text} uppercase text-center leading-tight ${!zone.isOpen ? "line-through opacity-60" : ""}`}>
                        {zone.name}
                      </span>
                    </div>
                    {!zone.isOpen && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Ban className={`w-12 h-12 lg:w-16 lg:h-16 ${style.text} opacity-40`} />
                      </div>
                    )}
                    {isActive && (
                      <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-${zone.riskLevel === 'safe' ? 'safe' : zone.riskLevel === 'caution' ? 'caution' : zone.riskLevel === 'danger' ? 'danger' : 'slate_blue'}`} />
                    )}
                  </button>
                );
              })}

              <svg className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-12 opacity-60" viewBox="0 0 128 48">
                <line x1="4" y1="40" x2="124" y2="40" stroke="#5a5a5a" strokeWidth="2" />
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <line key={i} x1={4 + i * 20} y1="40" x2={4 + i * 20} y2="24" stroke="#5a5a5a" strokeWidth="1" />
                ))}
                <text x="4" y="20" fill="#9ca3af" fontSize="8" fontFamily="monospace">0</text>
                <text x="108" y="20" fill="#9ca3af" fontSize="8" fontFamily="monospace">500m</text>
                <polygon points="4,12 10,8 10,16" fill="#9ca3af" />
                <text x="14" y="14" fill="#9ca3af" fontSize="7" fontFamily="monospace">N</text>
              </svg>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {active && (
              <div className={`p-6 border-2 ${riskStyles[active.riskLevel].border} ${riskStyles[active.riskLevel].bg}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`inline-flex items-center gap-2 stamp-label ${riskStyles[active.riskLevel].text} border-current mb-2`}>
                      {(() => {
                        const Icon = riskStyles[active.riskLevel].icon;
                        return <Icon className="w-3 h-3" />;
                      })()}
                      {riskStyles[active.riskLevel].label}
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl tracking-wider text-lamp_white uppercase">
                      {active.name}
                    </h3>
                  </div>
                  <div className={`w-14 h-14 rounded-full border-4 ${riskStyles[active.riskLevel].border} flex items-center justify-center ${riskStyles[active.riskLevel].bg}`}>
                    <MapPin className={`w-6 h-6 ${riskStyles[active.riskLevel].text}`} />
                  </div>
                </div>

                <div className="space-y-3">
                  {active.openingHours && (
                    <div className="flex items-center gap-3 border-b border-iron/30 pb-2">
                      <Clock className={`w-4 h-4 ${riskStyles[active.riskLevel].text} shrink-0`} />
                      <div>
                        <div className="font-mono text-[10px] text-slate_blue tracking-wider uppercase">开放时段</div>
                        <div className={`font-body text-sm ${active.isOpen ? "text-lamp_white" : "text-danger line-through"}`}>
                          {active.openingHours}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Info className={`w-4 h-4 ${riskStyles[active.riskLevel].text} shrink-0 mt-0.5`} />
                    <div>
                      <div className="font-mono text-[10px] text-slate_blue tracking-wider uppercase mb-1">注意事项</div>
                      <ul className="space-y-1">
                        {active.notes.map((note, i) => (
                          <li key={i} className="font-body text-sm text-slate_blue-light flex gap-2">
                            <span className={riskStyles[active.riskLevel].text}>·</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="p-6 border-2 border-danger bg-danger/10">
              <div className="flex items-center gap-2 mb-4">
                <Ban className="w-5 h-5 text-danger" />
                <h3 className="font-display text-xl tracking-widest text-danger uppercase">
                  违禁物品清单
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {prohibitedItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm font-body text-slate_blue-light">
                    <span className="text-danger shrink-0 mt-0.5">✕</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-2 border-caution bg-caution/5">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="w-5 h-5 text-caution" />
                <h3 className="font-display text-xl tracking-widest text-caution uppercase">
                  参观者安全守则
                </h3>
              </div>
              <ol className="space-y-2">
                {safetyCode.map((code, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-sm text-slate_blue-light">
                    <span className="w-5 h-5 shrink-0 border border-caution text-caution font-mono text-[11px] flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{code}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
