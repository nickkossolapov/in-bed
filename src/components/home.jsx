import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import './home.css';

export function Home() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <main className="container background" onClick={() => setShowNav(!showNav)}>
        <CSSTransition in={showNav} timeout={200} classNames="nav" unmountOnExit>
          <section className="container nav-background">
            <nav>
              <h1 className="home-text">In bed</h1>
              <p className="home-text">photographer</p>
              <ul>
                <li>
                  <Link className="home-link" to="/about">about</Link>
                </li>
                <li>
                  <Link className="home-link" to="/works">works</Link>
                </li>
                <li>
                  <a className="home-link" href="mailto:naoinbed@gmail.com">contact</a>
                </li>
                <li>
                  <a className="home-link" href="https://www.instagram.com/in__bed/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
              </ul>
            </nav>
          </section>
        </CSSTransition>
      </main>
    </>
  )
}
