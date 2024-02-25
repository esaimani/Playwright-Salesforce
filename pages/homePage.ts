import { Page } from "@playwright/test";
import { Wrapper } from "../wrappers/Wrapper";
import { toggle, viewAll, individual } from "../pageobjects/homePage"
export class HomePage extends Wrapper {

    constructor(page: Page) {
        super(page);
    }

    async openIndividuals() {
        //Click on Toggle Button
        await this.click(toggle);
        await this.click(viewAll);
        await this.click(individual);

    }
}