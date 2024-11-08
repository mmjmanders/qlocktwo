<script lang="ts">
	import { Language } from '$lib';

	interface Props {
		letter: string;
		isOn: boolean;
		language: keyof typeof Language;
		index: number;
	}

	let { letter, isOn, language, index }: Props = $props();
</script>

<div class="letter {language} index-{index}" class:active={isOn}>
	{letter}
</div>

<style lang="scss">
	.letter {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		color: var(--qt-display-color);
		opacity: var(--qt-inactive-opacity);

		&.en.index-104::after {
			display: block;
			position: absolute;
			right: 15%;
			content: "'";
		}

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
