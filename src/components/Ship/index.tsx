import { IShip } from "../../interfaces";
import styles from "./Ship.module.scss";

interface ShipProps {
	ship: IShip;
}

export function Ship(props: ShipProps): JSX.Element {
	return <div className={styles.ship}>{props.ship.sprite}</div>;
}
