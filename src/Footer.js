import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { advert } from "./Data";
function Footer() {
  const [ads, setAds] = useState(advert);
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    const lastIndex = ads.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, ads]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 2000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>Advert</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {ads.map((ad, adIndex) => {
          const { id, title } = ad;

          let position = "nextSlide";
          if (adIndex === index) {
            position = "activeSlide";
          }
          if (
            adIndex === index - 1 ||
            (index === 0 && adIndex === ads.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <div className="ad-content">
                <p className="title">{title}</p>
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Footer;
