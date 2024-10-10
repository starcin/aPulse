export default {
	verbose				: true,
	nDataPoints			: 90,
	responseTimeGood	: 300, // In milliseconds, this and below will be green
	responseTimeWarning	: 600, // In milliseconds, above this will be red
	timeout				: 5000, // In milliseconds, requests will be aborted above this. (Do not )
	readableStatusJson	: true, // Format status.json to be human readable
	logsMaxDatapoints	: 200, // Maximum datapoints history to keep (per endpoint)
	telegram			: {
		botToken	: '', // Contact @BotFather on telegram to create a bot
		chatId		: '',// Send a message to the bot, then visit https://api.telegram.org/bot<token>/getUpdates to get the chatId
	},
	sites				: [
		{
			id				: 'google', // optional
			name			: 'Google',
			endpoints		: [
				{
					id				: 'homepage', // optional
					name			: 'Homepage',
					link			: 'https://www.google.com', // optional
					url				: 'https://www.google.com',
					request			: { // fetch options
						method: 'GET',
					},
					mustFind		: 'Feeling Lucky', // String | Regex | Function | AsyncFunction
					mustNotFind		: /Page not found/i,
					customCheck		: (content, response)=>{return true;},
					validStatus		: [200],
				}
			]
		}
	],
};