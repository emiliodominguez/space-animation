import { CSSProperties } from 'react';

export interface AnimatedItem {
	visible?: boolean;
	hidden?: boolean;
	className?: string;
	style?: CSSProperties;
}
