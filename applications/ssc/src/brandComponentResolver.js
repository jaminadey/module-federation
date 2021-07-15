//const brand = "default";
const brand = "brand_x";

const brandComponent = {    
    "PolicySummary": {
        "default": import("ssc/PolicySummary")
    },
    "PolicySummaryCards": {
        "brand_x": import("ssc_brand_x/PolicySummaryCards"),
        "default": import("ssc/PolicySummaryCards")
    },
    "PolicyDetail": {
        "brand_x": import("ssc_brand_x/PolicyDetail"),
        "default": import("ssc/PolicyDetail")
    },
    "AmendmentsRouter": {
        "default": import("amendments/AmendmentsRouter")
    }
};

const resolveComponent = (name) => {

    const componentResolver = brandComponent[name];
    if (componentResolver === undefined)
        throw Error(`Cannot resolve component: "${name}"`);
    
    return () => componentResolver[brand] || componentResolver["default"];

};

export default resolveComponent;