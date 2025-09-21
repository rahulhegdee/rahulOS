"use client";

import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export const Tooltip = React.memo(function TooltipFn({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ReactTooltip id="react-tooltip" content="Hello">
			{children}
		</ReactTooltip>
	);
});
