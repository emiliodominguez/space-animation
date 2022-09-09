import { ships } from "../../shared";
import { Ship } from "../Ship";
import styles from "./ShipSelection.module.scss";

interface ShipSelectionProps {}

export function ShipSelection(props: ShipSelectionProps): JSX.Element {
	return (
		<div className={styles.shipSelection}>
			{ships.map((ship) => (
				<Ship key={ship.name} ship={ship} />
			))}
		</div>
	);
}
