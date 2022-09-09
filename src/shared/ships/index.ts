import { IShip } from "../../interfaces";
import { ship1 } from "./ship-1";
import { ship2 } from "./ship-2";
import { ship3 } from "./ship-3";
import { ship4 } from "./ship-4";
import { ship5 } from "./ship-5";

export const ships = Object.freeze<IShip[]>([
    { id: 1, name: "Ship 1", sprite: ship1 },
    { id: 2, name: "Ship 2", sprite: ship2 },
    { id: 3, name: "Ship 3", sprite: ship3 },
    { id: 4, name: "Ship 4", sprite: ship4 },
    { id: 5, name: "Ship 5", sprite: ship5 },
]);
