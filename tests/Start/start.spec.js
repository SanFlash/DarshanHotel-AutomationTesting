import { test, expect } from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";

const star = require("../../pages/StartPage");
const serv = require("../../pages/ServicePage");

test("Star", async ({ page }) => {
  const st = new star(page);
  const ser = new serv(page);

  await test.step("Open Url", async () => {
    await st.goto();
    const title = await st.getTitle();

    console.log("Page Title:", title);
    console.log("Done1");
    
  });

  await test.step("Navigate to Rooms" ,async()=>{
    await ser.scrol();
    await ser.visi();
    await ser.wait(1);
    await ser.roomclick();
    await ser.wait(2);
    await ser.hoverAllRooms();
    await ser.printRoomNames();
  });



});
