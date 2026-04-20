import { test, expect } from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";

const star = require("../../pages/StartPage");
const serv = require("../../pages/ServicePage");
const foo = require("../../pages/FoodService");
const gyy = require("../../pages/GymService");
const boo = require("../../pages/BookService");
const con = require("../../pages/ContactPage");
const porr = require("../../pages/Portfolio");

test("Contact Form", async ({ page }) => {
  const st = new star(page);
  const ser = new serv(page);
  const fose = new foo(page);
  const gy = new gyy(page);
  const bo = new boo(page);
  const cont = new con(page); 
  const po=new porr(page);

  await test.step("Contact Services", async () => {
    await st.goto();

    await cont.confill();
   //await gy.hoverAllgm();
    //await gy.printgmNames();
  });

  await test.step("Fill the form" , async()=>{
    await cont.conForm();
    await cont.sendd();

  });


  // ...
});
