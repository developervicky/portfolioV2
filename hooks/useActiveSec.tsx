import { navNames } from "@/types/type";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface useActiveSecProps {
  activeSec: navNames | "";
  setActiveSec: (navName: navNames) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (number: number) => void;
}

export const useActiveSec = create(
  persist<useActiveSecProps>(
    (set, get) => ({
      activeSec: "",
      timeOfLastClick: 0,
      setActiveSec: (navName: navNames) => {
        set({ activeSec: navName });
      },
      setTimeOfLastClick: (number: number) => set({ timeOfLastClick: number }),
    }),
    {
      name: "activeSec",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
