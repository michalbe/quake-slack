const Slack = require('slack-node');
const path = require('path');

const apiToken = process.argv[2];
const demos_path = process.argv[3] || path.join(__dirname, '..', 'demos');
const stat_parser = require('./stat-parser');

slack = new Slack(apiToken);

stat_parser(demos_path)
.then(stats => {
    const players = stats.players.reduce((memo, val, i) => {
        if (i === 0) {
            val.name = `*${val.name}*`
        };

        memo.push(`${val.name} (*${val.frags}*)`);
        return memo;
    }, []).join(' :vs: ');

    slack.api('chat.postMessage', {
        text: `*${stats.map.toUpperCase()}* deathmatch results: ${players}`,
        username: 'Jeloquake',
        icon_emoji: ":quake:",
        channel: '#t2'
    }, function (err, response) {
        console.log(response);
    });
});
