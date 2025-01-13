import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('start component text is visible', async ({ page }) => {
  const heading = page.getByRole('heading', { name: 'Guess the cards' });
  await expect(heading).toBeVisible();
});

test('start component PLAY button is visible', async ({ page }) => {
  const button = page.getByRole('button');
  await expect(button).toHaveText('PLAY');
});
