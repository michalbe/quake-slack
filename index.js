const Slack = require('slack-node');
// console.log(process.argv);
const apiToken = process.argv[2];

slack = new Slack(apiToken);

slack.api('chat.postMessage', {
    text: "Kolejny mecz zakończony. Wyniki: *budzor* 10 : 3 maciek niszczyciel",
    username: 'Jeloquake',
    icon_emoji: ":quake:",
    channel: '#t2'
}, function (err, response) {
    console.log(response);
});
