import React, { useEffect, useState, useRef } from 'react';
import ContainerDimensions from 'react-container-dimensions';

import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import './styles.css';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <>
      <Row>
        <ContainerDimensions>
          {({ width, height }) => (
            <Carousel
              activeIndex={index}
              direction={direction}
              onSelect={handleSelect}
              interval={null}
            >
              <Carousel.Item>
                <img
                  className="img-obj-fit"
                  src={require(`../../static/products/home1.jpg`)}
                  alt="First slide"
                  style={{ width }}
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                  <h3>WELCOME TO</h3>
                  <p>
                    Techselector
                  </p>
                  <Button variant="success" className="my-2">
                    Start now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-obj-fit"
                  src={require(`../../static/products/home2.jpg`)}
                  alt="Second slide"
                  style={{ width }}
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                  <h3>Laptops</h3>
                  <p>
                    Power in portable form
                  </p>
                  <Button variant="success" className="my-2">
                    Shop now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-obj-fit"
                  src={require(`../../static/products/home3.jpg`)}
                  alt="Third slide"
                  style={{ width }}
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                  <h3>Mobiles</h3>
                  <p>
                    You can finally carry a calculator in your pocket
                  </p>
                  <Button variant="success" className="my-2">
                    Shop now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          )}
        </ContainerDimensions>
      </Row>

      <Row className="my-5">
        <Col xs={6} className="mx-auto">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              Developed By
            </p>
            <footer className="blockquote-footer">
              Team 1 under <cite title="Source Title">Yuri Chernak</cite>
            </footer>
          </blockquote>
        </Col>
      </Row>
    </>
  );
};

export default Home;
