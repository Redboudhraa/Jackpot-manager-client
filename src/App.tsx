import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import JackpotTable from './components/JackpotTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card>
            <Card.Header as="h1" className="text-center bg-primary text-white">
              Mini Jackpot Manager
            </Card.Header>
            <Card.Body>
              <Card.Title className="mb-4">Current Jackpots</Card.Title>
              <JackpotTable />
            </Card.Body>
            <Card.Footer className="text-muted text-center">
              Contribute to jackpots and watch them grow. When a jackpot reaches its threshold, it will reset!
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;