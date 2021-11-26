import React from "react";
import { Row, Col } from "react-bootstrap";
import RootLayout from "../../components/RootLayout";
import CardLayout from "../../components/CardLayout";
import { ScrollUpButton } from "../../styled-components";

const News = () => {
  return (
    <RootLayout>
      <h1 className="text-center text-light display-2 mt-4">Recent News</h1>
      <Row xs={1} md={2} className="g-4 transition my-4">
        <Col>
          <CardLayout
            title="News article 1"
            content="blah blah blah"
            link="www.google.com"
          />
        </Col>
        <Col>
          <CardLayout
            title="News article 2"
            content="blah blah blah"
            link="www.google.com"
          />
        </Col>
        <Col>
          <CardLayout
            title="News article 3"
            content="blah blah blah"
            link="www.google.com"
          />
        </Col>
        <Col>
          <CardLayout
            title="News article 4"
            content="blah blah blah"
            link="www.google.com"
          />
        </Col>
      </Row>
      <ScrollUpButton />
    </RootLayout>
  );
};

export default News;
