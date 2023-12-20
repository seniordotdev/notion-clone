"use client";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { information } from "@/constants";
import { SignInButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Heading = () => {
	const { isAuthenticated, isLoading } = useConvexAuth();
	return (
		<div className="max-w-3xl space-y-4">
			<h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
				Your Ideas, Documents & Plans. Unifid. Welcome to{" "}
				<span className="underline">{information.projectName}</span>
			</h1>
			<h2 className="text-base sm:text-xl md:text-2xl font-medium">
				{information.projectName} is connected workspace where <br />
				better, faster work happens
			</h2>
			{isLoading && (
				<div className="w-full flex items-center justify-center">
					<Spinner size={"lg"} />
				</div>
			)}
			{isAuthenticated && !isLoading && (
				<Button asChild>
					<Link href={"/documents"}>
						Enter {information.projectName}{" "}
						<ArrowRight className="w-4 h-4 ml-2" />
					</Link>
				</Button>
			)}
			{!isAuthenticated && !isLoading && (
				<SignInButton mode="modal">
					<Button>
						Get {information.projectName} free
						<ArrowRight className="w-4 h-4 ml-2" />
					</Button>
				</SignInButton>
			)}
		</div>
	);
};

export default Heading;
