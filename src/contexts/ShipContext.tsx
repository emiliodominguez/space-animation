import { createContext, Dispatch, SetStateAction, PropsWithChildren, useContext, useState } from 'react';
import { ShipSelectionToggler, ShipSelection } from '../components';
import { IShip } from '../interfaces';
import { ships } from '../shared';

interface IShipContext {
	selectedShip: IShip;
	setSelectedShip: Dispatch<SetStateAction<IShip>>;
}

const ShipContext = createContext({} as IShipContext);

export function ShipProvider(props: PropsWithChildren<unknown>): JSX.Element {
	const [shipSelectionOpen, setShipSelectionOpen] = useState<boolean>(false);
	const [selectedShip, setSelectedShip] = useState<IShip>(ships[0]);

	return (
		<ShipContext.Provider value={{ selectedShip, setSelectedShip }}>
			{props.children}

			<ShipSelectionToggler open={() => setShipSelectionOpen(true)} ship={selectedShip} />
			{shipSelectionOpen && <ShipSelection close={() => setShipSelectionOpen(false)} />}
		</ShipContext.Provider>
	);
}

export function useShip(): IShipContext {
	const context = useContext(ShipContext);

	if (!Object.entries(context).length) {
		throw new Error('useShip must be used within ShipContext');
	}

	return context;
}
