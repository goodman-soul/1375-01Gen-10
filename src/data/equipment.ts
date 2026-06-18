import type { Equipment } from "@/types";

export const equipmentList: Equipment[] = [
  {
    id: "eq-001",
    name: " carbide矿灯",
    serialNumber: "KD-1903-0427",
    era: "1903-1955",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20miner%20carbide%20lamp%20brass%20aging%20patina%20rust%20dark%20industrial%20background%20black%20and%20white%20photography%20archive&image_size=square_hd",
    description:
      "乙炔灯，俗称\"电石灯\"。顶部加水仓通过滴水与底部电石反应产生可燃气体，经金属网罩燃烧照明。灯体黄铜铸造，因井下碰撞常留有凹痕与焊补痕迹。照明范围不足3米，且遇瓦斯极易引爆。",
    linkedStoryId: "story-001",
  },
  {
    id: "eq-002",
    name: "蓄电池安全矿灯",
    serialNumber: "KD-1956-18392",
    era: "1956-1988",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old%20rechargeable%20miner%20safety%20lamp%20battery%20operated%20steel%20casing%20rubber%20cracked%20worn%20industrial%20dark%20moody%20photography&image_size=square_hd",
    description:
      "公私合营后首批推广的安全型矿灯。铅酸蓄电池重约2.8公斤，连续照明不超过11小时。充电需在矿灯房集中管理，每灯编号对应矿工铭牌。灯锁设计防止井下随意拆卸引发电火花。",
    linkedStoryId: "story-002",
  },
  {
    id: "eq-003",
    name: "手摇发爆器",
    serialNumber: "FB-1962-00741",
    era: "1962-1991",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20mining%20blasting%20machine%20detonator%20plunger%20rusty%20metal%20box%20industrial%20dark%20background%20dramatic%20lighting&image_size=square_hd",
    description:
      "俗称\"炮机\"，永磁式发电机通过手摇飞轮瞬间产生高压电流引爆电雷管。外壳为铸铁密封，内附毫秒延期开关。使用前需由持证放炮员登记领取，当班剩余雷管必须退库，严禁私自带出。",
    linkedStoryId: "story-003",
  },
  {
    id: "eq-004",
    name: "风镐（凿岩机）",
    serialNumber: "FG-1970-05183",
    era: "1970-1998",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pneumatic%20jackhammer%20mining%20rock%20drill%20steel%20rusted%20heavy%20machinery%20dark%20industrial%20warehouse%20lighting&image_size=square_hd",
    description:
      "压缩空气驱动的手持式凿岩设备，单机重约17公斤。工作时噪音超过120分贝，长期操作者多数患上永久性听力损伤。镐钎为高碳钢锻造，因频繁冲击断裂，每月平均消耗钎头3-5根。",
    linkedStoryId: "story-004",
  },
  {
    id: "eq-005",
    name: "1.2吨窄轨矿车",
    serialNumber: "KC-1952-03347",
    era: "1952-2001",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=small%20rail%20mine%20cart%20tipper%20wagon%20rusty%20iron%20weathered%20old%20mining%20equipment%20dark%20dramatic%20moody&image_size=square_hd",
    description:
      "翻斗式窄轨矿车，轨距600毫米，额定载重1.2吨。铸铁车轮无减震弹簧，在钢轨接缝处剧烈颠簸，满载煤块时常有倾覆事故。矿车侧面编号为白漆喷涂，因锈蚀与碰撞需每年重新刷号。",
    linkedStoryId: "story-005",
  },
  {
    id: "eq-006",
    name: "瓦斯检定器",
    serialNumber: "WJ-1978-00215",
    era: "1978-1995",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20gas%20detector%20interferometer%20methane%20tester%20brass%20glass%20tube%20mining%20safety%20equipment%20dark%20background&image_size=square_hd",
    description:
      "光学干涉式瓦斯检测仪，利用甲烷与空气折射率差异测定浓度。测量精度0.01%，但对操作手法要求极高，需定期在灯房用标准气样校正。瓦检员每班携带此设备巡查各工作面，记录数据填入瓦斯日志。",
    linkedStoryId: "story-006",
  },
];
