<script lang="ts">
	import { PUBLIC_BUILD_SHA as buildSha } from '$env/static/public';
</script>

<div class="flex w-full justify-center font-mono text-xs">
	{buildSha}
</div>
