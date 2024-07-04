<script lang="ts">
	export let index: number;
	export let isOn: boolean;
</script>

<div class="dot dot-{index} fa-solid fa-circle" class:active={isOn} />

<style lang="scss">
	.dot {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 60px;
		color: var(--qt-display-color);
		opacity: var(--qt-inactive-opacity);

		&.active {
			opacity: 1;
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
