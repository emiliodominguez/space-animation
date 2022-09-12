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
					'--planet-y': `${clamp(150 * normalized, 2, 150)}vh`,
					'--planet-x': `${clamp(25 * normalized, 2, 15)}vw`,
					'--planet-opacity': `${clamp(normalized * 3, 0.25, 1)}`,
					'--planet-scale': `${clamp(normalized * 2, 0.25, 0.85)}`
				} as Record<string, string>
			}>
			{planet}
		</div>
	);
}
