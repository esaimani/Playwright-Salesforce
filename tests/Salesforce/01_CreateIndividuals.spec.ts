import { test } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { HomePage } from "../../pages/homePage";
import { IndividualPage } from "../../pages/individualPage";

test('Create New Indiviual', async ({ page }) => {

    const loginpage = new LoginPage(page);
    const homePage = new HomePage(page);
    const individualPage = new IndividualPage(page);
    await test.step('Step 1 - Launch Salesforce & login', async () => {
        await loginpage.openApp();
        await loginpage.login();
    });
    await test.step('Step 2 - Open Individual Page', async () => {
        await homePage.openIndividuals();
    })

    await test.step('Step 3 - Create New Individual', async () => {
        await individualPage.createIndividual();
    })


})