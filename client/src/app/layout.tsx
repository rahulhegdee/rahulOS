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
					<App color={Colors.BLUE} title="Copy's Counter" />
					<div className={classNames(styles.app, Colors.PURPLE)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
					<div className={classNames(styles.app, Colors.PINK)}></div>
				</div>
			</body>
		</html>
	);
}

interface AppProps {
	color: string;
	title: string;
}
const App = React.memo<AppProps>(function AppFn({ color, title }) {
	return (
		<Tooltip>
			<div className={styles.appContainer}>
				<div className={classNames(styles.app, color)}></div>
				{title}
			</div>
		</Tooltip>
	);
});
