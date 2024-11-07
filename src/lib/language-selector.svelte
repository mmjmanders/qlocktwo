<script lang="ts">
	import { Language } from '$lib';

	interface Props {
		language: Language;
	}

	let { language = $bindable() }: Props = $props();

	let languages = $derived(Object.values(Language));
</script>

<div class="language-selector">
	{#each languages as lang, i}
		<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
		<div
			class="language"
			class:active={lang === language}
			onclick={() => (language = Language[lang])}
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
