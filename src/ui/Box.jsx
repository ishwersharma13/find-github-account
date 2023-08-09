import React from "react";

function Box({ name, desc }) {
	return (
		<div className="flex text-gray-300">
			<span className="tracking-wide">{name}</span>
			<span className="text-blue-700 ml-2">{desc}</span>
		</div>
	);
}

export default Box;
