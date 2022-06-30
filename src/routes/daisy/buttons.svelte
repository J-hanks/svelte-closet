<script>
</script>

<div class="content-container">
	<div>
		<h1 class="text-4xl">Buttons</h1>
		<p />
		<h3 class="text-2xl">Default Buttons</h3>
		<button class="btn">Default</button>
		<button class="btn btn-primary">Primary</button>
		<button class="btn btn-secondary">Secondary</button>
		<button class="btn btn-accent">Accent</button>
		<button class="btn btn-info">Info</button>
		<button class="btn btn-success">Success</button>
		<button class="btn btn-warning">Warning</button>
		<button class="btn btn-error">Error</button>

		<hr />

		<h3 class="text-2xl">Outline Buttons</h3>
		<button class="btn btn-outline">Default</button>
		<button class="btn btn-outline btn-primary">Primary</button>
		<button class="btn btn-outline btn-secondary">Secondary</button>
		<button class="btn btn-outline btn-accent">Accent</button>
		<button class="btn btn-outline btn-info">Info</button>
		<button class="btn btn-outline btn-success">Success</button>
		<button class="btn btn-outline btn-warning">Warning</button>
		<button class="btn btn-outline btn-error">Error</button>
		<hr />

		<h3 class="text-2xl">Icon buttons</h3>
		<button class="btn btn-square">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
		<button class="btn btn-primary btn-square btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
		<button class="btn btn-secondary btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
		<button class="btn btn-accent btn-circle btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
		<button class="btn btn-info gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/></svg
			>
			Button
		</button>
		<hr />

		<h3 class="text-2xl">States</h3>
		<button class="btn btn-square loading" />
		<button class="btn loading">loading</button>
		<hr />

		<h3 class="text-2xl">Dropdown button</h3>
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
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}
	button {
		margin: 0.5rem 0.5rem 0.8rem 0;
	}
    hr {
        margin-top: .5rem;
    }
</style>
