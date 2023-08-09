import React from "react";
import Box from "../ui/Box";
import Icon from "./icons/Icon";

function UserInfo({ user }) {
	return (
		<div className="bg-[#23252f] border select-none max-w-2xl mx-auto w-full h-full rounded-xl flex flex-col py-7 sm:px-5 px-3 drop-shadow">
			<div className="flex md:flex-row flex-col gap-4 h-full">
				<div className="h-full bg-whitetext-white-800/50 backdrop-blur-md rounded-xl p-4 flex md:flex-col flex-row gap-3">
					<img
						src={user.Avatar}
						className="md:h-32 md:w-32 h-16 w-16 bg-gray-50 object-cover block rounded-full self-center"
						alt="avatar"
					/>
					<p className="capitalize md:self-auto self-end text-center lg:text-4xl md:text-3xl text-lg mt-3 text-white font-bold tracking-wider">
						{user.UserName}
					</p>
				</div>
				<div className="flex flex-col md:justify-center md:self-end gap-3 h-full">
					<a
						href={`https://github.com/${user.UserName}`}
						rel="noreferrer"
						target={"_blank"}
						className="capitalize flex flex-none gap-2 hover:text-white-700 group transition-all duration-200 ease-in w-fit md:text-4xl text-3xl flex-wrap py-3 font-black text-gray-400">
						{user.Name !== null ? user.Name : "visit"}
						<Icon />
					</a>
					<Box name="Public Repos:" desc={user.PublicRepos} />
					<Box name="Public Gists:" desc={user.PublicGists} />
					<Box
						name="Profile Created:"
						desc={new Date(user.CreatedAt).toISOString().slice(0, 10)}
					/>
				</div>
			</div>
		</div>
	);
}

export default UserInfo;
