<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="">
	<div class="flex">
		<Nav />
	</div>
	<div class="p-0">
		<slot />
	</div>
	<div class="flex">
		<Footer />
	</div>
</div>
