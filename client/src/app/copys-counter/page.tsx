import DesktopAppWrapper from "../(desktop)/DesktopAppWrapper";
import styles from "./page.module.scss";

export default function CopysCounter() {
	return (
		<DesktopAppWrapper
			color="bisque"
			title="Copy's Counter"
			iconSrc="/love-copy.svg" // TODO: hmm this source is related to where the DesktopAppWrapper is used?
		>
			<div className={styles.page}>{"hello"}</div>
		</DesktopAppWrapper>
	);
}
