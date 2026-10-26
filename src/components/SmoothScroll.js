"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const ScrollContext = createContext(null);

export function useSmoothScroll() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("useSmoothScroll must be used within SmoothScrollProvider");
  }
  return ctx;
}

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const listenersRef = useRef(new Set());
  const virtualListenersRef = useRef(new Set());
  const holdsRef = useRef(0);
  const [isStopped, setIsStopped] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenisRef.current = lenis;
    lenis.stop();

    const notify = () => {
      const instance = lenisRef.current;
      if (!instance) return;
      listenersRef.current.forEach((listener) => listener(instance));
    };

    const notifyVirtual = (data) => {
      virtualListenersRef.current.forEach((listener) => listener(data));
    };

    lenis.on("scroll", notify);
    lenis.on("virtual-scroll", notifyVirtual);

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const startScroll = useCallback(() => {
    if (holdsRef.current > 0) {
      lenisRef.current?.stop();
      setIsStopped(true);
      return;
    }
    lenisRef.current?.start();
    setIsStopped(false);
  }, []);

  const stopScroll = useCallback(() => {
    lenisRef.current?.stop();
    setIsStopped(true);
  }, []);

  const holdScroll = useCallback(() => {
    holdsRef.current += 1;
    lenisRef.current?.stop();
    setIsStopped(true);
  }, []);

  const releaseScroll = useCallback(() => {
    holdsRef.current = Math.max(0, holdsRef.current - 1);
  }, []);

  const subscribe = useCallback((listener) => {
    listenersRef.current.add(listener);
    return () => listenersRef.current.delete(listener);
  }, []);

  const subscribeVirtual = useCallback((listener) => {
    virtualListenersRef.current.add(listener);
    return () => virtualListenersRef.current.delete(listener);
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        startScroll,
        stopScroll,
        holdScroll,
        releaseScroll,
        isStopped,
        subscribe,
        subscribeVirtual,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
