import React from "react";

const Hero = () => {
	return (
		<section id="hero">
			<div className="max-w-2xl mx-auto  pt-36 pb-20 md:pt-40 md:pb-32">
				<div className=" mb-8 ">
					<h1 className="text-4xl md:text-6xl text-center font-bold leading-snug">
						A brand and product designer working with clients globally
					</h1>
				</div>
				<div className="hidden md:flex gap-2 justify-center items-center">
					<span>Expertise</span>
					<ul className="flex gap-2 justify-center">
						<li className="bg-dark-500 px-4 py-1 rounded-full">Branding</li>
						<li className="bg-dark-500 px-4 py-1 rounded-full">Product</li>
						<li className="bg-dark-500 px-4 py-1 rounded-full">
							Design systems
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Hero;
