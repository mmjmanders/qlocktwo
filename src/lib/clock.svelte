<script lang="ts">
	import { default as Letter } from './letter.svelte';
	import { default as Dot } from './dot.svelte';
	import type { ConfigPerLanguage } from '$lib';

	export let date: Date;
	export let config: ConfigPerLanguage;

	export const dots = Array(4);

	$: letters = config.clock.split('');
</script>

<div class="clock">
	{#each letters as letter, i}
		<Letter
			{letter}
			isOn={config.isHourOn(i, date.getHours(), date.getMinutes(), config.hours) ||
				config.isMinuteOn(i, date.getMinutes(), config.minutes)}
		/>
	{/each}
	{#each dots as _, i}
		<Dot isOn={i < date.getMinutes() % 5} index={i} />
	{/each}
</div>

<style lang="scss">
	.clock {
		position: relative;
		display: flex;
		background-color: var(--qt-clock-bg);
		width: 770px;
		height: 770px;
		padding: 55px;
		flex-wrap: wrap;
	}
</style>
