import { useRef } from 'react';
import { useScroll } from '../../../../contexts';
import { AnimatedItem } from '../../../../interfaces';
import styles from './World.module.scss';

interface WorldProps extends AnimatedItem {}

export function World(_props: WorldProps): JSX.Element {
	const { normalized } = useScroll();
	const skyRef = useRef<HTMLImageElement>(null);
	const floorRef = useRef<HTMLImageElement>(null);

	return (
		<div className={styles.world}>
			<img
				ref={skyRef}
				className={styles.sky}
				src="/assets/scene-1/sky.png"
				alt="World sky"
				style={{ '--sky-opacity': `${1 - normalized * 2}` } as Record<string, string>}
			/>
			<img
				ref={floorRef}
				className={styles.floor}
				src="/assets/scene-1/floor.png"
				alt="World floor"
				style={{ '--floor-y': `${normalized * 100 * 3}%` } as Record<string, string>}
			/>
		</div>
	);
}
