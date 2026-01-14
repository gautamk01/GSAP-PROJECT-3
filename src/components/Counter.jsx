import { useEffect, useRef } from "react";
import gsap from "gsap";

const Counter = ({ onAnimationComplete }) => {
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Clear legacy/duplicate elements first
      if (counter1Ref.current) counter1Ref.current.innerHTML = "";
      if (counter2Ref.current) counter2Ref.current.innerHTML = "";
      if (counter3Ref.current) counter3Ref.current.innerHTML = "";

      // Create counter digits
      const createCounterDigits = () => {
        // Counter 1
        const counter1 = counter1Ref.current;
        const num0 = document.createElement("div");
        num0.className = "num";
        num0.textContent = "0";
        counter1.appendChild(num0);

        const num1 = document.createElement("div");
        num1.className = "num num1offset1";
        num1.textContent = "1";
        counter1.appendChild(num1);

        // Counter 2
        const counter2 = counter2Ref.current;
        for (let i = 0; i <= 10; i++) {
          const numDiv = document.createElement("div");
          numDiv.className = i === 1 ? "num num1offset2" : "num";
          numDiv.textContent = i === 10 ? "0" : i;
          counter2.appendChild(numDiv);
        }

        // Counter 3
        const counter3 = counter3Ref.current;
        for (let i = 0; i <= 30; i++) {
          const numDiv = document.createElement("div");
          numDiv.className = "num";
          numDiv.textContent = i % 10;
          counter3.appendChild(numDiv);
        }

        const finalNum = document.createElement("div");
        finalNum.className = "num";
        finalNum.textContent = "0";
        counter3.appendChild(finalNum);
      };

      const animateCounter = (counter, duration, delay = 0) => {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance =
          (counter.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(counter, {
          y: -totalDistance,
          duration: duration,
          delay: delay,
          ease: "power2.inOut",
        });
      };

      createCounterDigits();

      // Animate counters
      animateCounter(counter3Ref.current, 2.5);
      animateCounter(counter2Ref.current, 3);
      animateCounter(counter1Ref.current, 2, 1.5);

      if (onAnimationComplete) {
        gsap.delayedCall(3.5, onAnimationComplete);
      }
    });

    return () => ctx.revert();
  }, [onAnimationComplete]);

  return (
    <div className="counter">
      <div ref={counter1Ref} className="counter-1 digit"></div>
      <div ref={counter2Ref} className="counter-2 digit"></div>
      <div ref={counter3Ref} className="counter-3 digit"></div>
    </div>
  );
};

export default Counter;
