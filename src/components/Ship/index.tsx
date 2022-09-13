import { CSSProperties, PropsWithChildren, forwardRef, ForwardedRef } from 'react';
import { IShip } from '../../interfaces';
import { className } from '../../shared';
import styles from './Ship.module.scss';

interface ShipProps {
	ship: IShip;
	className?: string;
	style?: CSSProperties;
}

export const Ship = forwardRef((props: PropsWithChildren<ShipProps>, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<div ref={ref} style={props.style} {...className(styles.ship, props.className)}>
			{props.ship.sprite}
			{props.children}
		</div>
	);
});
