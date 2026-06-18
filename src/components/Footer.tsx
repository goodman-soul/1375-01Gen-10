import { BookOpen, Archive, GraduationCap, Mail, Heart, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-charcoal-dark border-t-4 border-rust overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 danger-stripes" />
      <div className="absolute inset-0 paper-grain opacity-30" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 lg:mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-rust flex items-center justify-center">
                <Archive className="w-6 h-6 text-rust" />
              </div>
              <div>
                <h3 className="font-display text-2xl lg:text-3xl tracking-widest text-lamp_white uppercase">
                  矿山工业遗产档案
                </h3>
                <p className="font-mono text-[11px] text-slate_blue tracking-wider mt-0.5">
                  MINING HERITAGE ARCHIVE · REG.NO.0427-B
                </p>
              </div>
            </div>

            <p className="font-body text-sm text-slate_blue-light leading-relaxed mb-6 border-l-2 border-iron pl-4">
              本页面所有历史资料、口述访谈、设备照片，均由矿山工业遗产保护基金会联合地方档案馆、
              矿工后代协会共同采集整理。任何单位或个人不得擅自篡改或商用。
              <br />
              <span className="text-rust">
                我们不美化劳动的危险，不回避人性的幽暗——这是对逝去生命的基本尊重。
              </span>
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="stamp-label text-caution border-caution text-[10px]">
                国家级工业遗产 · 2005年入选
              </span>
              <span className="stamp-label text-rust border-rust text-[10px]">
                省级文物保护单位
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-xl tracking-widest text-lamp_white uppercase mb-5 pb-2 border-b border-iron">
              资料来源
            </h4>
            <ul className="space-y-3">
              {[
                { icon: BookOpen, label: "矿务局档案（1898-2001）" },
                { icon: BookOpen, label: "省总工会工运史资料室" },
                { icon: Archive, label: "地方档案馆馆藏第37号全宗" },
                { icon: GraduationCap, label: "某大学矿业学院口述史课题组" },
              ].map((src) => (
                <li key={src.label} className="flex items-start gap-2 text-xs font-body text-slate_blue-light">
                  <src.icon className="w-3.5 h-3.5 text-rust shrink-0 mt-0.5" />
                  <span>{src.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display text-xl tracking-widest text-lamp_white uppercase mb-5 pb-2 border-b border-iron">
              联系我们
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rust shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[10px] text-slate_blue tracking-wider uppercase mb-0.5">
                    地址 / ADDRESS
                  </div>
                  <p className="font-body text-sm text-slate_blue-light">
                    遗产公园管理处 · 矿山路1号
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-rust shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[10px] text-slate_blue tracking-wider uppercase mb-0.5">
                    邮箱 / EMAIL
                  </div>
                  <p className="font-body text-sm text-slate_blue-light">
                    archive@mining-heritage.example
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-4 h-4 text-rust shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[10px] text-slate_blue tracking-wider uppercase mb-0.5">
                    志愿者 / VOLUNTEER
                  </div>
                  <p className="font-body text-sm text-slate_blue-light">
                    若您家中仍有矿工长辈的遗物、书信或口述线索，欢迎联系我们。
                    每一条线索，都在为后人照亮来时的路。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-iron/60 pt-8 archive-punch">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pl-12 pr-12">
            <div className="font-mono text-[11px] text-slate_blue tracking-wider">
              © {new Date().getFullYear()} MINING HERITAGE ARCHIVE · ALL RIGHTS RESERVED
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate_blue">
              <span>ICP备案号：XX-XXXXXXX号</span>
              <span className="w-1 h-1 rounded-full bg-iron" />
              <span>公安备案号：XXXXXXXXXXXXXX</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="font-mono text-[10px] text-slate_blue/60 tracking-[0.3em] uppercase">
              ── 谨以此页，献给每一个从井下归来、和没能归来的人 ──
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
