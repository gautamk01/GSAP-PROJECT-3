import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Counter from "./components/Counter";
import ImageContainer from "./components/ImageContainer";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import TextContent from "./components/TextContent";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";

gsap.registerPlugin(Flip, SplitText, ScrollTrigger);

function App() {
  const imageContainerRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const animateImages = () => {
    const images = imageContainerRef.current.querySelectorAll(".img");
    images.forEach((img) => {
      img.classList.remove("animate-out");
    });

    const state = Flip.getState(images);

    images.forEach((img) => img.classList.add("animate-out"));
    const mainTimeline = gsap.timeline();

    mainTimeline.add(
      Flip.from(state, {
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      })
    );

    images.forEach((img, index) => {
      const scaleTimeline = gsap.timeline();

      scaleTimeline
        .to(
          img,
          {
            scale: 2.5,
            duration: 0.45,
            ease: "power3.in",
          },
          0.025
        )
        .to(
          img,
          {
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          },
          0.5
        );

      mainTimeline.add(scaleTimeline, index * 0.1);
    });

    return mainTimeline;
  };

  useLayoutEffect(() => {
    // 1. Force manual scroll restoration immediately -> runs before painting
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // 2. Force scroll to top
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // 3. Lock scroll immediately
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    // Ensure we are at top again when effects run, just in case
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      // Hide sections initially
      gsap.set([aboutRef.current, workRef.current, contactRef.current], {
        autoAlpha: 0,
      });
      gsap.set(".global-line", { scaleY: 0, transformOrigin: "top" });

      // Ensure ScrollTrigger is in clean state before intro animation
      ScrollTrigger.refresh();

      const t1 = gsap.timeline({
        onComplete: () => {
          // Reveal sections
          gsap.set([aboutRef.current, workRef.current, contactRef.current], {
            autoAlpha: 1,
          });

          // Setup scroll animations AFTER sections are visible

          // About Section
          const aboutChars = new SplitText(
            aboutRef.current.querySelector(".large-text"),
            { type: "lines,chars", linesClass: "line" }
          ).chars;

          gsap.from(aboutChars, {
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            stagger: 0.005,
            duration: 0.8,
            ease: "power4.out",
          });

          // Work Section
          const projects = workRef.current.querySelectorAll(".project-item");
          gsap.from(projects, {
            scrollTrigger: {
              trigger: workRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
          });

          // Contact Section
          gsap.from(contactRef.current.querySelector(".contact-header"), {
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          });

          gsap.from(
            contactRef.current.querySelectorAll(".social-link, .email-link"),
            {
              scrollTrigger: {
                trigger: contactRef.current,
                start: "top 60%",
              },
              y: 50,
              opacity: 0,
              stagger: 0.1,
              duration: 1,
              ease: "power3.out",
            }
          );

          gsap.from(contactRef.current.querySelector(".footer-cta"), {
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 60%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });

          // Refresh ScrollTrigger after setting up animations
          ScrollTrigger.refresh();

          // Unlock scroll
          document.documentElement.style.overflow = "auto";
          document.body.style.overflow = "auto";
          document.body.style.overflowX = "hidden";
        },
      });

      gsap.set(".img", { scale: 0 });
      gsap.set(
        [".logo-name a span", ".links a span, .links p span", ".cta a span"],
        { y: "125%" }
      );
      gsap.set([".header span", ".site-info span", ".hero-footer span"], {
        y: "125%",
      });

      t1.to(".hero-bg", {
        scaleY: "100%",
        duration: 3,
        ease: "power2.inOut",
        delay: 0.25,
      });

      // Animate Global Line
      t1.to(
        ".global-line",
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.inOut",
        },
        0.5
      );

      t1.to(
        ".img",
        { scale: 1, duration: 1, stagger: 0.125, ease: "power3.out" },
        "<"
      );

      t1.to(".counter", {
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
        delay: 0.3,
        onStart: () => {
          // Add the animations to the context to ensure cleanup
          ctx.add(() => {
            animateImages();
          });
        },
      });

      t1.to(".sidebar .divider", {
        scaleY: "100%",
        duration: 1,
        ease: "power3.inOut",
        delay: 1.25,
      });

      t1.to(["nav .divider", ".site-info .divider"], {
        scaleX: "100%",
        duration: 1,
        stagger: 0.5,
        ease: "power3.inOut",
      });

      t1.to(
        ".logo",
        {
          scale: 1,
          duration: 1,
          ease: "power4.inOut",
        },
        "<"
      );

      t1.to(
        [".logo-name a span", ".links a span, .links p span", ".cta a span"],
        {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        }
      );

      t1.to(
        [".header span", ".site-info span", ".hero-footer span"],
        {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        },
        "<"
      );
    });

    return () => {
      ctx.revert();
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, []);

  return (
    <>
      <div className="global-line"></div>
      <section className="hero">
        <div className="hero-bg"></div>
        <Counter />
        <ImageContainer ref={imageContainerRef} />
        <Navigation />
        <Sidebar />
        <TextContent />
      </section>
      <AboutSection ref={aboutRef} />
      <WorkSection ref={workRef} />
      <ContactSection ref={contactRef} />
    </>
  );
}

export default App;
