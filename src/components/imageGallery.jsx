import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './imageGallery.css';

export function imageGallery(name, albumLength, header) {
  const indices = [...Array(albumLength).keys()];

  return () => {
    return (
      <main>
        <header>
          <h1>
            <Link to="/works">{header}</Link>
          </h1>
        </header>
        <Images indices={indices} name={name} albumLength={albumLength}/>
        <footer>
          <Link to="/works">back</Link>
        </footer>
      </main>
    )
  }
}

function Images(props) {
  let [selectedImage, setSelectedImage] = useState(null);
  let {indices, name, albumLength} = props;

  return (
    <>
      {selectedImage !== null &&
        <Lightbox index={selectedImage}
                  name={name}
                  albumLength={albumLength}
                  closeLightbox={() => setSelectedImage(null)}/>
      }
      <section className="masonry">
        {
          indices.map(index => {
            return <img src={process.env.PUBLIC_URL + `/${name}/${index}.jpg`}
                        alt=""
                        onClick={() => setSelectedImage(index)}
                        key={index}/>
          })
        }
      </section>
    </>
  );
}

function Lightbox(props) {
  let [lightboxImage, setLightboxImage] = useState(props.index);
  let {albumLength, name, closeLightbox} = props;

  useEffect(() => {
    let handleKeyPress = event => setLightboxImage(getNewImage(event, lightboxImage, albumLength));
    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [albumLength, lightboxImage]);

  return (
    <section className="lightbox" onClick={closeLightbox}>
      <img src={process.env.PUBLIC_URL + `/large/${name}/${lightboxImage}.jpg`} alt="" onClick={closeLightbox}/>
    </section>
  )
}

function getNewImage(event, currentIndex, albumLength) {
  const {key} = event;
  if (key === 'ArrowLeft')
    return (albumLength + currentIndex - 1)%(albumLength);
  else if (key === 'ArrowRight')
    return (currentIndex + 1)%(albumLength);
  else return currentIndex;
}
