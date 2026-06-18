import { useState } from "react";
import { AlertTriangle, ChevronDown, ChevronUp, Skull, Factory } from "lucide-react";
import { mineHistoryEvents } from "@/data/mineHistory";

const severityLabels: Record<string, { label: string; color: string; icon: typeof AlertTriangle }> = {
  minor: { label: "一般事故", color: "text-caution border-caution bg-caution/10", icon: AlertTriangle },
  major: { label: "重大事故", color: "text-danger-light border-danger-light bg-danger/20", icon: AlertTriangle },
  catastrophic: { label: "特别重大", color: "text-danger border-danger bg-danger/30", icon: Skull },
};

export default function MineHistory() {
  const [expandedAccident, setExpandedAccident] = useState<string | null>("mh-002");

  return (
    <section id="mine-history" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden paper-grain">
      <span className="section-number -left-4 top-0 lg:-left-8">01</span>
      <div className="absolute top-0 left-0 right-0 h-1 danger-stripes" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="tldr-badge">SECTION 01</span>
            <span className="font-mono text-xs text-slate_blue tracking-widest">/ MINE HISTORY</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl tracking-widest text-lamp_white uppercase mb-4">
            矿井百年<span className="text-rust">沿革</span>
          </h2>
          <p className="max-w-2xl font-body text-base lg:text-lg text-slate_blue-light leading-relaxed border-l-4 border-rust pl-6">
            从清末德商破土动工，到21世纪入选国家工业遗产名录。
            这不是一部机器轰鸣的工业史诗，而是一条用生命铺就的巷道——每一次重大事故的死难者，每一次罢工抗争的领头人，
            都是这段历史不可抹去的注脚。
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rust via-rust/50 to-rust lg:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-20">
            {mineHistoryEvents.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              const isAccident = event.isAccident;
              const sev = event.severity ? severityLabels[event.severity] : null;
              const SevIcon = sev?.icon || Factory;

              return (
                <div
                  key={event.id}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                    isLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`${isLeft ? "lg:text-right lg:pr-16" : "lg:pl-16"} pl-12 lg:pl-0 relative`}>
                    <div
                      className={`absolute left-2 lg:left-auto ${
                        isLeft ? "lg:-right-[50%]" : "lg:-left-[50%]"
                      } top-4 lg:top-6 w-6 h-6 lg:w-8 lg:h-8 rounded-full border-4 border-charcoal z-10 flex items-center justify-center ${
                        isAccident ? "bg-danger" : "bg-rust"
                      } lg:-translate-x-1/2`}
                    >
                      <SevIcon className="w-3 h-3 lg:w-4 lg:h-4 text-lamp_white" strokeWidth={3} />
                    </div>

                    <div
                      className={`p-6 lg:p-8 border-2 transition-all duration-300 ${
                        isAccident
                          ? "border-danger/60 bg-danger/5 hover:border-danger"
                          : "border-iron bg-charcoal-light/50 hover:border-rust"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="font-display text-3xl lg:text-4xl text-rust tracking-wider">
                          {event.year}
                        </span>
                        {sev && (
                          <span className={`stamp-label ${sev.color}`}>
                            {sev.label}
                            {event.casualties ? ` · ${event.casualties}人遇难` : ""}
                          </span>
                        )}
                        <span className="font-mono text-xs text-slate_blue">#{String(idx + 1).padStart(3, "0")}</span>
                      </div>

                      <h3 className="font-body text-xl lg:text-2xl font-bold text-lamp_white mb-3">
                        {event.title}
                      </h3>

                      {isAccident && (
                        <button
                          onClick={() =>
                            setExpandedAccident(expandedAccident === event.id ? null : event.id)
                          }
                          className="flex items-center gap-2 text-xs font-mono text-danger-light mb-3 hover:text-danger transition-colors"
                        >
                          {expandedAccident === event.id ? (
                            <>收起详情 <ChevronUp className="w-3 h-3" /></>
                          ) : (
                            <>展开详情 <ChevronDown className="w-3 h-3" /></>
                          )}
                        </button>
                      )}

                      <p
                        className={`font-body text-sm lg:text-base text-slate_blue-light leading-relaxed ${
                          isAccident && expandedAccident !== event.id ? "line-clamp-2" : ""
                        }`}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className={`hidden lg:block ${isLeft ? "" : "lg:order-first"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
