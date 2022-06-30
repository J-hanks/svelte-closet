<script type="ts">
	export let selected_ui_libraries = new Array;

	import { available_ui_libraries } from '$src/stores/main_store';
	// User cant unselect all
	// Minimun of One UI library selected
	let last_selected = 'carbon';
	$: {
		if (selected_ui_libraries.length == 0) {
			selected_ui_libraries = [last_selected];
		}
	}
	let on_select = (event: any) => {
		last_selected = event.target.value;
	};
</script>

<div class="labels_container flex  flex-row ">
	{#each available_ui_libraries as ui_library (ui_library.value)}
		<label
			class="ui_option_label"
			class:selected={selected_ui_libraries.includes(ui_library.value)}
		>
			<input
				type="checkbox"
				on:click={on_select}
				bind:group={selected_ui_libraries}
				value={ui_library.value}
			/>
			{ui_library.label}
		</label>
	{/each}
</div>

<style>
	.ui_option_label:hover {
		background: rgba(13, 14, 90, 0.8);
		box-shadow: 3px 2px 5px rgba(29, 30, 108, 0.8);
		font-size: larger;
	}
	.ui_option_label {
		color: white;
		font-weight: bold;
		font-size: large;
		background: rgba(3, 4, 65, 0.8);
		padding: 0.6rem;
		margin: 0rem 0.6rem;
		border-radius: 5px;
		border: 1px solid rgb(3, 4, 65);
		box-shadow: 3px 2px 5px rgba(3, 4, 65, 0.8);
		transition: all 250ms ease-in;
		display: inline-block;
		font-family: 'Courier New', Courier, monospace;
	}
	.labels_container {
		margin: 0.5rem 0.6rem 1rem;
	}
	.ui_option_label.selected {
		background: rgba(13, 94, 21, 0.8);
		box-shadow: 3px 2px 5px green;
		border-color: green;
	}
	.ui_option_label.selected:hover {
		background: rgba(255, 0, 0, 0.7);
		box-shadow: 3px 2px 5px rgb(255, 61, 61);
		border-color: rgb(255, 61, 61);
	}

	.ui_option_label > input {
		display: none;
	}
</style>
