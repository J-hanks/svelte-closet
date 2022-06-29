<script lang="ts">
	import { fly } from 'svelte/transition';

	let iframe;
	function select_ui_library(event) {
		console.log(iframe.src);
		iframe.src = `http://127.0.0.1:3000/${event.target.name}`;
	}
	let ui_libraries = [];
</script>

<header>
	<h1>Svelte Closet</h1>
	<label
		><input type="checkbox" bind:group={ui_libraries} value={'carbon'} />Carbon Design System</label
	>
	<label><input type="checkbox" bind:group={ui_libraries} value={'material'} />Material UI</label>
</header>

<main>
	{#each ui_libraries as ui_library (ui_library)}
		<div name={ui_library} class="iframe_container flex-1">
			<iframe class="ui_iframe" title="UI_IFRAME" src="/{ui_library}">
				<slot />
			</iframe>
		</div>
	{/each}
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	:global(html, body) {
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 0;
		margin: 0;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: row;
	}
	.ui_iframe {
		width: 100%;
		margin-top: 0.7rem;
		height: 100%;
	}
	.iframe_container {
		width: 100%;
		height: 100%;
		transition: all 2s;
	}
	footer {
		display: flex;
		justify-content: center;
	}
	h1 {
		padding: 0.7rem 0 0rem 0;
	}
	header {
		text-align: center;
		font-size: large;
	}
	header > button {
		margin-right: 0.4rem;
	}
</style>
