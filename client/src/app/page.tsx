import { Folder } from "./_common/Folder";
import styles from "./page.module.scss";
import Markdown from "@/app/mdx-pages/Markdown.mdx";

export default function Home() {
	return (
		<div className={styles.page}>
			{/* <Markdown /> */}
			<div className={styles.folderGrid}>
				<Folder title="Notes" row={0} col={10} />
				<Folder title="Secrets" row={5} col={7} />
				<Folder title="Guides" row={5} col={10} />
				<Folder title="Random" row={1} col={2} />
				<Folder title="Fun" row={7} col={3} />
				<Folder title="???" row={4} col={2} />
				<Folder title="readonly" row={2} col={12} />
			</div>
		</div>
	);
}
