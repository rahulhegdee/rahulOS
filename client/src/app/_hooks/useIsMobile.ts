"use client";

import { useState, useEffect } from "react";

export const useIsMobile = (breakpoint = 768) => {
	const [isMobile, setIsMobile] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < breakpoint);
			setIsLoading(false);
		};

		checkIfMobile();

		window.addEventListener("resize", () => {
			setIsMobile(window.innerWidth < breakpoint);
		});

		return () =>
			window.removeEventListener("resize", () => {
				setIsMobile(window.innerWidth < breakpoint);
			});
	}, [breakpoint]);

	return { isMobile, isLoading };
};
