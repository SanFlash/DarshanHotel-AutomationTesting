import { test, expect } from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";

const star = require("../../pages/StartPage");
const serv = require("../../pages/ServicePage");
const foo = require("../../pages/FoodService");
const gyy = require("../../pages/GymService");
const port = require("../../pages/Portfolio");

test("Portfolio", async ({ page }) => {
  const st = new star(page);
  const ser = new serv(page);
  const fose = new foo(page);
  const gy = new gyy(page);
  const por =  new port(page);


  await test.step("Portfolio Open", async () => {
    await st.goto();
    await por.portfolclick();
    console.log('Portfolio Page Opened');
    await por.scro();
    console.log('Scrolled to Footer');
    await por.noa();
    await por.scro();
    
    
  });

  await test.step("Portfolio Facilities" , async()=>{
    await por.wait(1);
    await por.caiNames();
  })
  // ...
});
