import { useScroll } from '../../../contexts';
import { AnimatedItem } from '../../../interfaces';
import { className } from '../../../shared';
import { clouds } from './clouds';
import styles from './Steam.module.scss';

interface SteamProps extends AnimatedItem {}

export function Steam(props: SteamProps): JSX.Element {
	const { percentage } = useScroll();

	return (
		<div
			{...className(styles.steam, {
				[styles.visible]: props.visible || percentage > 0,
				[styles.hidden]: props.hidden || percentage > 10
			})}>
			{clouds.map(cloud => cloud)}
		</div>
	);
}
