import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Instructions } from './Instructions';

export const Header = () => {
  return (
    <>
      <Row>
        <Col>
          <Image src="clearPointLogo.png" fluid rounded />
        </Col>
      </Row>
      <Row>
        <Col>
          <Instructions />
        </Col>
      </Row>
    </>
  );
};
