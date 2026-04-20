class FoodService {
    constructor(page) {
        this.page =page;

        this.food = page.locator('//h4[normalize-space()="Food Services"]');
        this.foca = page.locator('//div[@class="service-card"]');
        this.foti = page.locator('//div[@class="service-info"]//h5');
    }

    async fodserclick(){
        await this.food.hover();
        await this.food.click();
    }


    async hoverAllFood() {
    const count = await this.foca.count();

    for (let i = 0; i < count; i++) {
      await this.foca.nth(i).scrollIntoViewIfNeeded();
      await this.foca.nth(i).hover();
      await this.foca.nth(i);
    }
  }

  async printFoodNames() {
    const count = await this.foti.count();

    for (let i = 0; i < count; i++) {
      const text = await this.foti.nth(i).textContent();
      console.log(`Food ${i + 1}:`, text);
    }
  }
}

module.exports = FoodService;
