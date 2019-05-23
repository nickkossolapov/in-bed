import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './home.css';

export function Home() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="container" onClick={() => setShowNav(!showNav)}>
        <CSSTransition in={showNav} timeout={200} classNames="nav" unmountOnExit>
          <section className="container nav-background">
            <nav>
              <h1>In bed</h1>
              <ul>
                <li>
                  <a href="/">about</a>
                </li>
                <li>
                  <a href="/">works</a>
                </li>
                <li>
                  <a href="mailto:naoinbed@gmail.com">contact</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/in__bed/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
              </ul>
            </nav>
          </section>
        </CSSTransition>
      </div>
    </>
  )
}