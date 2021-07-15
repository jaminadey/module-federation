import React from "react";
import { Button, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { DateForDisplay, PolicyTypeDescription } from "./utils";
import { getPolicies } from "./policies";

const PolicyCard = ({ policy }) => {

  const history = useHistory();

  return (<Card style={{ width: '20rem', marginBottom: 20, marginRight: 20, float: "left", minHeight: 225 }}>
    <Card.Body>
      <Card.Title>{policy.description}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted"><PolicyTypeDescription type={policy.type} /></Card.Subtitle>
      <Card.Text>
        Covered until <DateForDisplay value={policy.effectiveTo} /><br/>
        Next payment <DateForDisplay value={policy.nextInstalmentDate} />
      </Card.Text>
      <div style={{ position: "absolute", bottom: 16 }}>
        <Card.Link href="#" style={{display: "inline-block", paddingTop: 6}}>Start a Claim</Card.Link>
        <Button
          style={{ marginLeft: 50}}
          variant="primary"
          onClick={() => history.push(`/policy/${policy.id}`)}
        >
          View &amp; Manage
        </Button>
      </div>
    </Card.Body>
  </Card>
  );
};

const PolicySummaryCards = (props) => {

  const { data } = useQuery(["getPolicies"], getPolicies);
  
  return (
    <div
      style={{
        padding: "1em"
      }}>
      {data && data.map(policy => {
        return (<PolicyCard key={policy.id} policy={policy} />)
      })}
    </div>
  );
};

export default PolicySummaryCards;