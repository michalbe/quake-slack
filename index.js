const Slack = require('slack-node');
// console.log(process.argv);
const apiToken = process.argv[2];
const stat_parser = require('./stat-parser');

slack = new Slack(apiToken);

// slack.api('chat.postMessage', {
//     text: "Kolejny mecz zakończony. Wyniki: *budzor* 10 : 3 maciek niszczyciel",
//     username: 'Jeloquake',
//     icon_emoji: ":quake:",
//     channel: '#t2'
// }, function (err, response) {
//     console.log(response);
// });
