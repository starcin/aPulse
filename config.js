export default {
	interval			: 1, // Interval in minutes between each pulse
	nDataPoints			: 90, // Number of datapoints to display on the dashboard
	responseTimeGood	: 300, // In milliseconds, this and below will be green
	responseTimeWarning	: 600, // In milliseconds, above this will be red
	timeout				: 5000, // In milliseconds, requests will be aborted above this
	verbose				: true, // Whether or not to output pulse messages in the console
	readableStatusJson	: true, // Format status.json to be human readable
	logsMaxDatapoints	: 200, // Maximum datapoints history to keep (per endpoint)
	telegram			: { // optional, tokens to send notifications through telegram
		botToken	: '', // Contact @BotFather on telegram to create a bot
		chatId		: '',// Send a message to the bot, then visit https://api.telegram.org/bot<token>/getUpdates to get the chatId
	},
	slack				: { // optional, tokens to send notifications through slack
		botToken	 : '',
		channelId	: '',
	},
	discord				: { // optional, tokens to send notifications through discord
		webhookUrl	: '',
	},
	twilio				: { // optional, tokens to send notifications through twilio (SMS)
		accountSid		: '',
		accountToken	: '',
		toNumber		: '',
		twilioNumber	: '',
	},
	sendgrid				: { // optional, tokens to send notifications through sendgrid (Email)
		apiKey			: '',
		toEmail			: '',
		toFromEmail		: '',
	},
	consecutiveErrorsNotify			: 1, // After how many consecutive Errors events should we send a notification
	consecutiveHighLatencyNotify	: 3, // After how many consecutive High latency events should we send a notification
	sites				: [ // List of sites to monitor
		{
			id				: 'studio',
			name			: 'Studio',
			endpoints		: [
				{
					id				: 'landing',
					name			: 'Landing',
					link			: false,
					url				: 'https://platform.aixplain.com',
					request			: {
						method: 'GET',
					},
				}
			]
		},
		{
			id				: 'bel-esprit',
			name			: 'Bel Esprit',
			endpoints		: [
				{
					id				: 'landing',
					name			: 'Landing',
					link			: false,
					url				: 'https://belesprit.aixplain.com',
					request			: {
						method: 'GET',
					},
				}
			]
		},
		{
			id				: 'agent-ui',
			name			: 'Agent UI',
			endpoints		: [
				{
					id				: 'landing',
					name			: 'Landing',
					link			: false,
					url				: 'https://agent.aixplain.com',
					request			: {
						method: 'GET',
					},
				}
			]
		},
		{
			id				: 'docs',
			name			: 'Docs',
			endpoints		: [
				{
					id				: 'landing',
					name			: 'Landing',
					link			: false,
					url				: 'https://docs.aixplain.com',
					request			: {
						method: 'GET',
					},
				}
			]
		},
		{
			id				: 'authentication',
			name			: 'Authentication',
			endpoints		: [
				{
					id				: 'landing',
					name			: 'Landing',
					link			: false,
					url				: 'https://auth.aixplain.com',
					request			: {
						method: 'GET',
					},
				}
			]
		},
		{
			id				: 'models',
			name			: 'Models',
			endpoints		: [
				{
					id				: '60ddefae8d38c51c5885eff7',
					name			: 'Translate from English to German on AWS',
					link			: false,
					url				: 'https://dev-models.aixplain.com/api/v1/execute/60ddefae8d38c51c5885eff7',
					request			: {
						method: 'POST',
						body: JSON.stringify({"text": "hi"}),
						headers: {
							"x-api-key": "83e2d8f5007e80a7c8900fdac7562ac2af6aa4447ac4276dd64ccd439bbe7ae0",
							"Content-Type": "application/json"
						}
					},
				}
			]
		}
	],
};
