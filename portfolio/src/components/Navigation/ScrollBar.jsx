import { useEffect, useState } from "react";
import "./ScrollBar.css";

export default function ScrollBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const next = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, next)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="custom-scrollbar"
      aria-hidden="true"
      style={{ "--scroll-progress": `${progress}%` }}
    >
      <div className="custom-scrollbar__track">
        <div className="custom-scrollbar__thumb" />
      </div>
      <span className="custom-scrollbar__label">
        {String(Math.round(progress)).padStart(2, "0")}
      </span>
    </div>
  );
}
