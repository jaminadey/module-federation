import React from "react";
import { useQuery } from "react-query";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DateForDisplay, NumberForDisplay, policyTypeDescription } from "./utils";
import { getPolicyById } from "./policies";
import Hero from "./Hero";
import AmendButton from "amendments/AmendButton";

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
    <p>Sum insured <NumberForDisplay value={policy.sumInsured} /></p>
    <p>
      Covered until <DateForDisplay value={policy.effectiveTo} /><br />
      Next payment <DateForDisplay value={policy.nextInstalmentDate} />
    </p>
    <h5>Named Items</h5>

      <React.Suspense fallback={null}>
        <AmendButton policy={policy} />
      </React.Suspense>

    <br />
    <ul>
      {policy.namedItems && policy.namedItems.map(item => <li key={item.name}>{item.name}, value <NumberForDisplay value={item.value} /></li>)}
    </ul>
  </>);
};

const PolicyDetail = ({ id }) => {

  const { data } = useQuery(["getPolicyById", { id }], getPolicyById);
  
  return (
    <>
    {data && (<Hero heading={policyTypeDescription(data.type)} message={data.description} />)}
    <Container style={{ marginTop: "2em" }}>
      {data && (<>
        {data.type === "PMV" && <MotorPolicyCard policy={data}/>}
        {data.type === "HOM" && <HomePolicyCard policy={data}/>}
      </>)}
    </Container>
  </>);
};

const PolicyDetailContent = (props) => <PolicyDetail id={props.match.params.id} />;

export default PolicyDetailContent;