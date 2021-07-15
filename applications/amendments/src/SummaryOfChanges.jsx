import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SummaryOfChanges = (props) => {

  const id = props.match.params.id;
  const history = useHistory();

  const styles = props.style || { width: 300, float: "right", border: "1px solid #EEE", backgroundColor: "#EEE", marginTop: 50, padding: 10 };

  return (
    <div style={styles}>
      <h6>Summary of changes</h6>
      <p>Named item added</p>
      <ul>
        <li>Original Painting (value $4,500)</li>
      </ul>
      <p>Additional premium to pay</p>
      <p style={{marginTop: -25, marginBottom: 0}}>
        <span style={{display: "inline-block", verticalAlign: "top", paddingTop: 16}}>$</span>
        <span style={{fontSize: "xxx-large"}}>13</span>
        <span style={{fontSize: "x-large"}}>.50</span>
      </p>
      {props.showActions && (<div>
        <Button variant="primary" style={{width: "100%"}} onClick={() => history.push(`/policy/${id}/amend/pay`)}>Proceed to Payment</Button>
        <Button variant="outline-secondary" style={{width: "100%", marginTop: 8}} onClick={() => history.push("/")}>Cancel all changes</Button>
      </div>)}
    </div>
  );

};

export default SummaryOfChanges;
