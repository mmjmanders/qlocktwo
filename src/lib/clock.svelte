<script lang="ts">
	import { default as Letter } from './letter.svelte';
	import { default as Dot } from './dot.svelte';
	import { Config, Language } from '$lib';

	interface Props {
		date: Date;
		config: Config;
		language: keyof typeof Language;
	}

	let { date, config, language }: Props = $props();

	export const dots = Array(4);

	let letters = $derived(config.clock.split(''));
</script>

<div class="clock">
	<div class="container">
		{#each letters as letter, i}
			<Letter
				{letter}
				{language}
				index={i}
				isOn={config.isHourOn(i, date.getHours(), date.getMinutes()) ||
					config.isMinuteOn(i, date.getMinutes())}
			/>
		{/each}
	</div>
	{#each dots as _, i}
		<Dot isOn={i < date.getMinutes() % 5} index={i} />
	{/each}
</div>

<style lang="scss">
	.clock {
		position: relative;
		display: flex;
		background-color: var(--qt-clock-bg);
		justify-content: center;
		align-items: center;

		@media screen and (orientation: landscape) {
			width: 100vh;
			height: 100vh;
		}

		@media screen and (orientation: portrait) {
			width: 100vw;
			height: 100vw;
		}

		.container {
			display: grid;
			grid-template-columns: repeat(11, 1fr);
			grid-template-rows: repeat(10, 1fr);
			width: 90%;
			height: 90%;
		}
	}
</style>
