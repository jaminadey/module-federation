import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AmendButton = ({policy}) => {

    const history = useHistory();

    return (
        <>            
            <Button variant="outline-secondary" onClick={() => history.push(`/policy/${policy.id}/amend/`)} style={{ width: 100 }}>Edit</Button>
        </>
    )
};

export default AmendButton;
