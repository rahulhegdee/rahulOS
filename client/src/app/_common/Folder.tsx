import React from "react";
import styles from "./Folder.module.scss";

interface FolderProps {
	title: string;
	row: number;
	col: number;
}

export const Folder = React.memo(function FolderFn({
	title,
	row,
	col,
}: FolderProps) {
	return (
		<div className={styles.container} style={{ gridRow: row, gridColumn: col }}>
			<div className={styles.folder}>
				<img src="/folder.svg" alt="Folder" className={styles.folderIcon} />
			</div>
			{title}
		</div>
	);
});
