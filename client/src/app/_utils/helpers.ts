export function classNames(
	...classNames: ReadonlyArray<string | undefined>
): string {
	return classNames.filter(isNonNullable).join(" ");
}

export function isNonNullable<T>(value: T | null | undefined): value is T {
	return value != null;
}
