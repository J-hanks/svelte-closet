<script lang="ts">
	import { Theme, RadioButtonGroup, RadioButton } from 'carbon-components-svelte';
	let theme = "g90";
</script>

<svelte:head>
	<title>Svelte Closet - Carbon Design System</title>
</svelte:head>
<h1>Welcome</h1>
<Theme bind:theme />

<RadioButtonGroup legendText="Carbon theme" bind:selected={theme}>
	{#each ['white', 'g10', 'g80', 'g90', 'g100'] as value}
		<RadioButton labelText={value} {value} />
	{/each}
</RadioButtonGroup>
