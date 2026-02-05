<script lang="ts">
	let { index, date }: { index: number; date: Date } = $props();

	const isOn = $derived<boolean>(index < date.getMinutes() % 5);
	const style = $derived.by<string>(() => (isOn ? 'on' : 'off'));
</script>

<div class="dot-{index} absolute font-icon text-xxs/4 {style}">&#xf111;</div>

<style>
	.dot-0 {
		left: 0;
		top: 0;
	}

	.dot-1 {
		right: 0;
		top: 0;
	}

	.dot-2 {
		right: 0;
		bottom: 0;
	}

	.dot-3 {
		left: 0;
		bottom: 0;
	}
</style>
