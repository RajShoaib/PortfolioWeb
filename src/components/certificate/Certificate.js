import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cisco from "../../images/cisco.jpg";
import DSA from "../../images/dsa.png";
import Google from "../../images/google.png";
import Java from "../../images/java.png";
import Oasis from "../../images/oasis_page.jpg";
import octanet from "../../images/Octanet.png";
import opps from "../../images/Opp.png";
import RPC from "../../images/rpc.png";
import SQL from "../../images/sql_cer.png";
import wipro from "../../images/wipro.png";
import Tech from "../../images/technohack.png";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={Cisco}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={DSA}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={Google}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={Java}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={Oasis}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={c} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={octanet}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={iq} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={opps}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
          {/* </Bounce> */}
        </Fade>
      </Container>
    </div>
  );
}
