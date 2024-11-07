<script lang="ts">
	import '../styles.scss';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="clock-container">
	{@render children?.()}
</main>

<style lang="scss">
	.clock-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
</style>
