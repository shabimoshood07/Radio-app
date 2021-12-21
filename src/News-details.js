import { useParams } from "react-router";
import { news } from "./Data";
function NewsDetails() {
  localStorage.clear();

  const { id } = useParams();

  const article = news.find(function (art) {
    if (art.id == id) return art;
  });

  return (
    <div className="article-details">
      <div className="article-image-con">
        <img
          src={article.image}
          alt={article.headline}
          className="article-image"
        />
      </div>
      <div className="article-heading">
        <h1 className="article-headline">{article.headline} </h1>
        <p className="article-text">{article.text}</p>
      </div>
    </div>
  );
}

export default NewsDetails;
