import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.scss";
import { classNames } from "./_utils/helpers";
import { COLORS } from "./_utils/colors";

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
					<div className={classNames(styles.app, COLORS.Orange)}></div>
					<div className={classNames(styles.app, COLORS.Purple)}></div>
					<div className={classNames(styles.app, COLORS.Pink)}></div>
				</div>
			</body>
		</html>
	);
}
