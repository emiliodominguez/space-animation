import { useRef, useEffect } from 'react';
import styles from './Space.module.scss';

export function Space(): JSX.Element {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const { current: stars } = useRef<Star[]>([]);
	const starsAmount = 100;

	useEffect(() => {
		if (!canvasRef.current) return;

		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		for (let i = 0; i < starsAmount; i++) {
			const x = Math.round(Math.random() * window.innerWidth);
			const y = Math.round(Math.random() * window.innerHeight);
			const length = 1 + Math.random() * 2;
			const opacity = Math.random();
			const star = new Star(x, y, opacity, length);
			stars.push(star);
		}

		setInterval(() => {
			if (context) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				for (const star of stars) star.draw(context);
			}
		}, 1000 / 60);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <canvas ref={canvasRef} className={styles.canvas} />;
}

class Star {
	private factor: number;
	private increment: number;

	constructor(private x: number, private y: number, private opacity: number, private length: number) {
		this.factor = 1;
		this.increment = Math.random() * 0.03;
	}

	draw(context: CanvasRenderingContext2D): void {
		context.rotate((Math.PI * 1) / 10);
		context.save();
		context.translate(this.x, this.y);

		if (this.opacity > 1) {
			this.factor = -1;
		} else if (this.opacity <= 0) {
			this.factor = 1;

			this.x = Math.round(Math.random() * window.innerWidth);
			this.y = Math.round(Math.random() * window.innerHeight);
		}

		this.opacity += this.increment * this.factor;

		context.beginPath();

		for (let i = 5; i--; ) {
			context.lineTo(0, this.length);
			context.translate(0, this.length);
			context.rotate((Math.PI * 2) / 10);
			context.lineTo(0, -this.length);
			context.translate(0, -this.length);
			context.rotate(-((Math.PI * 6) / 10));
		}

		context.lineTo(0, this.length);
		context.closePath();
		context.fillStyle = `rgba(255, 255, 200, ${this.opacity})`;
		context.shadowBlur = 5;
		context.shadowColor = '#ffffff';
		context.fill();
		context.restore();
	}
}
