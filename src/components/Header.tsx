"use client";

import { useState } from "react";
import { navLinks } from "@/data/site";
import { CodeIcon, MenuIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="wrap topbar-in">
        <a href="#top" className="logo" aria-label="DevCrafter home">
          <span className="logo-mark" aria-hidden="true">
            <CodeIcon size={22} />
          </span>
          <span className="disp">DevCrafter</span>
        </a>
        <nav className={`nav${open ? " open" : ""}`} id="nav" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="topbar-actions">
          <a className="btn btn-dark" href="#contact">Start a project</a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
