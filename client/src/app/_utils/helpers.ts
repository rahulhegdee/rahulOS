export function classNames(
	...classNames: ReadonlyArray<
		string | { [key: string]: boolean | undefined } | undefined
	>
): string {
	const classNameArr = filterMap(classNames, (className) => {
		if (className == null) {
			return;
		}
		if (isString(className)) {
			return className;
		}
		return Object.entries(className)
			.filter(([, value]) => value)
			.map(([key]) => key);
	});
	return classNameArr.filter(isNonNullable).join(" ");
}

export function isNonNullable<T>(
	value: T | null | undefined
): value is NonNullable<T> {
	return value != null;
}

export function filterMap<T, U>(
	value: ReadonlyArray<T | null | undefined>,
	fn: (val: T | null | undefined) => U | null | undefined
): NonNullable<U>[] {
	return value.map(fn).filter(isNonNullable);
}

export function isString<T>(val: T | string): val is string {
	return typeof val === "string";
}
