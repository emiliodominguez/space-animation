import { useState } from 'react';
import { useShip } from '../../contexts';
import { IShip } from '../../interfaces';
import { className, ships } from '../../shared';
import { Ship } from '../Ship';
import styles from './ShipSelection.module.scss';

interface ShipSelectionTogglerProps {
	ship: IShip;
	open: () => void;
}

interface ShipSelectionProps {
	close: () => void;
}

export function ShipSelectionToggler(props: ShipSelectionTogglerProps): JSX.Element {
	return (
		<button className={styles.toggler} onClick={props.open}>
			<Ship ship={props.ship} />
		</button>
	);
}

export function ShipSelection(props: ShipSelectionProps): JSX.Element {
	const { selectedShip, setSelectedShip } = useShip();
	const [currentShip, setCurrentShip] = useState<IShip>(selectedShip);

	return (
		<div className={styles.container}>
			<Ship key={currentShip.id} ship={currentShip} className={styles.ship} />

			<div className={styles.navigation}>
				{ships.map(ship => (
					<button
						key={ship.name}
						onClick={() => setCurrentShip(ship)}
						{...className(styles.thumb, {
							[styles.selected]: ship.id === currentShip.id
						})}>
						<Ship ship={ship} />
					</button>
				))}
			</div>

			<button
				className={styles.selectBtn}
				onClick={() => {
					setSelectedShip(currentShip);
					props.close();
				}}>
				Select this ship
			</button>
		</div>
	);
}
