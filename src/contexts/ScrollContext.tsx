import { createContext, PropsWithChildren, useContext, useState, useEffect } from 'react';

interface IScrollContext {
	percentage: number;
}

const ScrollContext = createContext({} as IScrollContext);

// let lastScrollTop = 0;

export function ScrollProvider(props: PropsWithChildren<unknown>): JSX.Element {
	const [percentage, setPercentage] = useState<number>(0);

	function handleScroll(): void {
		const percentage = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
		// const scrollDirection = lastScrollTop < document.documentElement.scrollTop ? 1 : -1;
		setPercentage(percentage);
		// lastScrollTop = document.documentElement.scrollTop;
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return <ScrollContext.Provider value={{ percentage }}>{props.children}</ScrollContext.Provider>;
}

export function useScroll(): IScrollContext {
	const context = useContext(ScrollContext);

	if (!Object.entries(context).length) {
		throw new Error('useScroll must be used within ScrollContext');
	}

	return context;
}
