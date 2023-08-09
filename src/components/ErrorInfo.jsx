import React from "react";

function ErrorInfo({ error }) {
	return (
		<div className="max-w-xl mx-auto w-full">
			<p className="text-center capitalize font-black text-2xl text-gray-400">
				{error}
			</p>
		</div>
	);
}

export default ErrorInfo;
