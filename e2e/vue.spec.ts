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

test('PLAY button takes user to game', async ({ page }) => {
  await page.getByRole('button').click();
  const gameComponent = page.locator('div.poker-game').first();
  await expect(gameComponent).toBeVisible();
});


test('options container has three buttons', async ({ page }) => {
  await page.getByRole('button').click();
  const buttons = page.locator('div.options-container button');
  await expect(buttons).toHaveCount(3);
});

test('cards container has five cards', async ({ page }) => {
  await page.getByRole('button').click();
  const cards = page.locator('div.card-container div.card');
  await expect(cards).toHaveCount(5);
});
