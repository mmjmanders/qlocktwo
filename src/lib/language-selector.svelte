<script lang="ts">
	import { Language } from '$lib';

	export let language: Language;

	$: languages = Object.values(Language);
</script>

<div class="language-selector">
	{#each languages as lang, i}
		<div
			class="language"
			class:active={lang === language}
			on:click={() => (language = Language[lang])}
		>
			{lang}
		</div>
		{#if i < languages.length - 1}
			<span>|</span>
		{/if}
	{/each}
</div>

<style lang="scss">
	.language-selector {
		display: flex;
		gap: 8px;
		color: var(--qt-lang-selector-color);

		.language {
			opacity: var(--qt-inactive-opacity);
			text-transform: uppercase;
			cursor: pointer;
			background: none;
			border: none;
			outline: none;
			box-shadow: none;
			padding: 0;

			&.active {
				opacity: var(--qt-active-opacity);
			}
		}
	}
</style>
