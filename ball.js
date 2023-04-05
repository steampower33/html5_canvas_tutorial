export class Ball {
	constructor(stageWidth, stageHeight, radius, speed) {
		this.radius = radius;
		this.vx = speed;
		this.vy = speed;

		const diameter = this.radius * 2;
		this.x = diameter + (Math.random() * stageWidth - diameter);
		this.y = diameter + (Math.random() * stageHeight - diameter);
	}

	draw(ctx, stageWidth, stageHeight) {
		this.x = thix.vx;
		this.y = this.vy;
	}

	bounceWindow(stageWidth, stageHeight) {
		const minX = this.radius;
		const maxX = stageWidth - this.radius;
		const minY = this.radius;
		const MaxY = stageHeight - this.radius;

		if (this.x <= minX || this.x >= maxX) {
			this.vx *= -1;
		}
	}
}