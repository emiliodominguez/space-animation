import { useScroll } from '../../../contexts';
import { clamp } from '../../../shared';
import { planet } from './planet';
import styles from './Earth.module.scss';

export function Earth(): JSX.Element {
	const { normalized } = useScroll();

	return (
		<div
			className={styles.planet}
			style={
				{
					'--planet-y': `${clamp(5 * normalized, 2, 5)}vh`,
					'--planet-x': `${clamp(20 * normalized, 2, 10)}vw`,
					'--planet-opacity': `${clamp(normalized * 1.15, 0.1, 1)}`,
					'--planet-scale': `${clamp(3 * normalized, 0.1, 3)}`
				} as Record<string, string>
			}>
			{planet}
		</div>
	);
}
