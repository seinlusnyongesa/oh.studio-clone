import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
//url, title
const videoMimeTypes = new Set(["mp4", "mkv"]);
const Project = ({ url, title }) => {
	const [show, setShow] = useState(false);
	const mime = url.substring(url.lastIndexOf(".") + 1);
	const isVideo = videoMimeTypes.has(mime);
	return (
		<div className="h-[20rem] md:h-[26rem]">
			<div
				className="group w-full mb-8 md:mb-0 relative bg-white h-[80%] md:h-full"
				onMouseEnter={() => setShow(true)}
				onMouseLeave={() => setShow(false)}
			>
				<a href="#">
					{!isVideo && (
						<Image
							src={url}
							alt="discussion"
							fill
							sizes="(max-width: 768px) 100vw,
                50vw"
							className="object-cover rounded-lg z-10"
						/>
					)}
					{isVideo && (
						<video
							autoPlay
							muted
							loop
							style={{ width: "100%", height: "100%" }}
							className="absolute"
						>
							<source src={url} />
							Your browser does not support the video tag
						</video>
					)}
					<AnimatePresence>
						{show && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: [1, 0, 0] }}
								transition={{ duration: 1 }}
								className="absolute w-full rounded-lg z-20 h-full bg-light-900 backdrop-blur-md bg-opacity-25"
							>
								<div className="flex justify-between px-4 pt-3 items-center ">
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, type: "spring" }}
									>
										<p className="capitalize font-semibold text-xl">{title}</p>
									</motion.div>

									<motion.button
										initial={{ x: -10, y: 20, opacity: 0.5 }}
										animate={{ x: 0, y: 0, opacity: 1 }}
										exit={{ x: -10, y: 20, opacity: 0.5 }}
										transition={{ duration: 0.5 }}
										className="bg-dark-900 p-5 rounded-full"
									>
										<FaArrowRight className="-rotate-45 font-extralight" />
									</motion.button>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</a>
			</div>
			<div className="-mt-6 md:hidden">
				<p className="">{title}</p>
			</div>
		</div>
	);
};

export default Project;
