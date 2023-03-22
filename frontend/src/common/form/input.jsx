import React from "react";

export default props => (
    <input
    className="form-control"
    placeholder={props.placeholder}
    readOnly={props.readOnly}
    type={props.type} />
)