export interface MineHistoryEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  isAccident: boolean;
  severity?: "minor" | "major" | "catastrophic";
  casualties?: number;
}

export interface Equipment {
  id: string;
  name: string;
  serialNumber: string;
  era: string;
  image: string;
  description: string;
  linkedStoryId: string;
}

export interface RailwayRecord {
  year: string;
  lengthKm: number;
  annualTonnage: number;
}

export interface LivingQuarterData {
  id: string;
  category: "dormitory" | "canteen" | "bathhouse" | "clinic";
  name: string;
  image: string;
  description: string;
  statistics?: Record<string, string | number>;
}

export type RiskLevel = "safe" | "caution" | "danger" | "restricted";

export interface GuideZone {
  id: string;
  name: string;
  riskLevel: RiskLevel;
  isOpen: boolean;
  openingHours?: string;
  notes: string[];
  position: { top: string; left: string; width: string; height: string };
}

export interface OralStoryParagraph {
  id: string;
  speakerName: string;
  speakerRole: string;
  era: string;
  text: string;
  linkedEquipmentIds: string[];
  thumbnail: string;
}

export interface LinkageState {
  highlightedStoryId: string | null;
  highlightedEquipmentId: string | null;
  setHighlightedStoryId: (id: string | null) => void;
  setHighlightedEquipmentId: (id: string | null) => void;
  scrollToStory: (id: string) => void;
  scrollToEquipment: (id: string) => void;
}
