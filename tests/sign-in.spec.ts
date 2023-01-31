import { test, expect } from "@playwright/test";

test.use({ storageState: "generate/noAuthState.json" });

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/auth/sign-in");

  await expect(page).toHaveTitle(/サインイン/);
});

test("sign-in", async ({ page }) => {
  await page.goto("http://localhost:3000/auth/sign-in");
  await page.getByRole("button", { name: "サインイン" }).click();

  await page.fill('input[name="username"]', "sample@example.com");
  await page.fill(
    'input[name="password"]',
    process.env.PLAYWRIGHT_USER_PASSWORD as string
  );
  await page.click('button[type="submit"]');

  await expect(page).toHaveTitle(/トップ/);
});
