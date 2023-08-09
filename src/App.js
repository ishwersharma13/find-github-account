import { useState } from "react";
import { PuffLoader } from "react-spinners";

import ErrorInfo from "./components/ErrorInfo";

import Form from "./components/form/Form";
import Title from "./components/Title";
import UserInfo from "./components/UserInfo";

function App() {
	const [loading, setIsLoading] = useState(false);

	const [user, setUser] = useState({
		error: "",
		Avatar: "",
		UserName: "",
		Name: "",
		PublicRepos: "",
		PublicGists: "",
		CreatedAt: "",
	});

	return (
		<div className="App bg-[#23252f] h-screen overflow-auto lg:px-24 md:px-20 px-2 py-10 font-VeryLight">
			<div className="w-full flex flex-col items-center justify-center lg:max-w-6xl md:max-w-4xl max-w-lg mx-auto">
				<Title />
				<Form setUser={setUser} setIsLoading={setIsLoading} loading={loading} />
				<div className="w-full mt-10 flex items-center justify-center">
					{loading ? (
						<PuffLoader color="#36d7b7" />
					) : user.Name !== "" ? (
						<UserInfo user={user} />
					) : (
						user.error.length > 0 && <ErrorInfo error={user.error} />
					)}
				</div>
				{user.error === "" && user.Name === "" && !loading && (
					<p className="max-w-xl mx-auto font-black capitalize lg:text-5xl text-4xl text-center mt-10 w-full text-gray-300">
						see github user profile here.
					</p>
				)}
			</div>
		</div>
	);
}

export default App;
