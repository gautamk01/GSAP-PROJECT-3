import { useEffect, useRef } from "react";
import { SplitText } from "gsap/SplitText";

export const useTextSplit = (selector) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const textElements = containerRef.current.querySelectorAll(selector);
    const splitInstances = [];

    textElements.forEach((element) => {
      const split = SplitText.create(element, {
        type: "lines",
        linesClass: "line",
      });

      splitInstances.push(split);

      const lines = element.querySelectorAll(".line");
      lines.forEach((line) => {
        const textContent = line.textContent;
        line.innerHTML = `<span>${textContent}</span>`;
      });
    });

    return () => {
      splitInstances.forEach((split) => split.revert());
    };
  }, [selector]);

  return containerRef;
};
