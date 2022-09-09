import { createContext, Dispatch, SetStateAction, PropsWithChildren, useContext, useState } from "react";
import { ShipSelection } from "../components";
import { IShip } from "../interfaces";
import { ships } from "../shared";

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
            <ShipSelection />
            {shipSelectionOpen && <ShipSelection />}
        </ShipContext.Provider>
    );
}

export function useShip(): IShipContext {
    const context = useContext(ShipContext);

    if (!Object.entries(context).length) {
        throw new Error("useShip must be used within ShipContext");
    }

    return context;
}
