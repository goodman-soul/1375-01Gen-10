import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react";
import type { LinkageState } from "@/types";

const LinkageContext = createContext<LinkageState | null>(null);

export const LinkageProvider = ({ children }: { children: ReactNode }) => {
  const [highlightedStoryId, setHighlightedStoryId] = useState<string | null>(null);
  const [highlightedEquipmentId, setHighlightedEquipmentId] = useState<string | null>(null);
  const storyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const equipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToStory = useCallback((id: string) => {
    if (storyTimerRef.current) clearTimeout(storyTimerRef.current);
    setHighlightedStoryId(id);
    const el = document.getElementById(`story-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    storyTimerRef.current = setTimeout(() => setHighlightedStoryId(null), 3000);
  }, []);

  const scrollToEquipment = useCallback((id: string) => {
    if (equipTimerRef.current) clearTimeout(equipTimerRef.current);
    setHighlightedEquipmentId(id);
    const el = document.getElementById(`equipment-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    equipTimerRef.current = setTimeout(() => setHighlightedEquipmentId(null), 3000);
  }, []);

  return (
    <LinkageContext.Provider
      value={{
        highlightedStoryId,
        highlightedEquipmentId,
        setHighlightedStoryId,
        setHighlightedEquipmentId,
        scrollToStory,
        scrollToEquipment,
      }}
    >
      {children}
    </LinkageContext.Provider>
  );
};

export const useLinkage = () => {
  const ctx = useContext(LinkageContext);
  if (!ctx) throw new Error("useLinkage must be used within LinkageProvider");
  return ctx;
};
