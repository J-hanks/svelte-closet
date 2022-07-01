<script type="ts">
	import { Field, Input, Radio, Checkbox } from 'svelte-chota';
	let radiovalue: any;
	let checkboxvalue: any;
</script>

<div>
	<h1>Form</h1>
	<h3>Text</h3>
	<div class="flex-row flex-wrap">
		<div class="flex-item-field-container">
			<Field label="Username">
				<Input class="text-input" value="John" />
			</Field>
		</div>
		<div class="flex-item-field-container">
			<Field label="Password" error="Wrong password">
				<Input password value="password" />
			</Field>
		</div>
        <div class="flex-item-field-container">
			<Field label="Disabled">
        <Input disabled value="Disabled"/>
    </Field>
</div>
	</div>
	<h3>Number</h3>
	<div class="flex-item-field-container">
		<Field label="Number">
			<Input number value="password" />
		</Field>
	</div>
	<h3>Date</h3>
	<div class="flex-item-field-container">
		<Field label="Date">
			<Input date value="2022-07-01" />
		</Field>
	</div>
	<h3>Select</h3>
	<div class="flex-item-field-container">
        <select style="margin-right: 2rem;">
		<option disabled selected>Choose an Option</option>
		<option value="1">One</option>
		<option value="2">Two</option>
		<option value="3">Three</option>
	</select>
	</div>
	<h3>Radio</h3>
	<Radio value="first" bind:group={radiovalue}>First</Radio>
	<Radio value="second" bind:group={radiovalue}>Second</Radio>
	<Radio value="third" bind:group={radiovalue}>Third</Radio>

	<h3>Checkbox</h3>
	<Checkbox value="first" bind:group={checkboxvalue}>First</Checkbox>
	<Checkbox value="second" bind:group={checkboxvalue}>Second</Checkbox>
</div>

<style>
	.flex-row {
		display: flex;
	}
	.flex-wrap {
		flex-wrap: wrap;
	}
	.flex-item-field-container {
		margin-bottom: 0.7rem;
		margin-right: 1rem;
		width: fit-content;
	}
</style>
