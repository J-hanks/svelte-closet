<script lang="ts">
	import ExampleSelector from '$src/lib/index/ExampleSelector.svelte';

	import LibrarySelector from '$src/lib/index/LibrarySelector.svelte';

	import { available_examples, available_ui_libraries } from '$src/stores/main_store';

	// select all available ui libraries
	// is binded to checkbox group
	let selected_ui_libraries = available_ui_libraries.map(({ value }) => {
		return value;
	});

	let selected_example = available_examples[0].value;
</script>

<header style="">
	<h1>Svelte Closet</h1>
	<LibrarySelector bind:selected_ui_libraries />
	<ExampleSelector bind:selected_example />
</header>
<main>
	{#each selected_ui_libraries as ui_library, i (ui_library)}
		<div name={ui_library} class="iframe_container flex-1">
			<iframe class="ui_iframe" title="UI_IFRAME" src="/{ui_library}/{selected_example}">
				<slot />
			</iframe>
		</div>
	{/each}
</main>

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
		max-width: 100%;
	}
	.ui_iframe {
		width: 100%;
		height: 100%;
	}
	.iframe_container {
		width: 100%;
		max-width: 100%;
		overflow: hidden;
		height: 100%;
	}

	h1 {
		padding: 0;
		color: white;
		margin: 0.2rem auto;
		/* background-color: rgba(255, 255, 255, 0.9); */
		border-radius: 5px;
		padding: 0.4rem 0.8rem;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        text-shadow: 5px 5px 10px black;
        /* font-weight: bolder; */
        
			
	}
	header {
		text-align: center;
		font-size: larger;
		background-color: purple;
		/* background-image: url('/closet.jpg'); */
		background-position: center;
		background-size: 70%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		margin: 0;
		min-height: 165px;
	}
</style>
