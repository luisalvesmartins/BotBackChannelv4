//PRETTY BORING CODE, NOTHING HAPPENS HERE
const { mainBot } = require('./mainBot');
var restify = require('restify');
    const { BotFrameworkAdapter, ConversationState,MemoryStorage } = require('botbuilder');

    adapter = new BotFrameworkAdapter({ 
        appId: process.env.MICROSOFT_APP_ID ? process.env.MICROSOFT_APP_ID : '',
        appPassword: process.env.MICROSOFT_APP_PASSWORD ? process.env.MICROSOFT_APP_PASSWORD : ''
        });

    const storage = new MemoryStorage();
    let convoState= new ConversationState(storage);

    // Setup Restify Server
    var server = restify.createServer();
    server.listen(process.env.port || 3978, function () {
        console.log('%s listening to %s', server.name, server.url);
    });
    const bot = new mainBot(convoState);
    server.post('/api/messages', (req, res) => {
        adapter.processActivity(req, res, async (context) => {
            await bot.onTurn(context);
        })
    });
