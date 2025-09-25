import React from "react";
import { Tooltip } from "../_common/Tooltip";
import { classNames } from "../_utils/helpers";
import styles from "./App.module.scss";
import { OptionalLink } from "./OptionalLink";

interface AppProps {
	iconSrc: string;
	color: string;
	title: string;
	href?: string;
	size?: "small" | "large";
	iconFill?: boolean;
	disabled?: boolean;
}

export const AppWithTitle = React.memo<AppProps>(function AppFn({
	iconSrc,
	color,
	title,
	disabled,
	iconFill,
	href,
	size = "small",
}) {
	return (
		<OptionalLink href={href}>
			<div className={styles.appWithTitle}>
				<App
					iconSrc={iconSrc}
					color={color}
					title={title}
					disabled={disabled}
					iconFill={iconFill}
					size={size}
				/>
				{title}
			</div>
		</OptionalLink>
	);
});

export const App = React.memo<AppProps>(function AppFn({
	iconSrc,
	color,
	title,
	disabled,
	iconFill,
	href,
	size = "small",
}) {
	return (
		<Tooltip title={title} titleClassName={styles.tooltipText}>
			<OptionalLink href={href}>
				<div
					className={classNames(
						styles.app,
						{ [styles.disabled]: disabled, [styles.large]: size === "large" },
						color
					)}
				>
					<img
						src={iconSrc}
						alt={title}
						className={classNames(styles.icon, {
							[styles.iconFill]: iconFill,
						})}
					/>
				</div>
			</OptionalLink>
		</Tooltip>
	);
});
