import React from "react";
import { FormControl } from "react-bootstrap";

const CreditCardForm = (props) => {

    return (
        <>
            <h3>Card Payment</h3>
            <p>Enter you credit or debit card details below (Visa or Mastercard). No transaction fees apply.</p>
            <label>Card number</label>
            <FormControl type="text" />
            <div style={{ marginTop: 10 }}>
                <div style={{ width: 240, float: "left" }}>
                    <label>Expiry date</label>
                    <FormControl type="text" placeholder="MM/YY" />
                </div>
                <div style={{ width: 240, float: "left", marginLeft: 20 }}>
                    <label>CVC</label>
                    <FormControl type="text" />
                </div>
            </div>
        </>
    )
};

export default CreditCardForm;