import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
export default function Home() {
  return (
    <Container>
      <Row className="homerow">
        <Col md={6} className="  text-right outerimag">
          <Image
            className="  img"
            src="https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_630,h_630,al_c,q_85,usm_0.66_1.00_0.01/gettyimages-1284121212-2048x2048_edited_.webp"
            style={{ width: 400, height: 400 }}
            roundedCircle
          />
        </Col>
        <Col md={6} className="contain">
          <h1 style={{ fontSize: "80px", marginTop: "20px" }}>Hello</h1>
          <h3>A Bit About Me</h3>
          <p style={{ fontSize: "15px" }}>
            I'm a paragraph. Click here to add your own text and <br /> edit me.
            I’m a great place for you to tell a story and <br /> let your users
            know a little more about you.
          </p>
        

          <button type="button" class="btn rbtn button">
            Resume
          </button>
          <button
            type="button"
            class="btn pbtn button"
            style={{ backgroundcolor: "#FF3B25" }}
          >
            Projects
          </button>
          <button type="button" class="btn cbtn button">
            Contact
          </button>
        </Col>
      </Row>
    </Container>
  );
}
