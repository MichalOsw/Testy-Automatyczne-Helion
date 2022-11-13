import GlobalPage from "../../pages/GlobalPage";
import { helionHomeUrl } from "../../config/pagesUrl";
import SearchbarPage from "../../pages/components/SearchbarPage";
import { isExportDeclaration } from "typescript";
import {
  incorrectSearchPhrase,
  notFoundMessage,
  searchPhrase,
  searchResultTitle,
} from "../../config/data";
import { searchPageUrl } from "../../config/pagesUrl";
import SearchResultPage from "../../pages/SearchResultPage";
import { notFoundUrl } from "../../config/pagesUrl";

describe("E2E - Searchbar", async () => {
  it("Should open helion home page and verigy url and visible searchbar", async () => {
    await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
    await SearchbarPage.seachbarIsVisible();
  });
  it("Should click on search icon, and verify url", async () => {
    await SearchbarPage.clickOnSearchIcon();
    await expect(browser).toHaveUrl(helionHomeUrl);
  });
  it("Should type search value and verify visibility of popup", async () => {
    await SearchbarPage.typeSearchPhrase(searchPhrase);
    await SearchbarPage.suggestPopupIsVisible();
  });
  it("Should click on see all books button", async () => {
    await SearchbarPage.clickOnSeeAllBooksBtn();
    await browser.pause(2000);
    await expect(browser).toHaveUrl(searchPageUrl);
  });
  it("Should verify visible correctly title and number of books", async () => {
    const title: string = await SearchResultPage.getPageTitle();
    const numberOfBooks: number = await SearchResultPage.getNumberofBooks();
    await expect(title).toContain(searchResultTitle);
    await expect(numberOfBooks).toEqual(20);
  });
  it("Should clear input value", async () => {
    await SearchbarPage.clearSearchbar();
    await expect(await SearchbarPage.getInputValue()).toContain("");
  });
  it("Should type incorrect book name and verify alert", async () => {
    await SearchbarPage.typeSearchPhrase(incorrectSearchPhrase);
    await SearchbarPage.clickOnSearchIcon2();
    await expect(await SearchbarPage.getNotFoundAlertText()).toContain(
      notFoundMessage
    );
  });
  it("Should clear input value and click on searh icon", async () => {
    await SearchbarPage.clearSearchbar();
    await browser.pause(500);
    await SearchbarPage.clickOnSearchIcon2();
    await expect(browser).toHaveUrl(notFoundUrl);
    await expect(await SearchbarPage.getInputValue()).toContain(
      incorrectSearchPhrase
    );
  });
});
