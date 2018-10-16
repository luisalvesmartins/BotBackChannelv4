class mainBot{
    constructor(conversationState){
		this.state=conversationState;
    }
    async onTurn(context){
		if (context.activity.type === 'message') {
            //Just an echo back to check it's working
            await context.sendActivity("you said " + context.activity.text + " and I'm changing color to cyan.");
            
            //THIS IS WHERE THE MAGIC HAPPENS:
            //Send the event message
            await context.sendActivity({name:"changeBackgroundColor", value:"cyan",type:"event"});
        }
        else
        {
            //THIS IS WHERE THE MAGIC HAPPENS ALSO:
            await context.sendActivity("Activity type received:" + context.activity.type);
            if (context.activity.type=="event"){
                await context.sendActivity("name of the event:" + context.activity.name);
            }
        }
    }
}

exports.mainBot=mainBot;

