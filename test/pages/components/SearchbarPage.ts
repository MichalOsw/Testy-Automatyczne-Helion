class SearchbarPage {
  get searchInput() {
    return $("#inputSearch");
  }
  async seachbarIsVisible() {
    const input: WebdriverIO.Element = await this.searchInput;
    await input.waitForDisplayed();
  }

  get searchIcon() {
    return $("//button[contains(text(),'Szukaj')]");
  }

  get suggestPopup() {
    return $("form#szukanie div.suggest-list");
  }

  get seeAllBooksBtn() {
    return $("li.wszystkie>p>a");
  }

  get notFoundAlert() {
    return $("div.not-found");
  }
  async getNotFoundAlertText(): Promise<string> {
    const alert: WebdriverIO.Element = await this.notFoundAlert;
    await browser.pause(2000);
    await alert.waitForDisplayed();
    await browser.pause(2000);
    return await alert.getText();
  }

  async clickOnSeeAllBooksBtn() {
    const btn: WebdriverIO.Element = await this.seeAllBooksBtn;
    await btn.waitForDisplayed();
    await btn.scrollIntoView();
    await btn.click();
  }

  async suggestPopupIsVisible() {
    const popup: WebdriverIO.Element = await this.suggestPopup;
    await popup.waitForDisplayed();
  }

  async typeSearchPhrase(value: string) {
    const input: WebdriverIO.Element = await this.searchInput;
    await input.waitForDisplayed();
    await input.setValue(value);
    await browser.pause(2000);
    await browser.keys(["Control", "a"]);
  }

  get rodo() {
    return $("#rodo-ok");
  }

  async clickOnSearchIcon() {
    const icon: WebdriverIO.Element = await this.searchIcon;
    const rodo: WebdriverIO.Element = await this.rodo;
    await rodo.click();
    await icon.waitForDisplayed();
    await icon.click();
  }

  async clickOnSearchIcon2() {
    const icon: WebdriverIO.Element = await this.searchIcon;
    await icon.waitForDisplayed();
    await icon.click();
  }
  async clearSearchbar() {
    const input: WebdriverIO.Element = await this.searchInput;
    await input.waitForDisplayed();
    await input.clearValue();
  }
  async getInputValue(): Promise<string> {
    const input: WebdriverIO.Element = await this.searchInput;
    await input.waitForDisplayed();
    return await input.getValue();
  }
}

export default new SearchbarPage();
