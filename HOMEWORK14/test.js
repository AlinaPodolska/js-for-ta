const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const { clickElementByValueAttr } = require("./utils");

const runTask1Test = async () => {
  const driver = new Builder().forBrowser("chrome").build();
  await driver.get("http://the-internet.herokuapp.com/dropdown");

  const options = await driver.findElements(By.tagName("option"));
  const firstElementState = await options[0].isEnabled();
  const secondElementState = await options[1].isEnabled();

  assert.equal(firstElementState, false);
  assert.equal(secondElementState, true);

  await driver.quit();
};

const runTask2Test = async () => {
  const driver = new Builder().forBrowser("chrome").build();
  await driver.get("http://the-internet.herokuapp.com/hovers");
  const action = driver.actions({ async: true });

  const cards = await driver.findElements(By.className("figure"));
  const cardsTitles = await driver.findElements(By.className("figcaption"));

  await action.move({ origin: cards[0] }).perform();

  const titleDisplay = await cardsTitles[0].getCssValue("display");

  assert.equal(titleDisplay, "block");

  await driver.quit();
};

const runTask3Test = async () => {
  const driver = new Builder().forBrowser("chrome").build();
  await driver.get("http://formy-project.herokuapp.com/form");

  // inputs
  const firstNameInput = await driver.findElement(By.id("first-name"));
  const lastNameInput = await driver.findElement(By.id("last-name"));
  const jobTitleInput = await driver.findElement(By.id("job-title"));

  const inputTags = await driver.findElements(By.tagName("input"));

  const selectMenu = await driver.findElement(By.id("select-menu"));
  const selectOptions = await driver.findElements(By.tagName("option"));

  const datePicker = await driver.findElement(By.id("datepicker"));

  const submitButton = await driver.findElement(
    By.className("btn btn-lg btn-primary")
  );

  // interactions
  await firstNameInput.sendKeys("Peter");
  await lastNameInput.sendKeys("Peterson");
  await jobTitleInput.sendKeys("tester");

  await clickElementByValueAttr(inputTags, "radio-button-1");
  await clickElementByValueAttr(inputTags, "checkbox-1");

  await selectMenu.click();
  await clickElementByValueAttr(selectOptions, "2");

  await datePicker.sendKeys("12/12/2020");

  await submitButton.click();

  const successAlert = await driver.wait(
    until.elementLocated(By.className("alert alert-success"))
  );

  const successText = await successAlert.getText();

  // assertion
  assert.equal(successText, "The form was successfully submitted!");

  await driver.quit();
};

const runTask4Test = async () => {
  const driver = new Builder().forBrowser("chrome").build();
  await driver.get("http://the-internet.herokuapp.com/tables");

  const dues = await driver.findElement(
    By.xpath('//table[@id="table2"]//thead//span[@class="dues"]')
  );

  await dues.click();

  const firstRawDue = await driver.findElement(
    By.xpath('//table[@id="table2"]//tbody//tr[1]//td[@class="dues"]')
  );
  const secondRawDue = await driver.findElement(
    By.xpath('//table[@id="table2"]//tbody//tr[2]//td[@class="dues"]')
  );
  const thirdRawDue = await driver.findElement(
    By.xpath('//table[@id="table2"]//tbody//tr[3]//td[@class="dues"]')
  );
  const fourthRawDue = await driver.findElement(
    By.xpath('//table[@id="table2"]//tbody//tr[4]//td[@class="dues"]')
  );

  assert.equal(await firstRawDue.getText(), "$50.00");
  assert.equal(await secondRawDue.getText(), "$50.00");
  assert.equal(await thirdRawDue.getText(), "$51.00");
  assert.equal(await fourthRawDue.getText(), "$100.00");

  await driver.quit();
};

const runTests = async () => {
  await runTask1Test();
  await runTask2Test();
  await runTask3Test();
  await runTask4Test();
};

runTests();
