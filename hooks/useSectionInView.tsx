import { navNames } from "@/types/type";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSec } from "./useActiveSec";

const useSectionInView = (navName: navNames, threshold = 0.75) => {
  const { ref, inView } = useInView({ threshold });

  const { setActiveSec, timeOfLastClick } = useActiveSec();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSec(navName);
    }
  }, [inView, navName, setActiveSec, timeOfLastClick]);

  return { ref };
};

export default useSectionInView;
