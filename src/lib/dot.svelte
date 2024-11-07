<script lang="ts">
	interface Props {
		index: number;
		isOn: boolean;
	}

	let { index, isOn }: Props = $props();
</script>

<div class="dot dot-{index} fa-solid fa-circle" class:active={isOn}></div>

<style lang="scss">
	.dot {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 4.8vh;
		height: 4.8vh;
		color: var(--qt-display-color);
		opacity: var(--qt-inactive-opacity);

		@media screen and (orientation: landscape) {
			font-size: 1.5vh;
		}

		@media screen and (orientation: portrait) {
			font-size: 2vw;
		}

		&.active {
			opacity: 1;
			text-shadow: var(--qt-display-text-shadow);
		}

		&-0 {
			top: 0;
			left: 0;
		}

		&-1 {
			top: 0;
			right: 0;
		}

		&-2 {
			bottom: 0;
			right: 0;
		}

		&-3 {
			bottom: 0;
			left: 0;
		}
	}
</style>
