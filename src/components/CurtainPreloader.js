"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { NeozenLoaderMark } from "./NeozenLogo";
import { useSmoothScroll } from "./SmoothScroll";

const CurtainContext = createContext(null);

const OPEN_MS = 4700;
const CLOSE_MS = 1400;

export function useCurtain() {
  const ctx = useContext(CurtainContext);
  if (!ctx) throw new Error("useCurtain must be used within CurtainProvider");
  return ctx;
}

export function CurtainProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { startScroll, stopScroll } = useSmoothScroll();
  const [phase, setPhase] = useState("closed");
  const pendingHref = useRef(null);
  const isFirstMount = useRef(true);

  const open = useCallback(() => {
    stopScroll();
    setPhase("sequence");
    window.setTimeout(() => {
      setPhase("open");
      startScroll();
    }, OPEN_MS);
  }, [startScroll, stopScroll]);

  const close = useCallback(() => {
    stopScroll();
    setPhase("closing");
    window.setTimeout(() => setPhase("closed"), CLOSE_MS);
  }, [stopScroll]);

  const navigate = useCallback(
    (href) => {
      const [path, hash] = href.split("#");
      const targetPath = path || pathname;
      const samePath = targetPath === pathname;
      const sameHash =
        typeof window !== "undefined" &&
        (hash
          ? window.location.hash === `#${hash}`
          : window.location.hash === "");

      if (samePath && sameHash) return;
      pendingHref.current = href;
      close();
    },
    [pathname, close]
  );

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      const timer = window.setTimeout(open, 80);
      return () => window.clearTimeout(timer);
    }

    setPhase("closed");
    const timer = window.setTimeout(open, 60);
    return () => window.clearTimeout(timer);
  }, [pathname, open]);

  useEffect(() => {
    if (phase !== "closed" || !pendingHref.current) return;

    const href = pendingHref.current;
    pendingHref.current = null;
    const [path, hash] = href.split("#");
    const targetPath = path || pathname;

    router.push(targetPath);

    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "auto" });
      });
    }
  }, [phase, router, pathname]);

  return (
    <CurtainContext.Provider value={{ phase, navigate, open, close }}>
      {children}
      <CurtainOverlay phase={phase} />
    </CurtainContext.Provider>
  );
}

function CurtainOverlay({ phase }) {
  const isActive = phase !== "open";
  const isSequence = phase === "sequence";
  const isClosing = phase === "closing";

  return (
    <div
      className="loader"
      data-phase={phase}
      data-active={isActive}
      aria-hidden={!isActive}
      aria-busy={isActive}
    >
      <div
        className={`loader-panel loader-panel-left${isSequence ? " is-opening" : ""}${isClosing ? " is-closing" : ""}`}
      >
        <span className="loader-line loader-line-side" />
        <span className="loader-line loader-line-center" />
      </div>

      <div
        className={`loader-panel loader-panel-right${isSequence ? " is-opening" : ""}${isClosing ? " is-closing" : ""}`}
      >
        <span className="loader-line loader-line-side" />
      </div>

      <div className="loader-logo">
        <div className="loader-seal">
          <NeozenLoaderMark className="loader-svg" />
          <span className="loader-n">N</span>
        </div>
      </div>
    </div>
  );
}
