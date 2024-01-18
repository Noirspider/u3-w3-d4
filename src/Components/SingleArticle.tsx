import { Card, ListGroup, Button } from "react-bootstrap";
import { Result } from "../Interfaces/Articles";
import { Link, useParams } from "react-router-dom";
interface SingleArticleProps {
  article: Result;
}

const SingleArticle = ({ article }: SingleArticleProps) => {
  const published = new Date(article.published_at).toLocaleDateString();
  return (
    <div>
      <Card style={{ height: "600px", overflow: "hidden" }}>
        <Link to={`/article/${article.id}`} style={{ textDecoration: "none" }}>
          {/* <Link to={`${article.news_site}`} style={{ textDecoration: "none" }}> */}
          <Card.Img
            variant="top"
            src={article.image_url}
            style={{ objectFit: "cover", overflow: "hidden", height: "300px" }}
          />
          <Card.Body style={{ marginBottom: "0px" }}>
            <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", margin: 0 }}>
              {article.title}
            </Card.Title>
            <ListGroup>
              <ListGroup.Item className="border border-0 text-start p-0 mt-2">{published}</ListGroup.Item>
              <ListGroup.Item className="border border-0 text-start p-0 mt-2">{article.summary}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};
export default SingleArticle;
