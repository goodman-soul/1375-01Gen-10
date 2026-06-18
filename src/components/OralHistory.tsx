import { MessageSquare, Mic, ArrowLeft, User } from "lucide-react";
import { oralStories } from "@/data/oralStories";
import { equipmentList } from "@/data/equipment";
import { useLinkage } from "@/context/LinkageContext";

export default function OralHistory() {
  const { highlightedStoryId, scrollToEquipment } = useLinkage();

  const getEquipmentName = (id: string) =>
    equipmentList.find((e) => e.id === id)?.name || id;

  return (
    <section id="oral-history" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      <span className="section-number -right-4 top-0 lg:-right-8 text-rust/30">06</span>
      <div className="absolute inset-0 paper-grain opacity-40" />

      <div className="absolute top-20 left-10 hidden lg:block opacity-10">
        <MessageSquare className="w-64 h-64 text-rust" strokeWidth={0.5} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="tldr-badge">SECTION 06</span>
            <span className="font-mono text-xs text-slate_blue tracking-widest">/ ORAL HISTORY ARCHIVE</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl tracking-widest text-lamp_white uppercase mb-4">
            口述<span className="text-rust">故事</span>
          </h2>
          <p className="max-w-2xl font-body text-base lg:text-lg text-slate_blue-light leading-relaxed border-l-4 border-rust pl-6">
            以下文字来自1987年—2021年间对退休矿工及家属的37份录音访谈，
            经口述人授权整理发表。<span className="text-rust">文内提及的设备可点击缩略图跳转查看实物照片</span>。
            我们不做任何文学化润色——这些话怎么说的，就怎么写。
          </p>
        </div>

        <div className="space-y-10 lg:space-y-16">
          {oralStories.map((story, idx) => {
            const isHighlighted = highlightedStoryId === story.id;
            const isFirst = idx === 0;

            return (
              <article
                id={`story-${story.id}`}
                className={`relative lg:grid lg:grid-cols-12 lg:gap-12 border-l-4 transition-all duration-500 ${
                  isHighlighted
                    ? "animate-highlight-pulse border-rust bg-rust/5 pl-6 lg:pl-8"
                    : "border-iron pl-6 lg:pl-8"
                }`}
              >
                <div className="lg:col-span-5 relative mb-6 lg:mb-0">
                  <div className="sticky top-28">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-rust tracking-widest">
                        访谈 #{String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-iron/50" />
                      <Mic className="w-4 h-4 text-rust" />
                    </div>

                    <div
                      onClick={() => scrollToEquipment(story.linkedEquipmentIds[0])}
                      className="group relative aspect-square cursor-pointer industrial-border overflow-hidden mb-4"
                    >
                      <img
                        src={story.thumbnail}
                        alt={getEquipmentName(story.linkedEquipmentIds[0])}
                        className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4 text-caution shrink-0 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-[11px] text-caution tracking-wider">
                          点击查看设备实物 →
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="stamp-label text-caution border-caution bg-charcoal-dark/80">
                          {getEquipmentName(story.linkedEquipmentIds[0])}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 border-2 border-iron bg-charcoal-dark/60">
                      <div className="flex items-center gap-3 mb-3 pb-3 border-b border-iron/50">
                        <div className="w-12 h-12 rounded-full bg-rust/20 border-2 border-rust flex items-center justify-center shrink-0">
                          <User className="w-6 h-6 text-rust" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg tracking-wider text-lamp_white uppercase">
                            {story.speakerName}
                          </h3>
                          <p className="font-mono text-[11px] text-slate_blue">
                            {story.speakerRole}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-1.5 text-slate_blue-light">
                          <span className="text-rust">年代</span>
                          <span>{story.era}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate_blue">关联设备:</span>
                          {story.linkedEquipmentIds.map((eid) => (
                            <button
                              key={eid}
                              onClick={() => scrollToEquipment(eid)}
                              className="text-caution hover:text-caution-light underline underline-offset-2"
                            >
                              #{equipmentList.findIndex((e) => e.id === eid) + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="font-mono text-[10px] text-slate_blue tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span>访谈文字记录 / TRANSCRIPT</span>
                    <span className="h-px flex-1 bg-iron/30" />
                    <span>WORD COUNT: {story.text.length}</span>
                  </div>

                  <div className="relative p-6 lg:p-8 border-2 border-iron bg-charcoal-light/30">
                    <div className="absolute top-2 right-2 flex items-center gap-1 opacity-40">
                      <span className="font-mono text-[10px] text-slate_blue">档案钉</span>
                      <div className="w-3 h-3 rounded-full bg-iron border border-iron-light" />
                    </div>
                    <div className="absolute top-2 right-10 opacity-40">
                      <div className="w-3 h-3 rounded-full bg-iron border border-iron-light" />
                    </div>

                    <blockquote
                      className={`font-body text-base lg:text-lg text-lamp_white leading-loose lg:leading-loose ${isFirst ? "drop-cap" : ""}`}
                      style={{ textIndent: isFirst ? 0 : "2em" }}
                    >
                      {story.text.split(/(?<=。|？|！|……)/).map((sentence, sIdx) => {
                        const hasEquipRef = /矿灯|电石灯|蓄电池|发爆器|炮机|风镐|凿岩|矿车|瓦斯|检定器/i.test(sentence);
                        return (
                          <span
                            key={sIdx}
                            className={`${hasEquipRef ? "text-caution-light border-b border-dotted border-caution/50 cursor-help" : ""}`}
                            title={hasEquipRef ? "此句提及相关设备，查看左侧卡片" : undefined}
                          >
                            {sentence}
                          </span>
                        );
                      })}
                    </blockquote>

                    <footer className="mt-6 pt-4 border-t-2 border-dashed border-iron/50 flex items-center justify-between flex-wrap gap-2">
                      <div className="font-mono text-[10px] text-slate_blue tracking-wider">
                        ── 口述人签字确认 / WITNESSED ──
                      </div>
                      <div className="font-mono text-[10px] text-slate_blue tracking-wider">
                        STORY-ID: {story.id.toUpperCase()}
                      </div>
                    </footer>
                  </div>

                  {idx < oralStories.length - 1 && (
                    <div className="hidden lg:flex items-center gap-4 mt-8 pl-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-rust/50 to-transparent" />
                      <span className="font-display text-2xl text-rust/30 tracking-[0.3em]">
                        §
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-l from-rust/50 to-transparent" />
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
