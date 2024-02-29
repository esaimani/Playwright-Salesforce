import { FullConfig } from "@playwright/test";
import dotenv from "dotenv";

async function globalSetup(config: FullConfig) {

    if (process.env.env_name) {
        dotenv.config({
            path: `./env/.env.${process.env.env_name}`,
            override: true
        })
    }

} export default globalSetup;