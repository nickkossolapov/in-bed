import React from 'react';
import { Link } from 'react-router-dom';

import './about.css';
import about from '../assets/about.jpg';

export function About() {
  return (
    <article>
      <img className="about" src={about} alt="nao"/>
      <h1>
        <Link to="/">
          Nao | in bed
        </Link>
      </h1>
      <p className="bio">
        A Tokyo and Johannesburg Based Photographer.<br/>His artist name is In bed.
      </p>
      <ul>
        <li>
          <Link to="/works">works</Link>
        </li>
        <li>
          <a href="mailto:naoinbed@gmail.com">contact</a>
        </li>
        <li>
          <a href="https://www.instagram.com/in__bed/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
        <li>
          <Link to="/">back </Link>
        </li>
      </ul>
      <p className="location">Base: Tokyo, Japan & Johannesburg, South Africa</p>
    </article>
  )
}
