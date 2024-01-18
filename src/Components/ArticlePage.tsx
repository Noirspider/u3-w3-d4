import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Result } from "../Interfaces/Articles";
import { Container } from "react-bootstrap";
const ArticlePage = () => {
  const [singleArticle, setSingleArticle] = useState<null | Result>(null);

  const params = useParams();
  console.log(params);

  const fetchingSingleArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.id);
      if (resp.ok) {
        const dataArr = await resp.json();
        console.log(dataArr);
        setSingleArticle(dataArr);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingSingleArticle();
  }, []);

  return (
    <div>
      <Container>
        {singleArticle && (
          <>
            <img src={singleArticle.image_url} alt="" style={{ maxWidth: "500px" }} />
            <h1 className="mt-4 mb-5 display-2">{singleArticle.title}</h1>
            <h4>{singleArticle.summary}</h4>

            <h5 className="text-start mt-5">From: {singleArticle.news_site}</h5>
            <a className="mt-4 text-decoration-none" href={singleArticle.url}>
              <p className="text-start">Click here to read the entire article from {singleArticle.news_site}</p>
            </a>
          </>
        )}
      </Container>
    </div>
  );
};
export default ArticlePage;
