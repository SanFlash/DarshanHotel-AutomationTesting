class StartPage {
  constructor(page) {
    this.page = page;
    this.nav = page.locator('//ul[@class="navbar-nav ms-auto"]');
    this.ser = page.locator('//h2[text()="Our Services"]');
    this.abu = page.locator('//h2[text()="About Us"]');
    this.so = page.locator('//h2[text()="Seasonal Offers"]');
    this.vo = page.locator('//button[text()="View Offers"]');
    this.bn = page.locator('//button[text()="Book Now"]');
    this.ff = page.locator('//h2[text()="Follow Us"]');
    this.rr = page.locator('//h4[text()="Rooms"]');
    


  }

  async goto() {
    await this.page.goto('https://sanflash.github.io/DarshanHotel.com/');
  }

  async getTitle() {
    return await this.page.title();
  }

  async scroll(){
    await this.page.evaluate(() => {
      locator.scrollIntoViewIfNeeded(); ;
    });
  }

  async clic(){
    await this.rr.click();
  }


}

module.exports=StartPage;