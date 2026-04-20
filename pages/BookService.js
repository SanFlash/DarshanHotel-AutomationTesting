class BookService {
  constructor(page) {
    this.page = page;
    this.viewbutton = page.locator('//button[@data-aos="bounce"]');
    //
    this.titee = page.locator('//h2[@class="section-title"]');
    this.nae = page.locator('//input[@id="name"]');
    this.ema = page.locator('//input[@id="email"]');
    this.checkIn = page.locator("#checkIn");
    this.checkOut = page.locator("#checkOut");
    this.bookBtn = page.locator('button:has-text("Book Now")');
    this.roomType=page.locator('//select[@id="roomType"]');
  }

  async butclick() {
    await this.viewbutton.hover();
    await this.viewbutton.click();
    const qq = await this.titee.textContent();
    console.log(qq);
  }

  async fillForm() {
    await this.nae.fill("firstName");
    await this.ema.fill("testd@gmail.com");
    //await this.chckin.fill('02/04/2026');
  }
  async book(checkInDate, checkOutDate) {
    await this.checkIn.fill(checkInDate);
    await this.checkOut.fill(checkOutDate);
  }

  async selectOption() {
    await this.roomType.selectOption({ index: 1 });
  }

  async butto() {
    await this.bookBtn.click();
  }
}

module.exports = BookService;
