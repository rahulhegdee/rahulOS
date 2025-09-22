import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.scss";
import { classNames } from "./_utils/helpers";
import { Colors } from "./_utils/colors";
import React from "react";
import { Tooltip } from "./_common/Tooltip2";

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
					<App color={Colors.BLUE} title="Crog's World" />
					<App color={Colors.YELLOW} title="Copy's Counter" />
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
		<Tooltip title={title} titleClassName={styles.appContainer}>
			<div className={classNames(styles.app, color)}></div>
		</Tooltip>
	);
});
