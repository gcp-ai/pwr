import { test, expect } from '@playwright/test';

test('Verify Pricing Page Heading', async ({ page }) => {
  await page.goto('https://www.phone.email/privacy-policy');

  // Click the 'Pricing' link and wait for navigation
  await Promise.all([
    page.waitForLoadState('domcontentloaded'), // Ensures page has loaded
    page.getByRole('link', { name: 'Admin Dashboard' }).click(),
  ]);

  // Expect the page to have an H1 heading with 'Price Plan'
  await expect(page.getByRole('heading', { level: 1, name: 'Admin Dashboard' })).toBeVisible();
});