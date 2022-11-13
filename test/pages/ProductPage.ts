class ProductPage {
  get productTitle() {
    return $("div.title-group > h1 >span[itemprop='name']");
  }

  async productTitleIsVisible() {
    const title: WebdriverIO.Element = await this.productTitle;
    await title.waitForDisplayed();
  }

  get addToCartButton() {
    return $("a#addToBasket_inf041");
  }

  async addToCartBtnIsVisible() {
    const btn: WebdriverIO.Element = await this.addToCartButton;
    await btn.waitForDisplayed();
  }
  async ClickOnAddToCartButton() {
    const btn: WebdriverIO.Element = await this.addToCartButton;
    await btn.waitForDisplayed();
    await btn.click();
  }

  async getProductTitleValue(): Promise<string> {
    const title: WebdriverIO.Element = await this.productTitle;
    await title.waitForDisplayed();
    return await title.getText();
  }

  get productPrice() {
    return $("#cena_d");
  }
  async getProductPrice(): Promise<string> {
    const price: WebdriverIO.Element = await this.productPrice;
    await price.waitForDisplayed();
    return await price.getText();
  }
}

export default new ProductPage();
