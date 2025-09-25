"use client";

import Link from "next/link";
import { useIsMobile } from "../_hooks/useIsMobile";
import { Colors } from "../_utils/colors";
import { classNames } from "../_utils/helpers";
import styles from "./DesktopAppWrapper.module.scss";
import React from "react";

export default function DesktopAppWrapper({
	children,
	title,
	color,
	iconSrc,
}: {
	children: React.ReactNode;
	title: string;
	color: string;
	iconSrc: string;
}) {
	// TODO: Right now, all apps have to pass their color and their title in here and wrap themselves in this component
	// An alternative is to keep a list of all apps and their color and title and then based on the active app, show its info here
	// But that alternative won't work when we have multiple apps side by side I think?
	const { isMobile } = useIsMobile();

	const colorStyle = { backgroundColor: color, filter: "brightness(0.9)" };

	if (isMobile) {
		return children;
	}

	return (
		<div className={styles.appBoundary}>
			<div className={styles.header} style={colorStyle}>
				<div className={styles.leftHeader}>
					{/* TODO: The header should be a darker colored version of the app under it and it should have the app name bolded... */}
					<div className={styles.windowControls}>
						<Link
							href="/"
							className={classNames(styles.circle, Colors.LIGHT_RED)}
						/>
						<Link
							href="/"
							className={classNames(styles.circle, Colors.MUSTARD)}
						/>
						<Link
							href="/" // TODO: Set this to open the app in full screen (using state)
							className={classNames(styles.circle, Colors.LIGHT_GREEN)}
						/>
					</div>
					<div className={styles.title}>{title}</div>
				</div>
				<img src={iconSrc} alt={title} className={styles.icon} />
			</div>
			<div className={styles.body}>{children}</div>
		</div>
	);
}
