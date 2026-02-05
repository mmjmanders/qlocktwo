<script lang="ts">
	let { isOn, index }: { isOn: boolean; index: number } = $props();
</script>

<div
	class="dot-{index} absolute font-icon text-xxs/4 {isOn ? 'opacity-100' : 'opacity-15'} {isOn
		? 'text-shadow-xs text-shadow-zinc-50'
		: ''}"
>
	&#xf111;
</div>

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
