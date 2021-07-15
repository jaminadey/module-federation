import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { getPolicyById } from "ssc/policies";
import Hero from "ssc/Hero";
import { policyTypeDescription } from "ssc/utils";
import SummaryOfChanges from "./SummaryOfChanges";
import CreditCardForm from "payments/CreditCardForm";

const PaymentPage = (props) => {

  const history = useHistory();
  const id = props.match.params.id;
  const { data } = useQuery(["getPolicyById", { id }], getPolicyById);

  return (
    <>
    {data && (<Hero message={data.description} heading={policyTypeDescription(data.type)} />)}
    <Container style={{marginTop: "2em", marginBottom: "4em" }}>
      <h2>Confirm changes</h2>
      <SummaryOfChanges {...props} style={{ backgroundColor: "white" }} />
      <h2 style={{ marginTop: "1em" }}>Payment details</h2>
      <CreditCardForm />
      <div style={{ clear: "both", paddingTop: 20 }}>
        <Button variant="primary" style={{width: 200}} onClick={() => history.push(`/policy/${id}/amend/confirm`)}>Submit Payment</Button>
        <Button variant="outline-secondary" style={{width: 200, marginLeft: 10}} onClick={() => history.push(`/policy/${id}`)}>Cancel all changes</Button>
      </div>
    </Container>
    </>
  );
};

export default PaymentPage;
