import React from "react";
import SummaryOfChanges from "./SummaryOfChanges";
import resolveComponent from "ssc/brandComponentResolver";

const PolicyDetail = React.lazy(resolveComponent("PolicyDetail"));

const SummaryOfChangesPage = (props) => {

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <PolicyDetail {...props}/>
      </React.Suspense>
      <div style={{ marginTop: -290, marginRight: 10, float: "right" }}>
        <SummaryOfChanges { ...props} showActions={true} />
      </div>
    </>
  );
};

export default SummaryOfChangesPage;
