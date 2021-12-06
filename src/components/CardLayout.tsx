import React from "react";
import { Card } from "react-bootstrap";

const CardLayout = ({
  title,
  position,
  biography,
  content,
  link,
  authors,
  _published,
  publisher,
  _pmid,
  objective,
  design,
  setting,
  participants,
  interventions,
  measures,
  results,
  conclusions,
  imgClassname,
}: ICardLayoutProps) => {
  return (
    <Card className="bg-dark text-light p-2 m-2">
      <Card.Title className="mt-3" style={{ fontSize: 26 }}>
        {title}
      </Card.Title>
      <Card.Title className="mt-3" style={{ fontSize: 20 }}>
        {position}
      </Card.Title>
      <Card.Title className="d-flex justify-content-center">
        <div className={`${imgClassname}`} />
      </Card.Title>
      <Card.Body>
        <Card.Text style={{ fontSize: 16 }}>
          <span>{authors}</span>
        </Card.Text>
        <Card.Text className="text-start" style={{ fontSize: 16 }}>
          {biography}
        </Card.Text>
        <Card.Text className="text-start">{content}</Card.Text>
        <Card.Text className="text-start">{objective}</Card.Text>
        <Card.Text className="text-start">{design}</Card.Text>
        <Card.Text className="text-start">{setting}</Card.Text>
        <Card.Text className="text-start">{participants}</Card.Text>
        <Card.Text className="text-start">{interventions}</Card.Text>
        <Card.Text className="text-start">{measures}</Card.Text>
        <Card.Text className="text-start">{results}</Card.Text>
        <Card.Text className="text-start">{conclusions}</Card.Text>
      </Card.Body>
      <Card.Footer
        className="d-flex justify-content-center"
        style={{ fontSize: 16 }}
      >
        <a
          className="text-info h5"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      </Card.Footer>
      <Card.Footer>
        <div>
          <div>{publisher ? publisher : <></>}</div>
          <div>{_published ? _published : <></>}</div>
          <div>{_pmid ? _pmid : <></>}</div>
        </div>
      </Card.Footer>
    </Card>
  );
};

interface ICardLayoutProps {
  title: string;
  position?: string;
  biography?: string;
  content?: string;
  objective?: string;
  design?: string;
  setting?: string;
  participants?: string;
  interventions?: string;
  measures?: string;
  results?: string;
  conclusions?: string;
  link?: string;
  authors?: string;
  _published?: string;
  publisher?: string;
  _pmid?: string;
  imgClassname?: string;
}
export default CardLayout;
