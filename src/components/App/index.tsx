import { useScroll, useShip } from '../../contexts';
import { clamp, className } from '../../shared';
import { Scene1 } from '../Animation';
import { Ship } from '../Ship';
import styles from './App.module.scss';

export function App(): JSX.Element {
	const { percentage } = useScroll();
	const { selectedShip } = useShip();

	return (
		<main>
			<Ship
				ship={selectedShip}
				{...className(styles.ship, { [styles.flying]: percentage > 0 })}
				style={{ '--ship-y': `${-clamp(percentage, 0, 25)}vh` } as Record<string, string>}
			/>
			<Scene1 />
		</main>
	);
}
