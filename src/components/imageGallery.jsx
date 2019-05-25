import React, { useState } from 'react';
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
          <h1>
            <Link to="/works">{header}</Link>
          </h1>
        </header>
        <Images images={images}/>
        <footer>
          <Link to="/works">back</Link>
        </footer>
      </main>
    )
  }
}

function Images(props) {
  let [lightboxImage, setLightboxImage] = useState(null);
  let {images} = props;

  return (
    <>
      {
        lightboxImage && <Lightbox image={lightboxImage} closeLightbox={() => setLightboxImage(null)}/>
      }
      <section className="masonry">

        {
          images.map(image => {
            return <img src={image} alt="" onClick={() => setLightboxImage(image)} key={image}/>
          })
        }
      </section>
    </>

  );
}

function Lightbox(props) {
  let { image, closeLightbox } = props;
  return (
    <section className="lightbox" onClick={closeLightbox}>
      <img src={'/large' + image} alt="" onClick={closeLightbox}/>
    </section>
  )
}
