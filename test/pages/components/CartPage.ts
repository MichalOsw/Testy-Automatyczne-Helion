class CartPage {
  get successAlert() {
    return $("div.successbox > p");
  }

  async getSuccessAlertValue(): Promise<string> {
    const alert: WebdriverIO.Element = await this.successAlert;
    await alert.waitForDisplayed();
    return await alert.getText();
  }

  get totalPrice() {
    return $("h3#cart-edit-summary");
  }
  async getTheTotalPriceValue(): Promise<string> {
    const price: WebdriverIO.Element = await this.totalPrice;
    await price.waitForDisplayed();
    return await price.getText();
  }

  get checkbox() {
    return $("form#formularz tr th.checkbox");
  }
  async clickOnCheckbox() {
    const checkbox: WebdriverIO.Element = await this.checkbox;
    await checkbox.waitForDisplayed();
    await checkbox.scrollIntoView();
    await checkbox.click();
  }

  get deleteSelectedLabel() {
    return $("div#usun a");
  }

  async clickOnDeleteSelectedLabel() {
    const deleteSelectedLabel: WebdriverIO.Element = await this
      .deleteSelectedLabel;
    await deleteSelectedLabel.waitForDisplayed();
    await deleteSelectedLabel.scrollIntoView();
    await deleteSelectedLabel.click();
  }

  async acceptDeleteAlert() {
    await browser.acceptAlert();
  }

  get deletedBoxAlertMessage() {
    return $("div.infobox > p");
  }

  async getDeletedAlertMessageValue() {
    const alert: WebdriverIO.Element = await this.deletedBoxAlertMessage;
    await alert.waitForDisplayed();
    return await alert.getText();
  }
}

export default new CartPage();
