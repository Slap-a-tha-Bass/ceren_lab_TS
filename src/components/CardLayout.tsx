import React from "react";
import { Card } from "react-bootstrap";

const CardLayout = ({ title, content, link, authors, _published, publisher }: ICardLayoutProps) => {
  return (
    <Card className="bg-dark text-light p-2 m-2">
      <Card.Title className="mt-3" style={{ fontSize: 30 }}>
        {title}
      </Card.Title>
      <Card.Body>
        <Card.Text>
          <span>{authors}</span>
        </Card.Text>
        <Card.Text className="text-start">
          <span>{content}</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-around">
        <a
          className="text-decoration-none"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
        <span>{publisher} {_published}</span>
      </Card.Footer>
    </Card>
  );
};

interface ICardLayoutProps {
  title: string;
  content: string;
  link: string;
  authors: string,
  _published: string;
  publisher: string;
}
export default CardLayout;
