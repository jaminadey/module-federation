import React from "react";
import { Card } from "react-bootstrap";

const NavigationCards = () => {

  const styles = {
    card: {
      width: '12rem', 
      minHeight: 172, 
      marginRight: 20, 
      marginTop: 20,
      float: "left",
    },
    card_link: {
      display: "inline-block", 
      position: "absolute", 
      bottom: 16 
    }
  };

  return (
  <>
    <Card style={styles.card}>
      <Card.Body>
        <Card.Title>View Documents</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Certificate of currency, PDS etc.</Card.Subtitle>
        <Card.Link href="#" style={styles.card_link}>See more details</Card.Link>
      </Card.Body>
    </Card>
    <Card style={styles.card}>
      <Card.Body>
        <Card.Title>Payments</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Manage your payment method and frequency</Card.Subtitle>
        <Card.Link href="#" style={styles.card_link}>See more details</Card.Link>
      </Card.Body>
    </Card>
    <Card style={styles.card}>
      <Card.Body>
        <Card.Title>Claims</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Make a new claim or view existing claims</Card.Subtitle>
        <Card.Link href="#" style={styles.card_link}>See more details</Card.Link>
      </Card.Body>
    </Card>
    <Card style={styles.card}>
      <Card.Body>
        <Card.Title>Quotes</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Get a new insurance quote or view a previous quote</Card.Subtitle>
        <Card.Link style={styles.card_link}>See more details</Card.Link>
      </Card.Body>
    </Card>
  </>)
};

export default NavigationCards;