import { useScroll, useShip } from '../../contexts';
import { clamp, className } from '../../shared';
import { Space, World, Steam, MillersPlanet, Earth } from '../Animation';
import { Ship } from '../Ship';
import styles from './App.module.scss';

const chatBubbles = Object.freeze([
	{ message: 'Ah mirá que lindo planetita de agua...', range: [20, 30], toLeft: true },
	{ message: 'Esa maniobra nos va a costar 51 años...', range: [30, 40] },
	{ message: 'Salgamos de acá maravilla...', range: [40, 50], toLeft: true }
]);

export function App(): JSX.Element {
	const { percentage } = useScroll();
	const { selectedShip } = useShip();

	return (
		<main>
			<Ship
				ship={selectedShip}
				style={{ '--ship-y': `${-clamp(percentage, 0, 25)}vh` } as Record<string, string>}
				{...className(styles.ship, {
					[styles.flying]: percentage > 0,
					[styles.enterPlanet]: percentage >= 95
				})}>
				{chatBubbles.map(
					bubble =>
						percentage >= bubble.range[0] &&
						percentage <= bubble.range[1] && (
							<div key={bubble.message} {...className(styles.bubble, { [styles.toLeft]: bubble.toLeft })}>
								{bubble.message}
							</div>
						)
				)}
			</Ship>
			<Space />
			<World />
			<Steam />
			<MillersPlanet />
			<Earth />

			{percentage >= 95 && (
				<div className={styles.curtain}>
					<h1>THE END</h1>
					<button onClick={() => document.documentElement.scrollTo({ top: 0 })}>Reset</button>
				</div>
			)}
		</main>
	);
}
