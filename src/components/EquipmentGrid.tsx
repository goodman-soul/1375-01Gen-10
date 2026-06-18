import { ArrowRight, Crosshair } from "lucide-react";
import { equipmentList } from "@/data/equipment";
import { useLinkage } from "@/context/LinkageContext";

export default function EquipmentGrid() {
  const { highlightedEquipmentId, scrollToStory } = useLinkage();

  return (
    <section id="equipment" className="relative py-24 lg:py-32 bg-charcoal-dark overflow-hidden">
      <span className="section-number -right-4 top-0 lg:-right-8">02</span>
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="tldr-badge">SECTION 02</span>
            <span className="font-mono text-xs text-slate_blue tracking-widest">/ EQUIPMENT ARCHIVE</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl tracking-widest text-lamp_white uppercase mb-4">
            矿灯与<span className="text-rust">设备</span>
          </h2>
          <p className="max-w-2xl font-body text-base lg:text-lg text-slate_blue-light leading-relaxed border-l-4 border-rust pl-6">
            每一件设备都有编号，每一个编号都对应着具体的人。
            <span className="text-caution">点击任意设备卡</span>，跳转至对应老矿工的口述故事段。
            这些铜铁物件不会说话，但使用它们的人会。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {equipmentList.map((eq, idx) => {
            const isHighlighted = highlightedEquipmentId === eq.id;

            return (
              <article
                id={`equipment-${eq.id}`}
                onClick={() => scrollToStory(eq.linkedStoryId)}
                className={`group relative industrial-border bg-charcoal cursor-pointer transition-all duration-500 ${
                  isHighlighted ? "animate-highlight-pulse scale-[1.02] border-rust" : "hover:-translate-y-2"
                }`}
              >
                <div className="absolute top-3 left-3 z-20">
                  <span className="stamp-label text-rust border-rust bg-charcoal/80 backdrop-blur-sm">
                    № {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-1 bg-caution/90 text-charcoal-dark font-mono text-[10px] tracking-wider">
                  <Crosshair className="w-3 h-3" />
                  STORY-{eq.linkedStoryId.replace("story-", "")}
                </div>

                <div className="aspect-square overflow-hidden relative scanlines">
                  <img
                    src={eq.image}
                    alt={eq.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-5 lg:p-6 border-t-2 border-iron">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3 className="font-display text-xl lg:text-2xl tracking-wider text-lamp_white uppercase">
                      {eq.name}
                    </h3>
                  </div>

                  <div className="mb-4 space-y-1 border-l-2 border-iron pl-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate_blue-light">
                      <span className="text-slate_blue">出厂编号</span>
                      <span className="text-rust">{eq.serialNumber}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate_blue-light">
                      <span className="text-slate_blue">服役年代</span>
                      <span className="text-caution">{eq.era}</span>
                    </div>
                  </div>

                  <p className="font-body text-sm text-slate_blue-light leading-relaxed line-clamp-3 mb-4">
                    {eq.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-mono text-rust group-hover:text-caution transition-colors">
                    <span>查看使用人叙述</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="absolute -bottom-1 -right-1 w-16 h-16 border-r-4 border-b-4 border-rust/40 group-hover:border-rust/80 transition-colors" />
                <div className="absolute -top-1 -left-1 w-16 h-16 border-l-4 border-t-4 border-rust/40 group-hover:border-rust/80 transition-colors" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
