import React from 'react';
import { Link } from 'react-router-dom';

import './works.css';

export function Works() {
  return (
    <article>
      <ul>
        <li>
          <Link to="/sweet">Sweet but Sweet</Link>
        </li>
        <li>
          <Link to="/fred">Ma Homie - Frederico</Link>
        </li>
        <li>
          <Link to="/gustavo">Ma Homie - Gustavo</Link>
        </li>
        <li>
          <Link to="/begging">Begging Culture</Link>
        </li>
        <li className="back">
          <Link to="/">back </Link>
        </li>
      </ul>
    </article>
  )
}
