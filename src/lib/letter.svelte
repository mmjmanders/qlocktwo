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
		color: var(--qt-display-color);
		opacity: var(--qt-inactive-opacity);

		@media screen and (orientation: landscape) {
			font-size: 4.8vh;
		}

		@media screen and (orientation: portrait) {
			font-size: 2.4vh;
		}

		&.active {
			opacity: 1;
			text-shadow: var(--qt-display-text-shadow);
		}
	}
</style>
