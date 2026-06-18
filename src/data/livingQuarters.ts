import type { LivingQuarterData } from "@/types";

export const livingQuarterList: LivingQuarterData[] = [
  {
    id: "lq-001",
    category: "dormitory",
    name: "甲栋工人宿舍",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old%20mining%20workers%20dormitory%20brick%20building%20weathered%20concrete%20balcony%201950s%20architecture%20moody%20overcast%20sky&image_size=landscape_4_3",
    description:
      "砖木结构二层楼，1953年建，共48间房。标准配置为每间8张双层铁床，实际入住常达14-16人（三班轮换共用床位）。冬季室内仅设一个铸铁煤炉，烟道时常堵塞，煤气中毒每年冬季都有发生。",
    statistics: {
      "建筑年份": "1953年",
      "房间总数": "48间",
      "设计入住": "384人",
      "实际峰值": "760人",
      "人均面积": "1.8㎡",
    },
  },
  {
    id: "lq-002",
    category: "canteen",
    name: "职工大食堂",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old%20factory%20canteen%20interior%20chairs%20tables%20steam%20tray%20communal%20dining%20hall%20vintage%20socialist%20architecture&image_size=landscape_4_3",
    description:
      "1958年大跃进时期修建，钢屋架单层大跨度结构，可同时容纳800人就餐。无空调设施，夏季室内温度常超40度。主食以玉米面窝头和高粱米饭为主，肉菜仅礼拜三与礼拜天供应，凭票购买。",
    statistics: {
      "营业年份": "1958-2002",
      "同时就餐": "800人",
      "日均餐次": "2400份",
      "月伙食费": "8.4元（1965年）",
      "细粮比例": "不足三成",
    },
  },
  {
    id: "lq-003",
    category: "bathhouse",
    name: "工人大澡堂",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old%20industrial%20public%20bathhouse%20concrete%20pools%20showers%20steam%20miners%20washing%20dirty%20gritty%20interior&image_size=landscape_4_3",
    description:
      "每日三班轮换洗浴，每班限时40分钟。大池水温常年维持42度以上，因换水频率低，水面常漂浮一层煤粉与油污。淋浴喷头仅16个，多数工人只能挤在大池中。冬季更衣室无暖气，披着湿毛巾冻得打颤是常态。",
    statistics: {
      "建成年份": "1956年",
      "池子数量": "3个大池",
      "淋浴喷头": "16个",
      "日均洗浴": "1800人次",
      "换水循环": "每周两次",
    },
  },
  {
    id: "lq-004",
    category: "clinic",
    name: "矿职工医院",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old%20small%20hospital%20clinic%20building%20concrete%201960s%20socialist%20architecture%20medical%20sign%20weathered%20facade&image_size=landscape_4_3",
    description:
      "1961年建，最初只设内科、外科与职业病科，共30张病床。矽肺病是矿工最主要的职业病，占门诊总量的41%。因缺乏职业病专项治疗手段，确诊三期矽肺的工人平均存活年限不超过6年。医院1998年改为社区卫生服务中心。",
    statistics: {
      "建立年份": "1961年",
      "病床数量": "30张",
      "医护人员": "27人",
      "矽肺门诊占比": "41%",
      "工伤年均接诊": "320例",
    },
  },
];
