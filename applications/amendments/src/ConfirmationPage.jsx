import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { getPolicyById } from "ssc/policies";
import Hero from "ssc/Hero";
import { policyTypeDescription } from "ssc/utils";
import SummaryOfChanges from "./SummaryOfChanges";

const ConfirmationPage = (props) => {

  const history = useHistory();
  const id = props.match.params.id;
  const { data } = useQuery(["getPolicyById", { id }], getPolicyById);

  return (
    <>
      {data && (<Hero message={data.description} heading={policyTypeDescription(data.type)} />)}
      <Container style={{marginTop: "2em"}}>
        <h2>Payment success</h2>
        <SummaryOfChanges {...props} style={{ backgroundColor: "white" }} />
        <h2>Payment details</h2>
        <p>Paid by Visa.</p>
        <p>Card number ending in 1207<br/>Expiry 12/25</p>
        <div style={{ paddingTop: 20 }}>
          <Button variant="primary" style={{width: 200}} onClick={() => history.push(`/policy/${id}`)}>Back to Policy Details</Button>
        </div>
      </Container>
    </>
  );
};

export default ConfirmationPage;
