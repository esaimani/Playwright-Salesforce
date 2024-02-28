import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { IndividualPage } from "../pages/individualPage";

export const test = baseTest.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    individualPage: async ({ page }, use) => {
        await use(new IndividualPage(page))
    }
});

