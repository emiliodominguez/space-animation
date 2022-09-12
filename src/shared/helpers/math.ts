/**
 * Normalizes a value
 */
export function normalize(value: number, min: number, max: number): number {
	return (value - min) / (max - min);
}

/**
 * Clamps a number between min and max values
 */
export function clamp(number: number, min: number, max: number): number {
	return Math.max(min, Math.min(number, max));
}
