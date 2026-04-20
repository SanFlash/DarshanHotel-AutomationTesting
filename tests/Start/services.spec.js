import { test, expect } from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";

const star = require("../../pages/StartPage");
const serv = require("../../pages/ServicePage");
const foo = require("../../pages/FoodService");

test("Food Services", async ({ page }) => {
  const st = new star(page);
  const ser = new serv(page);
  const fose = new foo(page);

  await test.step("Food Services", async () => {
    await st.goto();
    await fose.fodserclick();
    await fose.hoverAllFood();
    await fose.printFoodNames();
  });
  // ...
});
