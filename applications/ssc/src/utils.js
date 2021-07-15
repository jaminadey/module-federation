
export const DateForDisplay = ({value}) => formatIsoDateForDisplay(value);
export const NumberForDisplay = ({value}) => formatNumberForDisplay(value);

export const formatIsoDateForDisplay = value => new Date(value).toLocaleDateString("en-NZ");
export const formatNumberForDisplay = value => "$" + value.toLocaleString() + ".00";

export const policyTypeDescription = type => {

    const types = {
        "HOM": "Building & Contents Insurance",
        "PMV": "Motor Insurance"
    };

    return types[type];
}

export const PolicyTypeDescription = ({type}) => policyTypeDescription(type);