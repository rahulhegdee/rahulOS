import styles from "./page.module.scss";
import Markdown from "@/app/mdx-pages/Markdown.mdx";

export default function Home() {
	return (
		<div className={styles.page}>
			<Markdown />
		</div>
	);
}
