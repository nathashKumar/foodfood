import React from "react";

const withPopularStates = (WrappedComponent) => {

	return (props) => {

		const sayHello = () => {
			alert("his");
		};

		return (
			<WrappedComponent {...this.props} sayHello={sayHello} />
		);
	};
	
};

export default withPopularStates;