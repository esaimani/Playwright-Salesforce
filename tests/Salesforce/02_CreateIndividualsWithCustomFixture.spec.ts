import { test } from "../../fixtures/fixture";

test('Create Individual with custom fixture', async ({ loginPage, homePage, individualPage }) => {
    await test.step('Step 1 - Launch Salesforce & login', async () => {
        await loginPage.openAppUsingEnv();
        await loginPage.loginUsingEnv();

    });

    // await test.step('Step 2 - Open Individual Page', async () => {
    //     await homePage.openIndividualsMenu();
    // })

    // await test.step('Step 3 - Create New Individual', async () => {
    //     await individualPage.createIndividual();
    // })
})