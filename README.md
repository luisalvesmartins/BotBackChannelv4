# Back Channel Bot on v4

This is an adaptation to SDKv4 of Ryan Volum's code for SDK v3 (https://github.com/ryanvolum/backChannelBot)

This is a basic bot that uses the [DirectLine](https://docs.botframework.com/en-us/restapi/directline3/) backchannel to send and receive event messages to an instance of [WebChat](https://github.com/Microsoft/BotFramework-WebChat).

To run this:
- Register the bot, get the MICROSOFT_APP_ID and MICROSOFT_APP_PASSWORD. Copy the directline from the Web Chat channel.
- npm install
- node app
- configure (ngrok)(https://docs.botframework.com/en-us/node/builder/guides/core-concepts/#debugging-locally-using-ngrok)  or deploy to Azure.
- Play with the buttons on the page.