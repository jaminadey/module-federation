import React, { useState } from "react";
import { FormControl, Button, Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { getPolicyById } from "ssc/policies";
import Hero from "ssc/Hero";
import { policyTypeDescription } from "ssc/utils";

const NamedItemsContent = (props) => {

  const id = props.match.params.id;
  const [ namedItems, setNamedItems ] = useState([]);
  const { data } = useQuery(["getPolicyById", { id }], getPolicyById, { onSuccess: data => setNamedItems(data.namedItems)});
  const history = useHistory();

  const handleFormElementChange = (event, index, property) => {
    const updated = [...namedItems]; 
    updated[index][property] = event.target.value; 
    setNamedItems(updated);
  };

  return (
    <>     
      {data && (<>
        <Hero message={data.description} heading={policyTypeDescription(data.type)}/>
        <Container style={{ marginTop: "2em" }}>
          <h4>Edit Named Items</h4>
          <div>
            {namedItems && namedItems.map((namedItem, index) => (<div key={index} style={{marginBottom: 20}}>
              <label>Short description</label>
              <FormControl type="text" value={namedItem.name} onChange={(event) => handleFormElementChange(event, index, "name")}/>
              <label>Value</label>
              <FormControl type="text" value={namedItem.value} onChange={(event) => handleFormElementChange(event, index, "value")}/>
            </div>))}
          </div>
          <div>
            <Button onClick={() => history.push(`/policy/${id}/amend/summary`)}>Save changes</Button>
            <Button variant="outline-secondary" style={{ marginLeft: 10}} onClick={() => history.push(`/policy/${id}`)}>Cancel changes</Button>
          </div>
        </Container>
      </>)}      
    </>
  );
};

export default NamedItemsContent;
