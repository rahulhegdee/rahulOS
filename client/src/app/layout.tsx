import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.scss";
import { classNames } from "./_utils/helpers";
import { Colors } from "./_utils/colors";
import React from "react";
import { Tooltip } from "./_common/Tooltip";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "RahulOS",
	description: "yolo lol",
	icons: [{ url: "/tree-header.png", type: "image/png" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" style={{ height: "100%" }}>
			<body
				className={classNames(
					geistSans.variable,
					geistMono.variable,
					styles.page
				)}
			>
				<div className={styles.header}>
					<img src="/home.svg" alt="Home" className={styles.headerIcon} />
					<div className={styles.title}>RahulOS</div>
					<div className={styles.subtitle}>Recents</div>
				</div>
				<div className={styles.body}>{children}</div>
				<div className={styles.dock}>
					<App
						color={Colors.ORANGE}
						title="About"
						icon={<img src="/about.svg" alt="About" className={styles.icon} />}
					/>
					<App
						color={Colors.GRAY}
						title="System Settings"
						icon={
							<img src="/settings.svg" alt="Settings" className={styles.icon} />
						}
					/>
					<App
						color={Colors.WHITE}
						title="Clog's World"
						icon={
							<img src="/bold-clog.svg" alt="Clog" className={styles.icon2} />
						}
					/>
					<App
						color={Colors.TAN}
						title="Copy's Counter"
						icon={<img src="/copy.svg" alt="Copy" className={styles.icon} />}
					/>
					<App
						color={Colors.BROWN}
						title="TBD"
						disabled={true}
						icon={
							<img src="/question-two.svg" alt="TBD" className={styles.icon} />
						}
					/>
				</div>
			</body>
		</html>
	);
}

interface AppProps {
	icon: React.JSX.Element;
	color: string;
	title: string;
	disabled?: boolean;
}
const App = React.memo<AppProps>(function AppFn({
	icon,
	color,
	title,
	disabled,
}) {
	return (
		<Tooltip title={title} titleClassName={styles.tooltipText}>
			<div
				className={classNames(
					styles.app,
					{ [styles.disabled]: disabled },
					color
				)}
			>
				{icon}
			</div>
		</Tooltip>
	);
});
