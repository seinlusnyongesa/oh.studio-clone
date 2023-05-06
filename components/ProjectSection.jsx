import React from "react";
import Project from "./Project";

import { projects } from "@/projects";

const ProjectSection = () => {
	return (
		<section id="project relative">
			<div className="relative px-10 w-full">
				<div>
					<div className="relative w-full md:grid grid-cols-2 gap-8">
						{projects.map((p) => (
							<Project key={p.id} title={p.title} url={p.url} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectSection;
