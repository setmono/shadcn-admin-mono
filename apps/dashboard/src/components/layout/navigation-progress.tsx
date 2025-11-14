import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

import { Progress } from "@mono/ui/core/progress";

export function NavigationProgress() {
  const [progress, setProgress] = useState(0);
  const state = useRouterState();

  useEffect(() => {
    if (state.status === "pending") {
      setProgress(10);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + 5;
          return prev;
        });
      }, 100);

      return () => clearInterval(interval);
    }
    if (state.status === "idle") {
      setProgress(100);
      const timeout = setTimeout(() => {
        setProgress(0);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [state.status]);

  if (progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 z-99 w-full">
      <Progress
        value={progress}
        className="h-0.5 bg-transparent transition-all"
      />
    </div>
  );
}
