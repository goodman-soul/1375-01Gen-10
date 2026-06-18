import type { GuideZone } from "@/types";

export const guideZones: GuideZone[] = [
  {
    id: "gz-001",
    name: "工业遗产广场",
    riskLevel: "safe",
    isOpen: true,
    openingHours: "09:00 — 17:00",
    notes: [
      "游客中心、电子导览器租赁点均设在此区",
      "无障碍通道全程畅通",
      "广场设有自动售货机与饮水台",
    ],
    position: { top: "12%", left: "8%", width: "24%", height: "20%" },
  },
  {
    id: "gz-002",
    name: "主井架展示区",
    riskLevel: "caution",
    isOpen: true,
    openingHours: "09:30 — 16:30",
    notes: [
      "禁止攀爬钢架结构",
      "钢架除锈维护中会临时关闭，约每月第二个周三",
      "大风（6级以上）天气自动关闭",
      "12岁以下儿童须由成人牵手陪同",
    ],
    position: { top: "8%", left: "40%", width: "22%", height: "28%" },
  },
  {
    id: "gz-003",
    name: "绞车房与设备展厅",
    riskLevel: "safe",
    isOpen: true,
    openingHours: "09:00 — 17:00",
    notes: [
      "部分老设备为可互动展品，按指示牌操作",
      "拍照可开闪光灯，禁止使用三脚架",
      "展厅内设恒温恒湿柜陈列纸质档案",
    ],
    position: { top: "10%", left: "70%", width: "22%", height: "24%" },
  },
  {
    id: "gz-004",
    name: "窄轨铁路遗存",
    riskLevel: "caution",
    isOpen: true,
    openingHours: "全天开放",
    notes: [
      "可步行进入1.2公里展示段",
      "道岔区禁止踩踏（警示条区域）",
      "沿途设有休息长椅与说明牌",
      "夏季注意防暑，全程无遮蔽",
    ],
    position: { top: "40%", left: "5%", width: "90%", height: "12%" },
  },
  {
    id: "gz-005",
    name: "甲栋工人宿舍",
    riskLevel: "caution",
    isOpen: true,
    openingHours: "09:00 — 16:30",
    notes: [
      "仅一楼展示层对外开放",
      "二楼为原始居民遗留陈设，严禁翻越护栏",
      "木地板承重有限，单房间同时停留不超6人",
      "楼内禁止饮食、吸烟",
    ],
    position: { top: "56%", left: "10%", width: "32%", height: "22%" },
  },
  {
    id: "gz-006",
    name: "职工大食堂（餐饮区）",
    riskLevel: "safe",
    isOpen: true,
    openingHours: "11:00 — 14:00，17:00 — 20:00",
    notes: [
      "提供怀旧矿工套餐（窝头、炖菜）",
      "接受扫码支付与现金",
      "设有回民窗口",
      "堂食区域可容纳160人",
    ],
    position: { top: "58%", left: "50%", width: "28%", height: "18%" },
  },
  {
    id: "gz-007",
    name: "矸石山沉陷区",
    riskLevel: "danger",
    isOpen: false,
    openingHours: "永久关闭",
    notes: [
      "地表仍有缓慢沉陷，严禁翻越围栏",
      "山体有自燃风险，夏季局部表面温度可达80℃",
      "多处存在地下采空塌陷坑",
      "违规进入者后果自负",
    ],
    position: { top: "50%", left: "82%", width: "14%", height: "34%" },
  },
  {
    id: "gz-008",
    name: "未开放矿井巷道",
    riskLevel: "restricted",
    isOpen: false,
    openingHours: "科研审批准入",
    notes: [
      "所有井下巷道均不向公众开放",
      "瓦斯浓度持续超标，通风系统已停运",
      "巷道顶板年久失修，掉矸风险极高",
      "科研考察须提前30天提交书面申请",
      "紧急联系电话：遗产管理处 0XXX-XXXXXXX",
    ],
    position: { top: "82%", left: "20%", width: "60%", height: "14%" },
  },
];

export const prohibitedItems: string[] = [
  "各类火源（打火机、火柴、烟花爆竹等）",
  "易燃易爆物品（汽油、酒精、气雾剂等）",
  "无人机、滑翔伞等飞行器",
  "金属探测器、地质锤等勘探工具",
  "三脚架、闪光灯等专业摄影设备（商业拍摄需申请）",
  "宠物（导盲犬除外）",
];

export const safetyCode: string[] = [
  "请沿规划路线参观，切勿偏离步道或跨越围栏",
  "所有警示标识均为专业安全评估后设置，请严格遵守",
  "儿童、老人及行动不便者须有人陪同",
  "如遇身体不适，请就近联系工作人员或拨打紧急电话",
  "天气异常（暴雨、雷电、大风）时请遵照广播指示撤离",
  "遗产区域内一草一木、一砖一瓦均受法律保护，严禁刻画、拆取",
  "请尊重历史，不在事故纪念区域内嬉笑打闹",
];
