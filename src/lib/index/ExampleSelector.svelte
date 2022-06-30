<script type="ts">
	export let selected_example : string;

	import { available_examples } from '$src/stores/main_store';
	// User cant unselect all
	// Minimun of One UI library selected
</script>

<div class="labels_container flex  flex-row ">
	{#each available_examples as example (example.value)}
		<label
			class="ui_option_label"
			class:selected={selected_example === example.value}
		>
			<input
				type="radio"
				bind:group={selected_example}
				value={example.value}
			/>
			{example.label}
		</label>
	{/each}
</div>

<style>
	.ui_option_label:hover {
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 3px 2px 5px rgba(29, 30, 108, 0.8);
		font-size: larger;
	}
	.ui_option_label {
		color: black;
		font-weight: bold;
        background: rgba(214, 214, 214, 0.8);
		padding: 0.4rem 0.8rem;
		margin: 0rem 0.6rem;
		border-radius: 5px;
		border: 1px solid rgb(42);
		box-shadow: 3px 2px 5px rgba(42, 42, 42, 0.8);
		transition: all 250ms ease-in;
		display: inline-block;
		font-family: 'Courier New', Courier, monospace;
	}
	.labels_container {
		margin: 0.5rem 0.6rem 1rem;
	}
	.ui_option_label.selected {
		background: rgba(44, 208, 60, 0.8);
		box-shadow: 3px 2px 5px green;
		border-color: green;
	}
	.ui_option_label > input {
		display: none;
	}
</style>
