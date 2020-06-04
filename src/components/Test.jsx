import React from "react";
import {connect} from 'react-redux';

function Test(props) {
	return <h1>Test: {props.testProp}</h1>;
}

export default Test;