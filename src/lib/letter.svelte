<script lang="ts">
	export let letter: string;
	export let isOn: boolean;
</script>

<div class="letter" class:active={isOn}>
	{letter}
</div>

<style lang="scss">
	.letter {
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		font-size: 48px;
		width: 60px;
		height: 66px;
		color: var(--qt-display-color);
		opacity: var(--qt-inactive-opacity);

		&.active {
			opacity: 1;
		}
	}
</style>
