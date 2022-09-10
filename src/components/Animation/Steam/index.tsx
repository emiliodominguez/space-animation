import { AnimatedItem } from '../../../interfaces';
import { className } from '../../../shared';
import { clouds } from './clouds';
import styles from './Steam.module.scss';

interface SteamProps extends AnimatedItem {}

export function Steam(props: SteamProps): JSX.Element {
	return (
		<div
			{...className(styles.steam, {
				[styles.visible]: props.visible,
				[styles.hidden]: props.hidden
			})}>
			{clouds.map(cloud => cloud)}
		</div>
	);
}
