import { test, expect } from "@playwright/test";

test("ログインしているかどうか", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.getByTestId("user-name")).toHaveText("sample@example.com");
});
