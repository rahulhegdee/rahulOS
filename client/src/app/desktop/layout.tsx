import styles from "./layout.module.scss";
import { Colors } from "../_utils/colors";
import React from "react";
import { App } from "../_common/App";
import { Dock } from "../_common/Dock";

export default function DesktopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={styles.page}>
			<div className={styles.header}>
				<img src="/home.svg" alt="Home" className={styles.headerIcon} />
				<div className={styles.title}>RahulOS</div>
				<div className={styles.subtitle}>Recents</div>
			</div>
			<div className={styles.body}>{children}</div>
			<Dock>
				<App color={Colors.ORANGE} title="About" iconSrc="/about.svg" />
				<App
					color={Colors.GRAY}
					title="System Settings"
					iconSrc="/settings.svg"
				/>
				<App
					color={Colors.WHITE}
					title="Clog's World"
					iconSrc="/bold-clog.svg"
					iconFill={true}
				/>
				<App color={Colors.TAN} title="Copy's Counter" iconSrc="/copy.svg" />
				<App
					color={Colors.BROWN}
					title="TBD"
					disabled={true}
					iconSrc="/question-two.svg"
				/>
			</Dock>
		</div>
	);
}
