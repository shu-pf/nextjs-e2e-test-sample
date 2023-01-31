import { chromium, expect } from "@playwright/test";

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.context().storageState({ path: "noAuthState.json" });

  await page.goto("http://localhost:3000/auth/sign-in");
  await page.getByRole("button", { name: "サインイン" }).click();

  await page.fill('input[name="username"]', "sample@example.com");
  await page.fill(
    'input[name="password"]',
    process.env.PLAYWRIGHT_USER_PASSWORD as string
  );
  await page.click('button[type="submit"]');

  await expect(page).toHaveTitle(/トップ/);

  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
}

export default globalSetup;
