import { information } from "@/constants";
import Image from "next/image";
import React from "react";

const Heroes = () => {
	return (
		<div className="flex flex-col items-center justify-center max-w-5xl">
			<div className="flex items-center">
				<div className="relative w-[300px] h-[300px] sm:w-[350px sm:h-[350px] md:h-[400px] md:w-[400px]">
					<Image
						src={information.documentsLight}
						fill
						className="object-contain dark:hidden"
						alt="Documents"
					/>
					<Image
						src={information.documentsDark}
						fill
						className="object-contain hidden dark:block"
						alt="Documents"
					/>
				</div>
				<div className="relative w-[400px] h-[400px] hidden md:block ">
					<Image
						src={information.readingLight}
						fill
						className="object-contain dark:hidden"
						alt="Reading"
					/>
					<Image
						src={information.readingDark}
						fill
						className="object-contain hidden dark:block"
						alt="Reading"
					/>
				</div>
			</div>
		</div>
	);
};

export default Heroes;
