import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

const Reviews = () => {
  const reviews = [
    {
      name: 'What others day ?',
      review: 'Have a memorable and safe journey with Flash Track Corporation',
    },
    // {
    //   name: 'Mike Johnson',
    //   review: 'Sed tristique justo eu justo finibus, in porttitor eros aliquet.',
    // },
  ];

  const renderCard = () => {
  return (
    <Card style={{ width: "10rem" }} className="box">
            {reviews.map((review) => (
            <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{review.review}</Card.Text>
            </Card.Body>
            ))}
      </Card>
  );
};

return <div className="grid">{reviews.map(renderCard)}</div>;
};

export default Reviews;