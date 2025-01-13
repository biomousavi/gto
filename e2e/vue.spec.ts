import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('visits the app root url', async ({ page }) => {
  const heading = page.getByRole('heading', { name: 'Guess the cards' });
  await expect(heading).toBeVisible();
});
