class ServicePage {
  constructor(page) {
    this.page = page;
    this.roomsHeader = page.locator('//h2[normalize-space()="Our Services"]');
    this.rom = page.locator(
      '//div[@class="service-info"]//h4[normalize-space()="Rooms"]',
    );
    this.roms = page.locator('//div[@class="room-card"]');
    this.roomTitles = page.locator('//div[@class="room-info"]//h5');
  }

  async scrol() {
    await this.roomsHeader.scrollIntoViewIfNeeded();
  }

  async wait(seconds) {
    await this.page.waitForTimeout(seconds * 1000);
  }

  async visi() {
    await this.roomsHeader.scrollIntoViewIfNeeded(); // ✅ proper scroll
    await this.roomsHeader.hover(); // optional
  }

  async roomclick() {
    await this.rom.hover();
    await this.rom.click();
    console.log("hello");
  }

  async hoverAllRooms() {
    const count = await this.roms.count();

    for (let i = 0; i < count; i++) {
      await this.roms.nth(i).scrollIntoViewIfNeeded();
      await this.roms.nth(i).hover();
      await this.roms.nth(i);
    }
  }

  async printRoomNames() {
    const count = await this.roomTitles.count();

    for (let i = 0; i < count; i++) {
      const text = await this.roomTitles.nth(i).textContent();
      console.log(`Room ${i + 1}:`, text);
    }
  }






}

module.exports = ServicePage;
