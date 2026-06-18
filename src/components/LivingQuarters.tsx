import { Home, UtensilsCrossed, Bath, Stethoscope } from "lucide-react";
import { livingQuarterList } from "@/data/livingQuarters";

const categoryIcons: Record<string, typeof Home> = {
  dormitory: Home,
  canteen: UtensilsCrossed,
  bathhouse: Bath,
  clinic: Stethoscope,
};

const categoryLabels: Record<string, string> = {
  dormitory: "住宿区",
  canteen: "餐饮区",
  bathhouse: "洗浴区",
  clinic: "医疗区",
};

export default function LivingQuarters() {
  return (
    <section id="living-quarters" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      <span className="section-number -right-4 top-40 lg:-right-8">04</span>
      <div className="absolute inset-0 paper-grain opacity-50" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="tldr-badge">SECTION 04</span>
            <span className="font-mono text-xs text-slate_blue tracking-widest">/ LIVING QUARTERS</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl tracking-widest text-lamp_white uppercase mb-4">
            工人<span className="text-rust">生活区</span>
          </h2>
          <p className="max-w-2xl font-body text-base lg:text-lg text-slate_blue-light leading-relaxed border-l-4 border-rust pl-6">
            八小时三班倒之外的全部人生，都挤在这片方圆不到半公里的建筑群里。
            八人通铺的宿舍、玉米面窝头的食堂、飘着煤渣浮沫的澡堂、治不了矽肺的卫生所——
            这不是纪录片镜头，是真实的日常。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {livingQuarterList.map((lq, idx) => {
            const Icon = categoryIcons[lq.category];
            const isLeft = idx % 2 === 0;

            return (
              <article
                key={lq.id}
                className={`group relative industrial-border bg-charcoal-light/30 overflow-hidden ${
                  isLeft ? "lg:translate-y-8" : ""
                }`}
              >
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="w-10 h-10 border-2 border-rust bg-charcoal-dark flex items-center justify-center">
                    <Icon className="w-5 h-5 text-rust" />
                  </div>
                  <div>
                    <div className="stamp-label text-rust border-rust text-[10px]">
                      {categoryLabels[lq.category]}
                    </div>
                    <div className="font-mono text-[10px] text-slate_blue mt-0.5">#{lq.id.toUpperCase()}</div>
                  </div>
                </div>

                <div className="aspect-[4/3] relative overflow-hidden scanlines">
                  <img
                    src={lq.image}
                    alt={lq.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  <div className="absolute bottom-4 right-4">
                    <span className="stamp-label text-caution border-caution bg-charcoal-dark/80 backdrop-blur-sm">
                      实拍存档
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-8 border-t-2 border-iron">
                  <h3 className="font-display text-2xl lg:text-3xl tracking-wider text-lamp_white uppercase mb-4">
                    {lq.name}
                  </h3>

                  <p className="font-body text-sm lg:text-base text-slate_blue-light leading-relaxed mb-6 drop-cap">
                    {lq.description}
                  </p>

                  {lq.statistics && (
                    <div className="border-2 border-iron/60 bg-charcoal-dark/40 p-4">
                      <div className="font-mono text-[11px] text-slate_blue tracking-widest uppercase mb-3 border-b border-iron/50 pb-2">
                        ── 档案数据 / STATISTICS ──
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {Object.entries(lq.statistics).map(([k, v]) => (
                          <div key={k} className="flex justify-between border-b border-dashed border-iron/30 py-1 text-xs">
                            <span className="font-body text-slate_blue">{k}</span>
                            <span className="font-mono text-lamp_white">{String(v)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
