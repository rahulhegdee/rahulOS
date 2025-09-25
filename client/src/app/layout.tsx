import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.scss";
import { classNames } from "./_utils/helpers";
import React from "react";
import DesktopLayout from "./(desktop)/DesktopLayout";
import LayoutWrapper from "./LayoutWrapper";

const appleSystem = Geist({
	variable: "--font-apple-system",
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
			<body className={classNames(appleSystem.variable, styles.page)}>
				<div className={styles.body}>
					<LayoutWrapper>{children}</LayoutWrapper>
				</div>
			</body>
		</html>
	);
}
