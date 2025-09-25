import styles from "./loading.module.scss";

export default function Loading() {
	return (
		<div className={styles.loading}>
			<img src="/home.svg" alt="RahulOS" className={styles.icon} />
		</div>
	);
}
