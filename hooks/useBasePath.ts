// hooks/useBasePath.ts
import { useMemo } from "react";

export function useBasePath() {
  const prefix = useMemo(() => {
    return process.env.NODE_ENV === "production" ? "/CinemaDemo" : "";
  }, []);

  return prefix;
}
