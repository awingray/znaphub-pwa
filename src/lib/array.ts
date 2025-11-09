export function hasItems<T>(
	arr?: readonly T[] | null,
): arr is readonly [T, ...T[]] {
	return Array.isArray(arr) && arr.length > 0;
}
