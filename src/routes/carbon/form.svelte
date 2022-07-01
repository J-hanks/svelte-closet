<script>
	import {
		DatePicker,
		DatePickerInput,
		FileUploader,
		FileUploaderDropContainer,
		FileUploaderItem
	} from 'carbon-components-svelte';
	import { TimePicker, TimePickerSelect } from 'carbon-components-svelte';
	import { FormGroup, Checkbox, RadioButtonGroup, RadioButton } from 'carbon-components-svelte';
	import { TextInput, PasswordInput, NumberInput } from 'carbon-components-svelte';
	import { Select, SelectItem, SelectItemGroup, MultiSelect } from 'carbon-components-svelte';
	import { Theme } from 'carbon-components-svelte';
	import { Button, Modal } from 'carbon-components-svelte';

	let theme = 'white';
	let date_picker_modal_open = false;
    let files;
	$: {
		console.log(theme);
	}
</script>

<Theme bind:theme />

<div class="content-container">
	<div>
		<h1>Form</h1>
		<h3>Text</h3>
		<div class="flex-row flex-wrap">
			<div class="flex-item-field-container">
				<TextInput
					labelText="User name"
					helperText="Your user name is associated with your email"
					placeholder="Enter user name..."
				/>
			</div>
			<div class="flex-item-field-container">
				<PasswordInput
					invalid
					invalidText="Wrong password"
					labelText="Password"
					placeholder="Enter password..."
				/>
			</div>
			<div class="flex-item-field-container">
				<TextInput disabled labelText="User name" placeholder="Enter user name..." />
			</div>
		</div>

		<h3>Number</h3>
		<div class="flex-row flex-wrap">
			<div class="flex-item-field-container">
				<NumberInput label="Number" value={0} helperText="Clusters provisioned in your region" />
			</div>
			<div class="flex-item-field-container">
				<NumberInput
					min={4}
					max={20}
					value={4}
					invalidText="Number must be between 4 and 20."
					helperText="Clusters provisioned in your region"
					label="Clusters (4 min, 20 max)"
				/>
			</div>
		</div>

		<h3>DateTime</h3>
		<div class="flex-row flex-wrap" style="max-width:700px ;">
			<div class="flex-item-field-container">
				<DatePicker datePickerType="single" on:change>
					<DatePickerInput labelText="Single date" placeholder="mm/dd/yyyy" />
				</DatePicker>
			</div>
			<div class="flex-item-field-container">
				<DatePicker datePickerType="range" on:change>
					<DatePickerInput labelText="Range start" placeholder="mm/dd/yyyy" />
					<DatePickerInput labelText="Range date" placeholder="mm/dd/yyyy" />
				</DatePicker>
			</div>
			<div class="flex-item-field-container flex-col">
				<label class="bx--label">Open in Modal</label>

				<Button size="field" on:click={() => (date_picker_modal_open = true)}>Select date</Button>

				<Modal
					bind:open={date_picker_modal_open}
					modalHeading="Meeting date"
					primaryButtonText="Confirm"
					secondaryButtonText="Cancel"
					on:click:button--secondary={() => (date_picker_modal_open = false)}
				>
					<DatePicker datePickerType="single" style="min-height: 420px">
						<DatePickerInput labelText="Meeting date" placeholder="mm/dd/yyyy" />
					</DatePicker>
				</Modal>
			</div>
		</div>

		<h3>Select</h3>
		<div class="flex-row flex-wrap">
			<div class="flex-item-field-container">
				<Select bind:selected={theme} helperText="Select an color theme." labelText="Carbon Theme">
					<SelectItemGroup label="Light theme">
						<SelectItem value="white" text="White" />
						<SelectItem value="g10" text="Gray 10" />
					</SelectItemGroup>
					<SelectItemGroup label="Dark theme">
						<SelectItem value="g80" text="Gray 80" />
						<SelectItem value="g90" text="Gray 90" />
						<SelectItem value="g100" text="Gray 100" />
					</SelectItemGroup>
				</Select>
			</div>
		</div>
		<h3>Radio</h3>
		<FormGroup legendText="Radio buttons">
			<RadioButtonGroup name="radio-button-group" selected="default-selected">
				<RadioButton id="radio-1" value="standard" labelText="Standard Radio Button" />
				<RadioButton
					id="radio-2"
					value="default-selected"
					labelText="Default Selected Radio Button"
				/>
				<RadioButton id="radio-4" value="disabled" labelText="Disabled Radio Button" disabled />
			</RadioButtonGroup>
		</FormGroup>
		<h3>Checkbox</h3>
		<FormGroup legendText="Checkboxes">
			<Checkbox id="checkbox-0" labelText="Checkbox Label" checked />
			<Checkbox id="checkbox-1" labelText="Checkbox Label" />
			<Checkbox id="checkbox-2" labelText="Checkbox Label" disabled />
		</FormGroup>
		<h3>File</h3>
		<FileUploader
			multiple
			labelTitle="Upload files"
			buttonLabel="Add files"
			labelDescription="Only JPEG files are accepted."
			accept={['.jpg', '.jpeg']}
			status="complete"
		/>
		<FileUploaderItem name="README.md" status="uploading" />
		<FileUploaderItem name="README.md" status="edit" />
		<FileUploaderItem name="README.md" status="complete" />
		<FileUploaderItem
			invalid
			id="readme"
			name="README.md"
			errorSubject="File size exceeds 500kb limit"
			errorBody="Please select a new file."
			status="edit"
			on:delete
		/>
		<FileUploaderDropContainer
			multiple
			labelText="Drag and drop files here or click to upload"
			validateFiles={(files) => {
				return files.filter((file) => file.size < 1_024);
			}}
			on:change={(e) => {
				console.log('files', e.detail);
			}}
		/> 
	</div>
</div>

<style>
	div.content-container {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
	}
	h3 {
		margin-top: 0.8rem;
		margin-bottom: 0.5rem;
	}
	.flex-row {
		display: flex;
	}
	.flex-col {
		display: flex;
		flex-direction: column;
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
