import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Grid() {
    return (
      <div className="Grid">
        <Container>
            <Row className='Row'>
                <Col className='columns'>1 of 2</Col>
                <Col className='columns'>2 of 2</Col>
            </Row>
        </Container>
      </div>
    );
  }




export default Grid;