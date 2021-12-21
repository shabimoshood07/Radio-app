import React from "react";
import { news } from "./Data";
import { Link } from "react-router-dom";
function News() {
  localStorage.clear();

  return (
    <>
      <div className="news-section">
        <h2 className="heading">News</h2>
        <div className="underline"></div>
        <div className="news-container">
          {news.map((main) => {
            const { id, headline, text, image } = main;
            return (
              <div className="news" key={id}>
                <img src={image} alt={headline} className="news-pic" />
                <div className="news-details">
                  <h4 className="news-headline">{headline}</h4>
                  <p className="news-text">
                    {text.substring(0, 100)}...
                    <button className="readmore-btn">
                      <Link to={`/news-details/${id}`}>read more</Link>
                    </button>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
