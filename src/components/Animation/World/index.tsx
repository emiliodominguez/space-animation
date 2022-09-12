import { useScroll } from '../../../contexts';
import { AnimatedItem } from '../../../interfaces';
import styles from './World.module.scss';

interface WorldProps extends AnimatedItem {}

export function World(_props: WorldProps): JSX.Element {
	const { normalized } = useScroll();

	return (
		<div className={styles.world}>
			{/* Sky */}
			<img className={styles.sky} src="/assets/scene-1/sky.png" alt="World sky" style={{ '--sky-opacity': `${1 - normalized * 4}` } as Record<string, string>} />
			{/* Floor */}
			<img className={styles.floor} src="/assets/scene-1/floor.png" alt="World floor" style={{ '--floor-y': `${normalized * 100 * 5}%` } as Record<string, string>} />
		</div>
	);
}
