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
				<div className={styles.body}>{children}</div>
				<div className={styles.dock}>
					<App
						color={Colors.ORANGE}
						title="About"
						icon={<img src="/about.svg" alt="About" className={styles.icon} />}
					/>
					<App
						color={Colors.WHITE}
						title="System Settings"
						icon={
							<img src="/settings.svg" alt="About" className={styles.icon} />
						}
					/>
					<App
						color={Colors.BLUE_GREEN}
						title="Crog's World"
						icon={<img src="/test.svg" alt="About" className={styles.icon2} />}
					/>
					<App
						color={Colors.TAN}
						title="Copy's Counter"
						icon={<img src="/copy.svg" alt="About" className={styles.icon} />}
					/>
					<App color={Colors.BLACK} title="TBD" disabled={true} />
					<div className={classNames(styles.app2)}></div>
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
