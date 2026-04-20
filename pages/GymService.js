class GymService {
    constructor(page) {
        this.page =page;
        this.gmm = page.locator('//h4[normalize-space()="Gymming"]');
        //
        this.gyca = page.locator('//div[@class="facility-card"]');
        this.gyif = page.locator('//div[@class="facility-info"]//h5');
    }

    async gymserclick(){
        await this.gmm.hover();
        await this.gmm.click();
    }


    async hoverAllgm() {
    const count = await this.gyca.count();

    for (let i = 0; i < count; i++) {
      await this.gyca.nth(i).scrollIntoViewIfNeeded();
      await this.gyca.nth(i).hover();
      await this.gyca.nth(i);
    }
  }

  async printgmNames() {
    const count = await this.gyif.count();

    for (let i = 0; i < count; i++) {
      const text = await this.gyif.nth(i).textContent();
      console.log(`Gym ${i + 1}:`, text);
    }
  }
}

module.exports = GymService;
