import React from 'react';
import './Blog.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


const Blog = () => {
const options = {
  unit: "in",
  format: [14, 15],
  pageBreak: { before: "#page-break" }
};
  const ref = React.createRef();
  return (
    <Container className="blog-container">

<div className="text-center">
<h1 className="blog-heading">Food Blogging Questions</h1>
      <div className="pdf-container">
        <Pdf targetRef={ref} options={options} filename="code-example.pdf">
          {({ toPdf }) => <Button className='botton my-4' variant="success" onClick={toPdf}>Download PDF</Button>}
        </Pdf>
      </div>
    </div>
      <div ref={ref}>
      <Row >
        <Col>
          <Card className="blog-card">
            <Card.Body>
              <Card.Title>Tell us the differences between uncontrolled and controlled components.</Card.Title>
              <Card.Text>Uncontrolled components are form inputs whose state is managed by the DOM, whereas controlled components are form inputs whose state is managed by React. Controlled components are typically preferred because they provide a more predictable user experience and allow for more fine-grained control over form input validation and submission.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="blog-card">
            <Card.Body>
              <Card.Title>How to validate React props using PropTypes</Card.Title>
              <Card.Text>PropTypes is a library for validating the type and shape of props passed to a React component. It allows you to catch errors early in development and helps prevent bugs caused by incorrect prop types. To use PropTypes, you import the library and define propTypes as a static property on your component.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="blog-card">
            <Card.Body>
              <Card.Title>Tell us the difference between Node.js and Express.js.</Card.Title>
              <Card.Text>Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser. It provides features like file I/O, networking, and child processes. Express.js is a web framework for Node.js that provides an abstraction layer on top of Node's built-in http module, making it easier to build web applications and APIs.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="blog-card">
            <Card.Body>
              <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
              <Card.Text>A custom hook is a reusable function that encapsulates some behavior or state management logic that can be shared across multiple components. Custom hooks allow you to abstract away common functionality and make your code more modular and reusable.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default Blog;