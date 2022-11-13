import {
  searchPhrase,
  alertMessage,
  deletedProductMessage,
} from "../../config/data";
import {
  cartUrl,
  helionHomeUrl,
  searchProductUrl,
} from "../../config/pagesUrl";
import SearchbarPage from "../../pages/components/SearchbarPage";
import ProductPage from "../../pages/ProductPage";
import SearchResultPage from "../../pages/SearchResultPage";
import CartPage from "../../pages/components/CartPage";

describe("E2E = Products", async () => {
  let productTitle: string = "";
  let price: string = "";

  before(() => {
    browser.url(helionHomeUrl);
  });

  it("Should type search phrase and click search icon", async () => {
    await SearchbarPage.typeSearchPhrase(searchPhrase);
    await SearchbarPage.clickOnSearchIcon();
    await expect(browser).toHaveUrl(searchProductUrl);
  });
  it("Should click on first book", async () => {
    await SearchResultPage.clickOnFirstBookItem();
    await ProductPage.productTitleIsVisible();
    await ProductPage.addToCartBtnIsVisible();
    productTitle = await ProductPage.getProductTitleValue();
    price = await ProductPage.getProductPrice();
  });
  it("Should click add to cart button", async () => {
    await ProductPage.ClickOnAddToCartButton();
    await expect(browser).toHaveUrlContaining(cartUrl);
    await expect(await CartPage.getSuccessAlertValue()).toContain(productTitle);
    await expect(await CartPage.getTheTotalPriceValue()).toContain(price);
  });
  it("Should delete product from cart", async () => {
    await CartPage.clickOnCheckbox();
    await CartPage.clickOnDeleteSelectedLabel();
    await expect(await browser.getAlertText()).toContain(alertMessage);
    await CartPage.acceptDeleteAlert();
    await expect(await CartPage.getDeletedAlertMessageValue()).toContain(
      deletedProductMessage
    );
  });
});
