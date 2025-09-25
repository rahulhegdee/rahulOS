"use client";

import { useIsMobile } from "./_hooks/useIsMobile";
import DesktopLayout from "./(desktop)/DesktopLayout";
import Loading from "./loading";

export default function LayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isMobile, isLoading } = useIsMobile();

	if (isLoading) {
		return <Loading />;
	}

	if (isMobile) {
		return children;
	}

	return <DesktopLayout>{children}</DesktopLayout>;
}
