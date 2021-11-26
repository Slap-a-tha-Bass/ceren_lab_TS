import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardLayout from "../../components/CardLayout";
import RootLayout from "../../components/RootLayout";

import WhoWeAre from "./WhoWeAre";
import Research from "./Research";
import People from "./People";
import News from "./News";
import Resources from "./Resources";

const Home = () => {
  return (
    <>
      <RootLayout>
        <Col md={4}>
          <Card className="bg-dark text-light border-dark rounded p-2 m-2 transition my-5">
            <Card.Title className="text-center" style={{ fontSize: 40 }}>
              A rebel's approach to changing{" "}
              <span className="d-inline" style={{ color: "rgb(31, 255, 160)" }}>
                SCI
              </span>{" "}
              care
            </Card.Title>
            <Card.Body>
              <Card.Text style={{ fontSize: 20 }}>
                Changing acute care and care in the chronic stages of{" "}
                <span
                  className="d-inline"
                  style={{ color: "rgb(31, 255, 160)" }}
                >
                  spinal cord injury
                </span>{" "}
                through using E-Stim, ketogenic dietary strategies, and gut
                microbiome modifications.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark border-dark rounded m-2 p-2 transition">
            <Card.Img className="gif"></Card.Img>
          </Card>
        </Col>
      </RootLayout>

      {/* WHOWEARE SECTION - See WhoWeAre.tsx */}
      <WhoWeAre />
      {/* RESEARCH SECTION - See Research.tsx */}
      <Research />
      {/* PEOPLE SECTION - See People.tsx */}
      <People />
      {/* NEWs SECTION - See News.tsx */}
      <News />
      {/* RESOURCES SECTIONS - See Resources.tsx */}
      <Resources />
      
    </>
  );
};

export default Home;
