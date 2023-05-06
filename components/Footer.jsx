import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="px-6 py-8 md:py-12">
				<div className=" md:flex justify-between">
					<div className="w-full text-center md:text-left mb-2">
						<p>&copy; seinlus nyongesa {new Date().getFullYear()}</p>
					</div>
					<div className="w-full flex justify-center md:justify-end ">
						<ul className="flex gap-2">
							<li className="hover:text-dark-500">
								<a href="#" className="capitalize">
									twitter
								</a>
							</li>
							<li className="hover:text-dark-500">
								<a href="#" className="capitalize">
									linkedin
								</a>
							</li>
							<li className="hover:text-dark-500">
								<a href="#" className="capitalize">
									instagram
								</a>
							</li>
							<li className="hover:text-dark-500">
								<a href="#" className="capitalize">
									github
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
