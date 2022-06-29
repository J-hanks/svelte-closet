<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';

	let btClick = () => {
		console.log('btClick');
	};
</script>

<svelte:head>
	<title>Svelte Closet - Carbon Design System</title>
</svelte:head>

<Button on:click={btClick}>Primary button</Button>

<style lang="scss">
</style>
