"use client";

import React from "react";
import { useIsMobile } from "./_hooks/useIsMobile";
import MobileHome from "./(mobile)/MobileHome";
import DesktopHome from "./(desktop)/DesktopHome";

export default function Home() {
	// TODO: Layout currently handles all loading which is a little weird.
	const { isMobile } = useIsMobile();

	if (isMobile) {
		return <MobileHome />;
	}
	return <DesktopHome />;
}
