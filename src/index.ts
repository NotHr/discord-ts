import { Client } from "discord.js";
import { config } from "dotenv";
import { IntentOptions } from "./config/Intents";
config();
const client  = new Client({
    intents:[IntentOptions]
})

client.login(process.env.TOKEN)
.then(res => {
    console.log('Connected to client')
})
.catch(err => {
    console.log(err)
})