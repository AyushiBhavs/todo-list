import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListCard from '../components/ListCard';


export default function TodoList() { 
  return (
    <>
      <Container fluid className="mt-5" >
        <Row className="justify-content-md-center">
          <Col md="auto">
            <ListCard/>
          </Col>
        </Row>
      </Container>
    </>
  )
}
