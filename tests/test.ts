import { expect, test } from '@playwright/test';

test('index page should have h1 title', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Svelte Closet');
});
