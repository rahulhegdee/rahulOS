import React from "react";
import { Tooltip as ReactTooltip } from "radix-ui";
import styles from "./Tooltip.module.scss";

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
					<ReactTooltip.Content
						className={styles.tooltipContent}
						sideOffset={10}
					>
						<div className={titleClassName}>{title}</div>
					</ReactTooltip.Content>
				</ReactTooltip.Portal>
			</ReactTooltip.Root>
		</ReactTooltip.Provider>
	);
});
