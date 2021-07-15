import React from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { DateForDisplay, NumberForDisplay, policyTypeDescription } from "ssc/utils";
import { getPolicyById } from "ssc/policies";
import Hero from "ssc/Hero";

const MotorPolicyCard = ({ policy }) => (<>
  <p>Sum insured <NumberForDisplay value={policy.sumInsured}/></p>
  <p>
    Covered until <DateForDisplay value={policy.effectiveTo}/><br/>
    Next payment <DateForDisplay value={policy.nextInstalmentDate}/>
  </p>
  <h5>Named Drivers</h5>
  <ul>
    {policy.namedDrivers && policy.namedDrivers.map(item => <li key={item.name}>{item.name}, Date of birth <DateForDisplay value={item.dateOfBirth}/></li>)}
  </ul>
</>);

const HomePolicyCard = ({ policy }) => {

  const history = useHistory();

  return (<>
    <p>Sum insured <NumberForDisplay value={policy.sumInsured}/></p>
    <p>
      Covered until <DateForDisplay value={policy.effectiveTo}/><br/>
      Next payment <DateForDisplay value={policy.nextInstalmentDate}/>
    </p>
    <h5>Named Items</h5>
    <Button variant="outline-secondary" onClick={() => history.push(`/policy/${policy.id}/amend`)} style={{ width: 100 }}>Edit</Button>
    <ul>
      {policy.namedItems && policy.namedItems.map(item => <li key={item.name}>{item.name}, value <NumberForDisplay value={item.value}/></li>)}
    </ul>
  </>);
};

const PolicyDetail = ({ id }) => {

  const { data } = useQuery(["getPolicyById", { id }], getPolicyById);
  
  return (
    <>
    {data && (<Hero heading={policyTypeDescription(data.type)} message={data.description} />)}
    <Container style={{ marginTop: "2em", backgroundColor: "lightyellow" }}>
      {data && (<>
        {data.type === "PMV" && <MotorPolicyCard policy={data}/>}
        {data.type === "HOM" && <HomePolicyCard policy={data}/>}
      </>)}
    </Container>
  </>);
};

const PolicyDetailContent = (props) => <PolicyDetail id={props.match.params.id} />;

export default PolicyDetailContent;