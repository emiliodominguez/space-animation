import { useState, useRef, useEffect } from 'react';
import { useShip } from '../../contexts';
import { className } from '../../shared';
import { Steam } from '../Animation';
import { Ship } from '../Ship';
import styles from './App.module.scss';

// let lastScrollTop = 0;

export function App(): JSX.Element {
	const { selectedShip } = useShip();
	const [scrollPercentage, setScrollPercentage] = useState<number>(0);
	const shipRef = useRef<HTMLDivElement>(null);

	function handleScroll(): void {
		const percentage = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
		// const scrollDirection = lastScrollTop < document.documentElement.scrollTop ? 1 : -1;
		setScrollPercentage(percentage);
		// lastScrollTop = document.documentElement.scrollTop;
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<main>
			<Ship
				ref={shipRef}
				ship={selectedShip}
				{...className(styles.ship, {
					[styles.flying]: scrollPercentage > 0
				})}
			/>

			<Steam visible={scrollPercentage > 0} hidden={scrollPercentage > 25} />
		</main>
	);
}
