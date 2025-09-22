import React from "react";
import { Tooltip as ReactTooltip } from "radix-ui";

export const Tooltip = React.memo(function TooltipFn({
	title,
	children,
	titleClassName,
}: {
	title: string;
	children: React.ReactNode;
	titleClassName?: string;
}) {
	return (
		<ReactTooltip.Provider>
			<ReactTooltip.Root delayDuration={0}>
				<ReactTooltip.Trigger asChild>{children}</ReactTooltip.Trigger>
				<ReactTooltip.Portal>
					<ReactTooltip.Content className="TooltipContent" sideOffset={5}>
						<div className={titleClassName}>{title}</div>
						<ReactTooltip.Arrow className="TooltipArrow" />
					</ReactTooltip.Content>
				</ReactTooltip.Portal>
			</ReactTooltip.Root>
		</ReactTooltip.Provider>
	);
});
