import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderFooter.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null); // ✅ removed TypeScript type

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  // ✅ close when clicking outside
  useEffect(() => {
    function onDocClick(e) { // removed MouseEvent type
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="contribute-header">
      <div className="contribute-top">
        <img src="/images/logo.png" alt="Logo" className="contribute-logo" />
      </div>

      <nav className="contribute-nav">
        <ul>
          <li><NavLink to="/contribute" onClick={close}>Home</NavLink></li>

          <li ref={dropdownRef} className="dropdown">
            <button
              type="button"
              className="dropbtn"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={(e) => { e.stopPropagation(); toggle(); }}
            >
              Donation ▾
            </button>

            {open && (
              <ul className="dropdown-content click-dropdown" role="menu">
                <li role="none">
                  <NavLink to="/donate" role="menuitem" onClick={close}>
                    Donate
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/donation-receipt" role="menuitem" onClick={close}>
                     Donation Receipt (Direct Deposit)
                  </NavLink>

                </li>
                <li role="none">
               <NavLink to="/donation-corrections" role="menuitem" onClick={close}>
                Donation Receipt Corrections
               </NavLink>

                </li>
              </ul>
            )}
          </li>

          <li><NavLink to="/aarti" onClick={close}>Free Aarti</NavLink></li>
          <li><NavLink to="/darshan" onClick={close}>Free Sugam Darshan</NavLink></li>
          <li><NavLink to="/events" onClick={close}>Event Participation</NavLink></li>
          <li><NavLink to="/transactions" onClick={close}>Transaction History</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
