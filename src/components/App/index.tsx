import { useRef } from 'react';
import { useScroll, useShip } from '../../contexts';
import { className } from '../../shared';
import { Steam } from '../Animation';
import { Ship } from '../Ship';
import styles from './App.module.scss';

export function App(): JSX.Element {
	const { percentage } = useScroll();
	const { selectedShip } = useShip();
	const shipRef = useRef<HTMLDivElement>(null);

	return (
		<main>
			<Ship ref={shipRef} ship={selectedShip} {...className(styles.ship, { [styles.flying]: percentage > 0 })} />
			<Steam />
		</main>
	);
}
