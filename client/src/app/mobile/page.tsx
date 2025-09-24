import { App, AppWithTitle } from "../_common/App";
import { Dock } from "../_common/Dock";
import { Colors } from "../_utils/colors";
import styles from "./page.module.scss";
import Markdown from "@/app/mdx-pages/Markdown.mdx";

export default function MobileHome() {
	return (
		<div className={styles.page}>
			<div className={styles.header}></div>
			{/* <Markdown /> */}
			<div className={styles.appGrid}>
				<AppWithTitle
					color={Colors.ORANGE}
					title="About"
					iconSrc="/about.svg"
					size="large"
				/>
				<AppWithTitle
					color={Colors.GRAY}
					title="System Settings"
					iconSrc="/settings.svg"
					size="large"
				/>
				<AppWithTitle
					color={Colors.WHITE}
					title="Clog's World"
					iconSrc="/bold-clog.svg"
					iconFill={true}
					size="large"
				/>
				<AppWithTitle
					color={Colors.TAN}
					title="Copy's Counter"
					iconSrc="/copy.svg"
					size="large"
				/>
				<AppWithTitle
					color={Colors.WHITE}
					title="Files"
					iconSrc="/folder.svg"
					size="large"
				/>
				<AppWithTitle
					color={Colors.WHITE}
					title="Photos"
					iconSrc="/photos.svg"
					size="large"
				/>
			</div>
			<Dock>
				<App
					color={Colors.WHITE}
					title="Clog's World"
					iconSrc="/bold-clog.svg"
					iconFill={true}
					size="large"
				/>
				<App
					color={Colors.TAN}
					title="Copy's Counter"
					iconSrc="/copy.svg"
					size="large"
				/>
			</Dock>
		</div>
	);
}
