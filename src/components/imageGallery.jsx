import React from 'react';
import { Link } from 'react-router-dom';

import './imageGallery.css';

export function imageGallery(name, albumLength, header) {
  const images = [...(
    [...Array(albumLength).keys()].map(number => `/${name}/${number}.jpg`)
  )];


  return () => {
    return (
      <main>
        <header>
          <h1>{header}</h1>
        </header>

        <section class="masonry">
          {
            images.map(image => {
              return <img src={image} alt=""/>
            })
          }
        </section>

        <footer>
          <Link to="/works">back</Link>
        </footer>
      </main>
    )
  }
}
