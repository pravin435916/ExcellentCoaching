// src/components/CardItem.js
import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const CardItem = ({ avatar, playerName, rank, description }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={avatar} style={{width:'full', height:'16rem',objectFit:'cover',aspectRatio:3/2}} />
      <Card.Body>
        <Card.Title>{playerName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Rank: {rank}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        <Badge bg="warning" className='mt-2'>View Profile</Badge>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
