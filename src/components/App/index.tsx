import { useShip } from "../../contexts";
import { Ship } from "../Ship";
import "./App.module.scss";

export function App(): JSX.Element {
	const { selectedShip } = useShip();

	return <Ship ship={selectedShip} />;
}
