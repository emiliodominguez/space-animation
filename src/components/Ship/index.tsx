import { IShip } from "../../interfaces";
import { className } from "../../shared";
import styles from "./Ship.module.scss";

interface ShipProps {
	ship: IShip;
	className?: string;
}

export function Ship(props: ShipProps): JSX.Element {
	return (
		<div {...className(styles.ship, props.className)}>
			{props.ship.sprite}
		</div>
	);
}
