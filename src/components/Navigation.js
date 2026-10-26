"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NeozenNavLogo } from "./NeozenLogo";
import { useCurtain } from "./CurtainPreloader";
import { useSmoothScroll } from "./SmoothScroll";
import { projects } from "@/lib/projects";

const menuLinks = [
  { href: "/", label: "Home", num: "01" },
  { href: "/about", label: "About", num: "02" },
  { href: "/project", label: "Projects", num: "03" },
  { href: "/service", label: "Service", num: "04" },
  { href: "/contact", label: "Contact", num: "05" },
];

function projectCountForHeight(height) {
  const row = 78;
  const slots = Math.floor((height - 120) / row);
  return Math.min(5, Math.max(4, slots - 1));
}

export default function Navigation() {
  const { navigate } = useCurtain();
  const { subscribe, isStopped } = useSmoothScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const measure = () => setVisibleCount(projectCountForHeight(window.innerHeight));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe((lenis) => {
      if (menuOpen || isStopped) {
        setNavHidden(false);
        return;
      }

      const scroll = lenis.scroll;

      if (scroll < 80) {
        setNavHidden(false);
        return;
      }

      if (lenis.direction === 1) {
        setNavHidden(true);
      } else if (lenis.direction === -1) {
        setNavHidden(false);
      }
    });

    return unsubscribe;
  }, [subscribe, menuOpen, isStopped]);

  const go = (href) => {
    setMenuOpen(false);
    navigate(href);
  };

  const handleNav = (event, href) => {
    event.preventDefault();
    go(href);
  };

  const handleProjects = (event) => {
    event.preventDefault();
    if (projectsOpen) {
      go("/project");
      return;
    }
    setProjectsOpen(true);
  };

  const shownProjects = projects.slice(-Math.min(visibleCount, projects.length));

  return (
    <>
      <header className={`nav${navHidden ? " is-hidden" : ""}${menuOpen ? " is-menu-open" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo-wrap">
            <Link
              href="/"
              className="nav-logo"
              onClick={(event) => handleNav(event, "/")}
            >
              <NeozenNavLogo className="nav-logo-svg" />
              <span className="sr-only">Neozen</span>
            </Link>
          </div>

          <div className="nav-side">
            <div className="nav-est">EST – 2026</div>
            <button
              type="button"
              className="nav-menu-btn"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => {
                setMenuOpen((open) => {
                  if (open) return false;
                  setProjectsOpen(false);
                  return true;
                });
              }}
            >
              <span className="nav-btn-line">
                <span className="nav-btn-line-inner" />
              </span>
              <span className="nav-btn-line">
                <span className="nav-btn-line-inner" />
              </span>
            </button>
          </div>
        </div>
        <span className="nav-border" aria-hidden="true" />
      </header>

      <div
        className={`site-menu${menuOpen ? " is-open" : ""}${projectsOpen ? " is-projects" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="site-menu-panel site-menu-panel-left">
          <nav className="site-menu-nav">
            {menuLinks.map((link) => {
              const isProjects = link.href === "/project";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`site-menu-link${isProjects && projectsOpen ? " is-selected" : ""}`}
                  onClick={(event) =>
                    isProjects ? handleProjects(event) : handleNav(event, link.href)
                  }
                >
                  <span className="site-menu-num">{link.num}</span>
                  <span className="site-menu-label">{link.label}</span>
                  <span className="site-menu-whipe" />
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="site-menu-panel site-menu-panel-right">
          {projectsOpen ? (
            <nav className="site-menu-projects" aria-label="Recent projects">
              {shownProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className="site-menu-project"
                  onClick={() => go(`/project/${project.id}`)}
                >
                  {project.title}
                </button>
              ))}
              <button type="button" className="site-menu-more" onClick={() => go("/project")}>
                More
              </button>
            </nav>
          ) : (
            <div className="site-menu-mark">Neozen</div>
          )}
        </div>
        <button
          type="button"
          className="site-menu-close"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        >
          <span />
          <span />
        </button>
      </div>
    </>
  );
}
