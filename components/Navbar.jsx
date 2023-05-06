import React from "react";

const Navbar = () => {
	return (
		<nav className="fixed top-0 w-full flex justify-center z-30">
			<div className="my-6 bg-light-900 bg-opacity-70 backdrop-blur-sm rounded-full">
				<ul className="flex gap-8 py-2 px-1 items-center">
					<li className="bg-dark-900 rounded-full py-1 px-4">Home</li>
					<li className="py-1 px-4">Profile</li>
					<li className="py-1 px-4">Contact</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
