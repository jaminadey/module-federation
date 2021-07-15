import React from "react";
import resolveComponent from "./brandComponentResolver";
import NavigationCards from "./NavigationCards";
import Hero from "./Hero";

const PolicySummaryCards = React.lazy(resolveComponent("PolicySummaryCards"));

const PolicySummaryContent = (props) => (
  <>
    <Hero heading="Welcome" message="Jane Austen" />
    <div style={{ marginTop: "-3em", marginLeft: 18 }}><NavigationCards/></div>
    <h6 style={{ textTransform: "uppercase", clear: "both", paddingTop: 20 }}>Your policies</h6>
    <React.Suspense fallback={<div>Loading...</div>}>
      <PolicySummaryCards {...props}/>
    </React.Suspense>  
  </>
);

export default PolicySummaryContent;
