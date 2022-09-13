import { planet } from './planet';
import { useScroll } from '../../../contexts';
import { clamp } from '../../../shared';
import styles from './MillersPlanet.module.scss';

export function MillersPlanet(): JSX.Element {
	const { normalized } = useScroll();

	return (
		<div
			className={styles.planet}
			style={
				{
					'--planet-y': `${125 * normalized}vh`,
					'--planet-x': `${25 * normalized}vw`,
					'--planet-opacity': `${clamp(normalized * 5, 0.35, 1)}`,
					'--planet-scale': `${clamp(normalized * 5, 0.25, 1)}`
				} as Record<string, string>
			}>
			{planet}
		</div>
	);
}
