const linear = (time: number): number => time;
const easeInQuad = (time: number): number => Math.pow(time, 2);
const easeOutQuad = (time: number): number => 1 - easeInQuad(1 - time);
const easeInOutQuad = (time: number): number => (time < 0.5 ? easeInQuad(time * 2) / 2 : easeOutQuad(time * 2 - 1) / 2 + 0.5);
const easeInCubic = (time: number): number => Math.pow(time, 3);
const easeOutCubic = (time: number): number => 1 - easeInCubic(1 - time);
const easeInOutCubic = (time: number): number => (time < 0.5 ? easeInCubic(time * 2) / 2 : easeOutCubic(time * 2 - 1) / 2 + 0.5);
const easeInQuart = (time: number): number => Math.pow(time, 4);
const easeOutQuart = (time: number): number => 1 - easeInQuart(1 - time);
const easeInOutQuart = (time: number): number => (time < 0.5 ? easeInQuart(time * 2) / 2 : easeOutQuart(time * 2 - 1) / 2 + 0.5);
const easeInQuint = (time: number): number => Math.pow(time, 5);
const easeOutQuint = (time: number): number => 1 - easeInQuint(1 - time);
const easeInOutQuint = (time: number): number => (time < 0.5 ? easeInQuint(time * 2) / 2 : easeOutQuint(time * 2 - 1) / 2 + 0.5);

/**
 * Visual cheat sheet
 * @see [Link](https://easings.net/)
 */
export const easing = {
	linear,
	easeInQuad,
	easeOutQuad,
	easeInOutQuad,
	easeInCubic,
	easeOutCubic,
	easeInOutCubic,
	easeInQuart,
	easeOutQuart,
	easeInOutQuart,
	easeInQuint,
	easeOutQuint,
	easeInOutQuint
};
