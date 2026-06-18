import type { RailwayRecord } from "@/types";

export const railwayRecords: RailwayRecord[] = [
  { year: "1900", lengthKm: 2.4, annualTonnage: 3.2 },
  { year: "1910", lengthKm: 5.8, annualTonnage: 18.7 },
  { year: "1920", lengthKm: 8.3, annualTonnage: 42.1 },
  { year: "1930", lengthKm: 11.5, annualTonnage: 76.4 },
  { year: "1940", lengthKm: 14.2, annualTonnage: 102.8 },
  { year: "1945", lengthKm: 13.8, annualTonnage: 28.3 },
  { year: "1955", lengthKm: 18.6, annualTonnage: 156.5 },
  { year: "1965", lengthKm: 22.3, annualTonnage: 238.9 },
  { year: "1975", lengthKm: 26.7, annualTonnage: 387.2 },
  { year: "1985", lengthKm: 28.1, annualTonnage: 452.6 },
  { year: "1995", lengthKm: 24.5, annualTonnage: 189.4 },
  { year: "2005", lengthKm: 4.8, annualTonnage: 0 },
];

export interface RailwayStation {
  id: string;
  name: string;
  distanceKm: number;
  yearBuilt: string;
  status: "active" | "preserved" | "demolished";
  description: string;
}

export const railwayStations: RailwayStation[] = [
  {
    id: "st-01",
    name: "主井装车站",
    distanceKm: 0,
    yearBuilt: "1899",
    status: "preserved",
    description: "双轨翻车机房，日装能力设计为400吨。三层钢结构架体现存完整，蒸汽绞车1958年改为电动。",
  },
  {
    id: "st-02",
    name: "选煤场岔口",
    distanceKm: 1.2,
    yearBuilt: "1923",
    status: "preserved",
    description: "手选与水洗选煤线交汇处，设手动道岔两组。原选煤楼因年久失修于1997年拆除，仅留地基残迹。",
  },
  {
    id: "st-03",
    name: "三号井装车点",
    distanceKm: 3.8,
    yearBuilt: "1915",
    status: "demolished",
    description: "1994年随三号井关闭一并拆除，原址现为矸石山植被恢复区，仅可见钢轨嵌入路基残痕。",
  },
  {
    id: "st-04",
    name: "机务段加水站",
    distanceKm: 5.4,
    yearBuilt: "1936",
    status: "preserved",
    description: "蒸汽机车专用煤台与水鹤设施，水塔高度12米。现陈列C2型蒸汽机车一台，作为遗产标识。",
  },
  {
    id: "st-05",
    name: "职工通勤站台",
    distanceKm: 7.9,
    yearBuilt: "1953",
    status: "active",
    description: "工人上下班通勤小火车站点，每日开行4班。砖木结构站房保存完好，墙上\"安全生产\"标语为1972年刷制。",
  },
  {
    id: "st-06",
    name: "国铁接轨站",
    distanceKm: 12.8,
    yearBuilt: "1904",
    status: "active",
    description: "矿山专用铁路与国家铁路干线的换装枢纽。两条准轨与三条窄轨并列，配30吨龙门吊一台。",
  },
];
