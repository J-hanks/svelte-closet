<script>
    import 'chota';
    import {Input,Button, Nav} from 'svelte-chota';

    let color_primary = '#14854F';
    let color_lightGrey = '#d2d6dd';
    let color_grey = '#747681';
    let color_darkGrey = '#3f4144';
    let color_error = '#d43939';
    let color_success = '#28bd14';
    let grid_maxWidth = '120rem';
    let grid_gutter = '2rem';
    let font_size = '1.6rem';
    let font_family = '"Helvetica Neue", sans-serif';
</script>


<Nav>
    <div slot="left" style="display: flex;">
        <a class="active" href="/">Link 1</a>
    </div>

    <a slot="center" href="/" class="brand">LOGO</a>

    <div slot="right" style="display: flex;">
        <a href="/">Link 3</a>
    </div>
</Nav>

<main>
    <slot />
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
        display: flex;
        justify-content: center;
        flex: 1;
        padding-top: 30px;
        padding-bottom: 200px;
        /* align-items: center; */
    }
    :global(:root) {
        --color-primary: #14854F;
        --color-lightGrey: #d2d6dd;
        --color-grey: #747681;
        --color-darkGrey: #3f4144;
        --color-error: #d43939;
        --color-success: #28bd14;
        --grid-maxWidth: 120rem;
        --grid-gutter: 2rem;
        --font-size: 1.6rem;
        --font-family: "Helvetica Neue", sans-serif;
    }
</style>