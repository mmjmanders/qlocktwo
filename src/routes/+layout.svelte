<script lang="ts">
	import '../styles.scss';
</script>

<main class="clock-container">
	<slot />
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
