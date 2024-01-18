import { useEffect, useState } from "react";
import { Result } from "../Interfaces/Articles";
import SingleArticle from "./SingleArticle";
import { Row, Col, Container } from "react-bootstrap";
const Main = () => {
  const [articlesArr, setArticlesArr] = useState<Result[]>([]);

  const fetchingArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const dataArr = await resp.json();

        setArticlesArr(dataArr.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingArticles();
  }, []);
  return (
    <div>
      <Container>
        <h1 className="display-2 text-start mb-3">Our best articles:</h1>

        <Row className="gy-2">
          {articlesArr.map((art) => (
            <Col xs={6} key={`id-${art.id}`}>
              <SingleArticle article={art} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Main;
