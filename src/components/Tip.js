import React, { Component } from "react";
import "./Tip.css";
import Lightbulb from "../images/lightbulb.png";
export default  Tip extends Component {
	render() {
		return (
			<div className="tip">
				<img alt="LightBulb" width={30} height={30} src={Lightbulb} />
				<div className="tip-content">{this.props.text}</div>
			</div>
		);
	}
}
