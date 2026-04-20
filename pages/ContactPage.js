class ContactPage {
    constructor(page) {
        this.page =page;
        this.connn= page.locator('//a[@class="nav-link" and normalize-space()="Contact Us"]');
        this.contt =page.locator('//h2[@class="section-title"]');
        this.naem=page.locator('//input[@type="text"]');
        this.emai=page.locator('//input[@type="email"]');
        this.txtar =page.locator('//textarea[@id="message"]');
        this.send =page.locator('//button[@type="submit"]');
        
    }

    async confill(){
        await this.connn.click();
        await this.contt.hover();
        await this.contt.click();
        //const qq= await this.titee.textContent();
        //console.log(qq);
    }


    async conForm() {
        await this.naem.fill('firstName');
        await this.emai.fill('testd@gmail.com');
        await this.txtar.fill('Hello this is final test \n Looking for more updates \n have a nice day.');

    }

    async  sendd(){
        await this.send.click();
    }
  
}

module.exports = ContactPage;
