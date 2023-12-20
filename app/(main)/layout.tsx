"use client";

import Spinner from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";
import Navigation from "./_components/navigation";
import SearchCommand from "@/components/search-command";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, isLoading } = useConvexAuth();
	if (isLoading) {
		return (
			<div className="h-[100vh] flex items-center justify-center">
				<Spinner size={"lg"} />
			</div>
		);
	}
	if (!isAuthenticated) {
		return redirect("/");
	}
	return (
		<div className="h-[100vh] flex dark:bg-dark">
			<Navigation />
			<main className="flex-1 h-full overflow-y-auto">
				<SearchCommand />
				{children}
			</main>
		</div>
	);
};

export default MainLayout;
