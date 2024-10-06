import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";

import appStyles from "../App.module.css";

import styles from "../styles/PopularPost.module.css";

const PopularPost = (props) => {
  const { id, title, likes_count, image } = props;

  return (
    <Card className={`${styles.Post} ${appStyles.BoxShadow}`}>
      <Link to={`/posts/${id}`}>
        <Card.Img className={appStyles.ImageHover} src={image} alt={title} />
      </Link>
      <Fab
        className={styles.Circle}
        disabled
        size="large"
        color="black"
        aria-label="posts"
      >
        <div className={styles.CountNumber}>{likes_count} likes</div>
      </Fab>
      <Card.Body className={styles.Card}>
        {title && (
          <Card.Title className={`${styles.Title} ${"text-center"}`}>
            {title}
          </Card.Title>
        )}
      </Card.Body>
    </Card>
  );
};

export default PopularPost;