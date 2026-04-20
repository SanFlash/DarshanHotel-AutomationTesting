class Portfolio {
  constructor(page) {
    this.page = page;
    this.port = page.locator('//a[@class="nav-link" and text()="Portfolio"]');
    this.foot = page.locator('//footer[text()]');
    this.tile = page.locator('//h2[@class="section-title"]');
    this.car = page.locator('//div[@class="col"]');
    this.faci = page.locator('//h3[text()]');
  }

  async portfolclick() {
    await this.port.hover();
    await this.port.click();
  }

  async scro() {
    await this.foot.scrollIntoViewIfNeeded();
  }

  async wait(seconds) {
    await this.page.waitForTimeout(seconds * 1000);
  }

  async title(){
    await this.page.tile.hover();

  }

  async noa() {
    const count = await this.car.count();

    for (let i = 0; i < count; i++) {
      await this.car.nth(i).scrollIntoViewIfNeeded();
      await this.car.nth(i).hover();
      await this.car.nth(i).click();
      await this.wait(1);
      await this.car.nth(i).click();
    }
  }

  async caiNames() {
    const count = await this.faci.count();

    for (let i = 0; i < count; i++) {
      const text = await this.faci.nth(i).textContent();
      console.log(`Room ${i + 1}:`, text);
    }
  }



}

module.exports = Portfolio;
