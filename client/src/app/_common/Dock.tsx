import React from "react";
import styles from "./Dock.module.scss";

export const Dock = React.memo(function DockFn({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className={styles.dock}>{children}</div>;
});
