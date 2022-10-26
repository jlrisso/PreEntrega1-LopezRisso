import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function ItemDetail(props) {

    const {
      img,  
      title,
      summary,
      author,
      price,
    } = props;

    return (
        <Container className='mt-5' >
            <Row>
                    <Col md="auto"><Card.Img variant="top" src={img} style={{ width: '20rem'}}/></Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text style={{ textAlign: 'justify'}}>{summary}</Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='p-0 mb-4'>Author: {author}</ListGroup.Item>
                                <ListGroup.Item className='p-0 mb-4'>Price: {price}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>

                        
                    </Col>
                
            </Row>
        </Container>
    
    )
}

/**
 * 

 */