import { test, expect } from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";

const star = require("../../pages/StartPage");
const serv = require("../../pages/ServicePage");
const foo = require("../../pages/FoodService");
const gyy = require("../../pages/GymService");

test("Gymming", async ({ page }) => {
  const st = new star(page);
  const ser = new serv(page);
  const fose = new foo(page);
  const gy = new gyy(page);

  await test.step("Gyming Services", async () => {
    await st.goto();
    await gy.gymserclick();
    await gy.hoverAllgm();
    await gy.printgmNames();
  });
  // ...
});
