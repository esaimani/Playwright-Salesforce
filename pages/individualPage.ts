import { Page } from "@playwright/test";
import { Wrapper } from "../wrappers/Wrapper";
import { newButton, lastName, saveButton } from "../pageobjects/individualPage"
import { faker } from "@faker-js/faker";

export class IndividualPage extends Wrapper {

    constructor(page: Page) {
        super(page);
    }

    randomName: string = faker.person.fullName();

    async createIndividual() {
        console.log(this.randomName);

        await this.click(newButton);
        await this.type(lastName, this.randomName);
        await this.click(saveButton);
    }

    async closePage() {
        await this.close();
    }
}