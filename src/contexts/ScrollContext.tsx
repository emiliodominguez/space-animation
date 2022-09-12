import { createContext, PropsWithChildren, useContext, useState, useEffect } from 'react';
import { normalize } from '../shared';

interface ScrollData {
	percentage: number;
	normalized: number;
	pixels: number;
	direction: ScrollDirection;
}

interface IScrollContext extends ScrollData {}

export enum ScrollDirection {
	Idle = 0,
	Down = 1,
	Up = -1
}

const ScrollContext = createContext({} as IScrollContext);

let lastScrollTop = 0;

export function ScrollProvider(props: PropsWithChildren<unknown>): JSX.Element {
	const [scrollData, setScrollData] = useState<ScrollData>({
		percentage: 0,
		normalized: 0,
		pixels: 0,
		direction: ScrollDirection.Idle
	});

	function handleScroll(): void {
		const percentage = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
		const normalized = normalize(percentage, 0, 100);
		const pixels = window.scrollY;
		const direction = lastScrollTop < document.documentElement.scrollTop ? ScrollDirection.Down : ScrollDirection.Up;

		setScrollData({ percentage, normalized, pixels, direction });

		lastScrollTop = document.documentElement.scrollTop;
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <ScrollContext.Provider value={scrollData}>{props.children}</ScrollContext.Provider>;
}

export function useScroll(): IScrollContext {
	const context = useContext(ScrollContext);

	if (!Object.entries(context).length) {
		throw new Error('useScroll must be used within ScrollContext');
	}

	return context;
}
