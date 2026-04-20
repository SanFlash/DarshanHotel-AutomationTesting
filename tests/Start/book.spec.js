import { test, expect } from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";

const star = require("../../pages/StartPage");
const serv = require("../../pages/ServicePage");
const foo = require("../../pages/FoodService");
const gyy = require("../../pages/GymService");
const boo = require("../../pages/BookService");

test("Booking", async ({ page }) => {
  const st = new star(page);
  const ser = new serv(page);
  const fose = new foo(page);
  const gy = new gyy(page);
  const bo = new boo(page);

  await test.step("Booking Services", async () => {
    await st.goto();
    await bo.butclick();
    //await gy.hoverAllgm();
    //await gy.printgmNames();
  });

  await test.step("Fill the form" , async()=>{
    await bo.fillForm();
    await bo.book('2026-05-01', '2026-05-05');
    await bo.selectOption();
    await bo.butto();
  });


  // ...
});
